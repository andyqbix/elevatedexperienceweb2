// Brand and quality check. Run `npm run build` first, then `npm run check:copy`.
// Scans the built site for forbidden brand spellings, em dashes, missing alt text, broken internal links,
// and missing search metadata. Exits with an error if anything is found.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
if (!fs.existsSync(dist)) { console.error('No dist folder. Run `npm run build` first.'); process.exit(1); }

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
const files = walk(dist);
const pages = files.filter((f) => f.endsWith('.html'));
const texts = files.filter((f) => f.endsWith('.txt'));

const rules = [
  [/—/g, 'Em dash'],
  [/eXPERIENCE/g, 'Mixed-case "eXPERIENCE"'],
  [/Elevated Experience(?! Workshop)/g, '"Elevated Experience" without the capital X'],
  [/(Customer|Employee|Digital) Experience(?!s? to Increase)/g, 'Brand phrase without the capital X'],
  [/CX Energizer/g, '"CX Energizer" with a Z'],
  [/Coach-sulting|CoachSulting|Coach sulting/g, 'Wrong spelling of Coachsulting'],
  [/Biz Shui|Bizshui|BizShui(?!™)/g, 'BizShui without ™ or misspelt'],
  [/SHINE Blueprint™/g, 'SHINE Blueprint with ™'],
  [/\b(organiz|recogniz|prioritiz|optimiz|energiz|realiz|customiz)/gi, 'American spelling in page copy'],
];
// Testimonials, published video titles and the legal company name are quoted exactly, so they are exempt.
const exempt = (line) => /class="tcard|data-quote|data-title=|class="title"|Play video:|Elevated eXperience Ltd|youtube|sr-only/.test(line);

const problems = [];
const strip = (html) => html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');

for (const file of pages) {
  const rel = '/' + path.relative(dist, file).replace(/\\/g, '/');
  const raw = fs.readFileSync(file, 'utf8');
  // The HX events feed is written on Hive, not part of the approved copy, so it is excluded
  const html = strip(raw).replace(/<ul class="ev-grid[\s\S]*?<\/ul>/g, '');
  // Quoted material is checked separately from our own copy
  const own = html.replace(/<figure class="glass tcard[\s\S]*?<\/figure>/g, '').replace(/<figure class="vcard[\s\S]*?<\/figure>/g, '');
  const text = own.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&');
  for (const [re, label] of rules) {
    const hits = text.match(re);
    if (hits) problems.push(`${rel}: ${label} (${[...new Set(hits)].join(', ')})`);
  }
  // Em dashes are not allowed anywhere, including quotes
  if (/—/.test(html.replace(/<[^>]+>/g, ' '))) problems.push(`${rel}: Em dash inside quoted material`);
  for (const img of html.match(/<img\b[^>]*>/g) || []) if (!/\salt[\s=>]/.test(img)) problems.push(`${rel}: image without alt attribute`);
  if (!/<title>[^<]{10,}/.test(raw)) problems.push(`${rel}: missing title`);
  if (!/name="description" content="[^"]{50,}/.test(raw) && !rel.startsWith('/404')) problems.push(`${rel}: missing or short meta description`);
  if (!/rel="canonical"/.test(raw)) problems.push(`${rel}: missing canonical link`);
  if ((raw.match(/<h1[\s>]/g) || []).length !== 1) problems.push(`${rel}: page should have exactly one h1`);
  const ld = raw.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  try { JSON.parse(ld[1]); } catch { problems.push(`${rel}: structured data missing or invalid`); }
  // Internal links must resolve to a built page, and same-page anchors must exist
  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    const href = m[1];
    if (href.startsWith('#')) { if (href.length > 1 && !new RegExp(`id="${href.slice(1)}"`).test(html)) problems.push(`${rel}: anchor ${href} not found`); continue; }
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const clean = href.split('#')[0].split('?')[0];
    const target = path.join(dist, clean, clean.endsWith('/') ? 'index.html' : '');
    if (!fs.existsSync(target)) problems.push(`${rel}: broken internal link ${href}`);
    else if (!clean.endsWith('/') && !path.extname(clean)) problems.push(`${rel}: internal link without trailing slash ${href}`);
  }
  for (const m of raw.matchAll(/target="_blank"(?![^>]*rel="noopener noreferrer")[^>]*>/g)) if (!/rel="noopener noreferrer"/.test(m[0])) {
    const tag = raw.slice(raw.lastIndexOf('<a', m.index), m.index + m[0].length);
    if (!/rel="noopener noreferrer"/.test(tag)) problems.push(`${rel}: new-tab link without rel="noopener noreferrer"`);
  }
}
for (const file of texts) {
  const t = fs.readFileSync(file, 'utf8');
  if (/—/.test(t) || /eXPERIENCE/.test(t)) problems.push(`/${path.basename(file)}: em dash or mixed-case eXPERIENCE`);
}
for (const need of ['robots.txt', 'sitemap-index.xml', 'llms.txt', 'llms-full.txt']) if (!fs.existsSync(path.join(dist, need))) problems.push(`Missing /${need}`);

if (problems.length) { console.error(`${problems.length} issue(s) found:\n` + [...new Set(problems)].map((p) => ' - ' + p).join('\n')); process.exit(1); }
console.log(`Checked ${pages.length} pages and ${texts.length} text files: no brand, link or metadata issues.`);
