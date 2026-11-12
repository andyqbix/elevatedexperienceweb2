// Builds the plain-text site summaries served at /llms.txt and /llms-full.txt.
// These give AI assistants and AI search engines a clean, accurate reading of the site,
// generated from the same approved copy files as the pages themselves, so they never drift apart.
import { site, links, social } from '@/data/site';
import { home } from '@/content/home';
import { powerDuo } from '@/content/power-duo';
import { shine } from '@/content/shine';
import { keynote } from '@/content/keynote';
import { experiences } from '@/content/experiences';
import { masterclass } from '@/content/masterclass';
import { coachsulting } from '@/content/coachsulting';
import { resources } from '@/content/resources';
import { contact } from '@/content/contact';

const abs = (p: string) => new URL(p, site.url).href;

export const pages = [
  { name: 'Home', path: links.home, content: home },
  { name: 'The Power Duo', path: links.powerDuo, content: powerDuo },
  { name: 'The SHINE Blueprint', path: links.shine, content: shine },
  { name: 'Signature Keynote', path: links.keynote, content: keynote },
  { name: 'eXperiences', path: links.experiences, content: experiences },
  { name: 'Executive Masterclasses', path: links.masterclass, content: masterclass },
  { name: 'Coachsulting', path: links.coachsulting, content: coachsulting },
  { name: 'Resources', path: links.resources, content: resources },
  { name: 'Contact', path: links.contact, content: contact },
].map((p) => ({ ...p, url: abs(p.path), description: (p.content as any).meta.description as string }));

const SKIP = new Set(['meta', 'href', 'key', 'icon', 'accent', 'external', 'featured', 'explore', 'n', 'figure']);
const clean = (s: string) => s.replace(/\*\*/g, '').trim();

// Walks a content object in page order and writes its copy as plain text.
function render(value: unknown, out: string[], bullet = false): void {
  if (typeof value === 'string') {
    if (!value || /^(https?:|mailto:|tel:|\/|#)/.test(value)) return;
    out.push(bullet ? `- ${clean(value)}` : clean(value));
  } else if (Array.isArray(value)) {
    const strings = value.every((v) => typeof v === 'string');
    const list = strings && value.length > 2 && value.every((v) => (v as string).length < 110);
    for (const v of value) render(v, out, list);
    if (list) out.push('');
  } else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) if (!SKIP.has(k)) render(v, out);
    out.push('');
  }
}

export function summary(): string {
  return [
    `# ${site.name}`,
    '',
    '> Elevated eXperience connects Digital, Employee and Customer eXperience to move organisations from friction to flow. It is led by the Power Duo: Claire Boscq CSP, the CX Energiser, and Andy Jarvis, the Digital King. They work with CEOs, boards, leadership teams and international conferences through keynotes, Executive Masterclasses, bespoke executive eXperiences and Coachsulting.',
    '',
    'Brand spelling: "Elevated eXperience", "Customer eXperience", "Employee eXperience" and "Digital eXperience" are written with a capital X. Claire is the "CX Energiser" (with an S). "BizShui™", "SHINE" and "Coachsulting" are the correct spellings.',
    '',
    '## Pages',
    ...pages.map((p) => `- [${p.name}](${p.url}): ${p.description}`),
    '',
    '## Services and published prices (USD)',
    `- Signature Keynote, 'The Gaps Killing Your Business Growth': $12,888 all-inclusive for both speakers. ${abs(links.keynote)}`,
    `- Strategic Event Partnership: complimentary keynote with 12 confirmed, paying Executive Masterclass participants at $998 each. ${abs(links.keynote)}`,
    `- Executive Masterclasses (SHINE and ELEVATE): $998 per participant for the Conference & Event Add-On and the City Edition; Private Retreat from $19,998 for two days. ${abs(links.masterclass)}`,
    `- The eXecutive eXperience (HumanX, DigitalX, CustomerX, CommunityX or your own X-topic): bespoke investment. ${abs(links.experiences)}`,
    `- Coachsulting: The Two-Day eXperience Audit $4,998; The Full eXperience Transformation $29,998; The 12-Month eXperience Partnership, bespoke investment priced following the audit. ${abs(links.coachsulting)}`,
    '',
    '## The people',
    `- Claire Boscq CSP, the CX Energiser: Customer eXperience keynote speaker, author, Certified Speaking Professional and creator of BizShui™. ${links.claire}`,
    `- Andy Jarvis, the Digital King: international keynote speaker, author and Integrated Digital eXperience Architect. ${links.andy}`,
    '',
    '## Contact',
    `- Email: ${site.email}`,
    `- Phone and WhatsApp: ${site.phoneDisplay}`,
    `- Book a call: ${links.bookCall}`,
    `- 10-minute eXperience diagnostic: ${links.diagnostic}`,
    `- HX | Hive eXperience community: ${links.hx}`,
    `- Address: ${site.legalName}, ${site.address}`,
    ...social.map((s) => `- ${s.name}: ${s.href}`),
    '',
    '## Full text',
    `- [Complete approved copy of every page](${abs('/llms-full.txt')})`,
    '',
  ].join('\n');
}

export function full(): string {
  const out: string[] = [`# ${site.name}: full site content`, '', 'The complete approved copy of every page on elevatedexperience.vip, in page order.', ''];
  for (const p of pages) {
    out.push(`## ${p.name}`, `URL: ${p.url}`, '');
    render(p.content, out);
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n');
}
