// Runs on every page as it is built. Wraps the word SHINE in headings and eyebrows in a
// span so it can be shown in the gold gradient (see .shine-word in global.css).
// The copy itself is untouched; only the presentation changes.
import { defineMiddleware } from 'astro:middleware';

const wrap = (inner: string) =>
  inner.replace(/(^|>)([^<]*)/g, (_m, open: string, text: string) => open + text.replace(/\bSHINE\b/g, '<span class="shine-word">SHINE</span>'));

export const onRequest = defineMiddleware(async (_ctx, next) => {
  const res = await next();
  if (!(res.headers.get('content-type') || '').includes('text/html')) return res;
  let html = await res.text();
  // Headings
  html = html.replace(/(<(h[1-4])\b[^>]*>)([\s\S]*?)(<\/\2>)/g, (_m, open: string, _tag: string, inner: string, close: string) => open + wrap(inner) + close);
  // Eyebrows and labels above headings
  html = html.replace(/(<p\b[^>]*class="[^"]*\b(?:eyebrow|label)\b[^"]*"[^>]*>)([\s\S]*?)(<\/p>)/g, (_m, open: string, inner: string, close: string) => open + wrap(inner) + close);
  return new Response(html, { status: res.status, headers: res.headers });
});
