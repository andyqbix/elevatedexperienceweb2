// Articles from Sanity. Read once per build (the dataset is public, so no key is needed).
// Publishing in the studio triggers a Vercel rebuild through the Sanity webhook.
import { toHTML, uriLooksSafe } from '@portabletext/to-html';

export const sanity = { projectId: 's2mpqcie', dataset: 'production', studio: 'https://elevatedexperience.sanity.studio' };

export interface SanityImage { asset?: { _ref: string }; alt?: string; caption?: string; hotspot?: { x: number; y: number } }
export interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  _updatedAt: string;
  featured?: boolean;
  topics?: string[];
  mainImage: SanityImage;
  author?: { name: string; slug?: string };
  body: any[];
  seo?: { metaTitle?: string; metaDescription?: string; ogImage?: SanityImage };
}

const QUERY = `*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  _id, title, "slug": slug.current, excerpt, publishedAt, _updatedAt, featured, topics, mainImage, body, seo,
  "author": author->{ name, "slug": slug.current }
}`;

let cache: Promise<Post[]> | undefined;
/** All published articles, newest first. */
export function getPosts(): Promise<Post[]> {
  cache ??= (async () => {
    const url = `https://${sanity.projectId}.apicdn.sanity.io/v2024-01-01/data/query/${sanity.dataset}?query=${encodeURIComponent(QUERY)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Sanity returned ${res.status} while loading articles`);
    return ((await res.json()).result as Post[]).filter((p) => p.title && p.slug);
  })();
  return cache;
}

/** Featured articles first; if none are marked, the newest three. */
export const featuredPosts = (posts: Post[], n = 3) => {
  const marked = posts.filter((p) => p.featured);
  return (marked.length ? marked : posts).slice(0, n);
};

export const postUrl = (slug: string) => `/resources/${slug}/`;

/** Image dimensions from the asset reference, e.g. image-abc-1200x800-png. */
export function imageSize(img?: SanityImage) {
  const m = img?.asset?._ref.match(/-(\d+)x(\d+)-\w+$/);
  return m ? { width: Number(m[1]), height: Number(m[2]) } : { width: 1600, height: 900 };
}

/** Sanity image CDN address, resized and served as WebP/AVIF where the browser supports it. */
export function imageUrl(img: SanityImage | undefined, opts: { w?: number; h?: number; fit?: 'crop' | 'max' } = {}) {
  const ref = img?.asset?._ref;
  if (!ref) return '';
  const [, id, dims, ext] = ref.split('-');
  const p = new URLSearchParams({ auto: 'format', q: '80' });
  if (opts.w) p.set('w', String(opts.w));
  if (opts.h) p.set('h', String(opts.h));
  if (opts.w && opts.h) { p.set('fit', opts.fit ?? 'crop'); if (img?.hotspot) { p.set('crop', 'focalpoint'); p.set('fp-x', String(img.hotspot.x)); p.set('fp-y', String(img.hotspot.y)); } }
  return `https://cdn.sanity.io/images/${sanity.projectId}/${sanity.dataset}/${id}-${dims}.${ext}?${p}`;
}
export const srcset = (img: SanityImage | undefined, widths: number[], ratio?: number) =>
  widths.map((w) => `${imageUrl(img, { w, h: ratio ? Math.round(w / ratio) : undefined })} ${w}w`).join(', ');

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
export const slugify = (s: string) => s.toLowerCase().replace(/&[a-z]+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
export const plainText = (blocks: any[] = []) => blocks.filter((b) => b._type === 'block').map((b) => (b.children || []).map((c: any) => c.text).join('')).join('\n\n');

/** Article body to HTML. Headings get ids for linking; links to other sites open in a new tab. */
export function bodyHtml(body: any[] = []) {
  return toHTML(body, {
    components: {
      block: {
        h2: ({ children, value }) => `<h2 id="${slugify((value.children || []).map((c: any) => c.text).join(''))}">${children}</h2>`,
        h3: ({ children }) => `<h3>${children}</h3>`,
        h4: ({ children }) => `<h4>${children}</h4>`,
        blockquote: ({ children }) => `<blockquote>${children}</blockquote>`,
      },
      marks: {
        link: ({ children, value }) => {
          const href = value?.href || '';
          if (!uriLooksSafe(href)) return children;
          const external = /^https?:\/\//.test(href) && !href.includes('elevatedexperience.vip');
          return `<a href="${esc(href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${children}</a>`;
        },
      },
      types: {
        image: ({ value }) => {
          const { width, height } = imageSize(value);
          const h = Math.round((1200 * height) / width);
          return `<figure class="a-figure"><img src="${imageUrl(value, { w: 1200 })}" srcset="${srcset(value, [640, 960, 1200, 1600])}" sizes="(min-width: 48rem) 44rem, 92vw" width="1200" height="${h}" alt="${esc(value.alt || '')}" loading="lazy" decoding="async" />${value.caption ? `<figcaption>${esc(value.caption)}</figcaption>` : ''}</figure>`;
        },
      },
    },
  });
}

/** Reading time in minutes at 230 words per minute. */
export const readingTime = (body: any[]) => Math.max(1, Math.round(plainText(body).split(/\s+/).filter(Boolean).length / 230));

export const formatDate = (iso: string) => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
