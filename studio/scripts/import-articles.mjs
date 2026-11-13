// One-off import of the published articles from the old WordPress site into Sanity.
// Reads ../content-holding/articles, uploads the images, converts the article HTML to Sanity rich text
// and creates the documents as published. Safe to re-run: documents use fixed IDs and are replaced.
// Needs SANITY_WRITE_TOKEN in the project's .env file.
//   cd studio && npm run import-articles
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import { Schema } from '@sanity/schema';
import { htmlToBlocks } from '@sanity/block-tools';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, '..', '..');
const env = Object.fromEntries(fs.readFileSync(path.join(root, '.env'), 'utf8').split(/\r?\n/).filter((l) => /^[A-Z_]+=/.test(l)).map((l) => [l.slice(0, l.indexOf('=')), l.slice(l.indexOf('=') + 1).trim()]));
const PROJECT = env.SANITY_PROJECT_ID, DATASET = env.SANITY_DATASET || 'production', TOKEN = env.SANITY_WRITE_TOKEN;
if (!PROJECT || !TOKEN) throw new Error('SANITY_PROJECT_ID and SANITY_WRITE_TOKEN must be set in .env');
const API = `https://${PROJECT}.api.sanity.io/v2024-01-01`;
const auth = { Authorization: `Bearer ${TOKEN}` };
const HOLD = path.join(root, 'content-holding', 'articles');

// Articles to import. "Social media is broken" is already in Sanity, so it is not imported again.
const plan = [
  { slug: 'hx-free-whats-the-catch-there-isnt-one', author: 'claire', topics: ['Community'] },
  { slug: 'how-disconnected-dx-ex-and-cx-affects-business-growth', author: 'claire', topics: ['Digital eXperience', 'Employee eXperience', 'Customer eXperience', 'Business Growth'] },
  { slug: 'the-great-divergence-how-we-missed-the-ultimate-experience-and-how-to-reclaim-it', author: 'andy', topics: ['AI and Technology', 'Customer eXperience'] },
];
// Topics for the articles that were already in Sanity (only added if they have none yet)
const existingTopics = {
  'the-invisible-tax-on-enterprise-growth-quantifying-the-friction-between-dx-ex-and-cx': ['Digital eXperience', 'Employee eXperience', 'Customer eXperience', 'Business Growth'],
  'from-friction-to-flow-from-sh-t-to-shine': ['Leadership', 'Business Growth'],
  'social-media-is-broken-let-s-fix-it': ['Community'],
};

const key = () => crypto.randomBytes(6).toString('hex');
async function query(q) {
  const r = await fetch(`${API}/data/query/${DATASET}?query=${encodeURIComponent(q)}`, { headers: auth });
  return (await r.json()).result;
}
async function mutate(mutations) {
  const r = await fetch(`${API}/data/mutate/${DATASET}?returnIds=true`, { method: 'POST', headers: { ...auth, 'Content-Type': 'application/json' }, body: JSON.stringify({ mutations }) });
  const j = await r.json();
  if (!r.ok) throw new Error(JSON.stringify(j));
  return j;
}
async function upload(file) {
  const ext = path.extname(file).slice(1).toLowerCase();
  const type = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', gif: 'image/gif' }[ext] || 'image/png';
  const r = await fetch(`${API}/assets/images/${DATASET}?filename=${encodeURIComponent(path.basename(file))}`, { method: 'POST', headers: { ...auth, 'Content-Type': type }, body: fs.readFileSync(file) });
  const j = await r.json();
  if (!r.ok) throw new Error(JSON.stringify(j));
  return j.document._id;
}

// Rich text definition matching the studio schema (blocks plus images)
const schema = Schema.compile({
  name: 'import',
  types: [{ type: 'object', name: 'post', fields: [{ name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image', fields: [{ name: 'alt', type: 'string' }] }] }] }],
});
const bodyType = schema.get('post').fields.find((f) => f.name === 'body').type;

const decode = (s) => new JSDOM(`<p>${s}</p>`).window.document.body.textContent;
const shorten = (text, max = 220) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '));
  return stop > 80 ? cut.slice(0, stop + 1) : cut.slice(0, cut.lastIndexOf(' ')) + '…';
};

function addKeys(blocks) {
  for (const b of blocks) {
    b._key ||= key();
    if (b._type === 'block') {
      for (const c of b.children || []) c._key ||= key();
      for (const m of b.markDefs || []) m._key ||= key();
    }
  }
  return blocks;
}

// Authors
const authors = await query('*[_type=="author"]{_id,name}');
let andy = authors.find((a) => /andy/i.test(a.name))?._id;
let claire = authors.find((a) => /claire/i.test(a.name))?._id;
if (!claire) {
  claire = 'author-claire-boscq';
  await mutate([{ createIfNotExists: { _id: claire, _type: 'author', name: 'Claire Boscq CSP', slug: { _type: 'slug', current: 'claire-boscq' } } }]);
  console.log('Created author Claire Boscq CSP');
}
if (!andy) throw new Error('Andy Jarvis author not found');
const authorId = { andy, claire };

for (const item of plan) {
  const dir = path.join(HOLD, item.slug);
  const meta = JSON.parse(fs.readFileSync(path.join(dir, 'article.json'), 'utf8'));
  const html = fs.readFileSync(path.join(dir, 'content.html'), 'utf8').replace(/&nbsp;| /g, ' ');
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  // Only the article text (Elementor text-editor widgets); the title, featured image and author box are separate fields
  const parts = [...doc.querySelectorAll('.elementor-widget-text-editor')];
  const container = doc.createElement('div');
  for (const p of parts) container.append(...p.childNodes);
  container.querySelectorAll('h1').forEach((h) => h.remove());
  container.querySelectorAll('script, style').forEach((n) => n.remove());

  // Upload body images that we have locally, and swap their src for the asset reference
  const imageRefs = new Map();
  for (const img of container.querySelectorAll('img')) {
    const file = (img.getAttribute('src') || '').split('?')[0].split('/').pop();
    const local = file && fs.existsSync(path.join(dir, file)) ? path.join(dir, file) : null;
    if (!local || file === meta.featuredImage?.file) { (img.closest('figure') || img).remove(); continue; }
    imageRefs.set(img.getAttribute('src'), await upload(local));
  }

  const blocks = addKeys(htmlToBlocks(container.innerHTML, bodyType, {
    parseHtml: (h) => new JSDOM(h).window.document,
    rules: [{
      deserialize(el, next, block) {
        if (el.tagName?.toLowerCase() !== 'img') return undefined;
        const ref = imageRefs.get(el.getAttribute('src'));
        if (!ref) return undefined;
        return block({ _type: 'image', asset: { _type: 'reference', _ref: ref }, alt: el.getAttribute('alt') || '' });
      },
    }],
  })).filter((b) => b._type !== 'block' || (b.children || []).some((c) => (c.text || '').trim()));

  const mainRef = await upload(path.join(dir, meta.featuredImage.file));
  const title = decode(meta.title);
  const id = `post-wp-${item.slug}`.slice(0, 120);
  await mutate([{
    createOrReplace: {
      _id: id,
      _type: 'post',
      title,
      slug: { _type: 'slug', current: item.slug },
      mainImage: { _type: 'image', asset: { _type: 'reference', _ref: mainRef }, alt: meta.featuredImage.alt || title },
      // WordPress auto-excerpts end in […]; use the first paragraph of the article instead
      excerpt: shorten(/\[…\]|\[&hellip;\]/.test(decode(meta.excerpt)) ? (blocks.find((b) => b.style === 'normal')?.children || []).map((c) => c.text).join('').trim() : decode(meta.excerpt).replace(/\s+/g, ' ').trim()),
      author: { _type: 'reference', _ref: authorId[item.author] },
      publishedAt: new Date(meta.published).toISOString(),
      body: blocks,
      featured: false,
      topics: item.topics,
    },
  }]);
  console.log(`Imported "${title}" (${blocks.length} blocks)`);
}

// Topics for the articles already in Sanity
const existing = await query('*[_type=="post" && !(_id in path("drafts.**"))]{_id,"slug":slug.current,topics}');
for (const p of existing) {
  const t = existingTopics[p.slug];
  if (t && !(p.topics?.length)) { await mutate([{ patch: { id: p._id, setIfMissing: { topics: t } } }]); console.log('Added topics to', p.slug); }
}
console.log('Done.');
