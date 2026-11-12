// Pulls the published articles from the current live WordPress site into content-holding/articles,
// ready to be migrated into Sanity later. Nothing in this folder is published by the new site.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const out = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'content-holding', 'articles');
fs.mkdirSync(out, { recursive: true });
const decode = (s) => s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"');
const res = await fetch('https://elevatedexperience.vip/wp-json/wp/v2/posts?per_page=100&_embed=wp:featuredmedia,wp:term', { headers: { 'User-Agent': 'Mozilla/5.0 (site migration script)' } });
if (!res.ok) throw new Error(`WordPress returned ${res.status}`);
const posts = await res.json();
const index = [];
for (const p of posts) {
  const dir = path.join(out, p.slug);
  fs.mkdirSync(dir, { recursive: true });
  const media = p._embedded?.['wp:featuredmedia']?.[0];
  const terms = (p._embedded?.['wp:term'] || []).flat();
  const meta = {
    title: decode(p.title.rendered),
    slug: p.slug,
    originalUrl: p.link,
    published: p.date,
    modified: p.modified,
    excerpt: decode(p.excerpt.rendered.replace(/<[^>]+>/g, '')).trim(),
    categories: terms.filter((t) => t.taxonomy === 'category').map((t) => t.name),
    tags: terms.filter((t) => t.taxonomy === 'post_tag').map((t) => t.name),
    featuredImage: media ? { url: media.source_url, alt: media.alt_text || '', file: null } : null,
    images: [],
  };
  const urls = new Set([...p.content.rendered.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]));
  if (media) urls.add(media.source_url);
  for (const u of urls) {
    try {
      const r = await fetch(u); if (!r.ok) throw new Error(r.status);
      const name = path.basename(new URL(u).pathname);
      fs.writeFileSync(path.join(dir, name), Buffer.from(await r.arrayBuffer()));
      meta.images.push({ url: u, file: name });
      if (media && u === media.source_url) meta.featuredImage.file = name;
    } catch (e) { console.warn('  image failed', u, e.message); }
  }
  fs.writeFileSync(path.join(dir, 'article.json'), JSON.stringify(meta, null, 2));
  fs.writeFileSync(path.join(dir, 'content.html'), p.content.rendered);
  index.push({ title: meta.title, slug: meta.slug, published: meta.published.slice(0, 10), originalUrl: meta.originalUrl, images: meta.images.length });
  console.log('saved', meta.slug, `(${meta.images.length} images)`);
}
fs.writeFileSync(path.join(out, 'index.json'), JSON.stringify(index, null, 2));
