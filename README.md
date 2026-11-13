# Elevated eXperience website

The new website for Elevated eXperience (Claire Boscq CSP and Andy Jarvis), built from scratch with [Astro](https://astro.build) and Tailwind CSS, hosted on Vercel. Blog articles will come from Sanity later; everything else lives in this repository.

## Run it

```
npm install
npm run dev        # local site at http://localhost:4321
npm run build      # production build into dist/
npm run check:copy # brand, link and metadata check (run after a build)
```

## Where things live

| What | Where |
| --- | --- |
| Approved copy, one file per page | `src/content/` |
| Pages (layout and design only) | `src/pages/` |
| Shared components (header, footer, hero, carousels, video player) | `src/components/` |
| Colours, type and shared styles | `src/styles/global.css` |
| Contact details, links, navigation, social profiles | `src/data/site.ts` |
| Client logos list | `src/data/clients.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Videos (supplied clips and YouTube shortlist) | `src/data/videos.ts` |
| Web-ready photos and logos | `src/assets/` |
| Web-ready video | `public/video/` |
| Old articles awaiting migration to Sanity (not published) | `content-holding/articles/` |
| Redirects from old addresses, caching and security headers | `vercel.json` |

## Content is locked

The copy in `src/content/` is the approved wording from the 2027 brief. Change wording only with sign-off, and only in those files; pages print the copy as written. Each file lists the corrections that were approved.

Brand rules, enforced by `npm run check:copy`:

- "Elevated eXperience", "Customer eXperience", "Employee eXperience", "Digital eXperience" in normal case; full uppercase when the whole phrase is uppercase; never "eXPERIENCE".
- "CX Energiser" with an S. "BizShui™", "SHINE" and "Coachsulting" exactly.
- British English. No em dashes.
- Testimonials are quoted word for word (typos fixed, emojis and em dashes removed only).

## Media

Original high-resolution photos, logos and video are kept in `assets-source/`, which is not in GitHub because of its size. Keep a backup of that folder.

```
npm run assets          # regenerate photos, brand marks and single-colour client logos
npm run assets -- video # regenerate the compressed videos (needs assets-source/video)
npm run thumbs          # download thumbnails for the YouTube videos in src/data/videos.ts
node scripts/pull-articles.mjs  # re-pull published articles from the old WordPress site
```

To add a client logo: put the file in `assets-source/client-logos/`, add it to the list in `scripts/build-assets.mjs`, run `npm run assets`, then add it to `src/data/clients.ts`.

## Articles (Sanity)

Articles are written and published in the Sanity Studio at **https://elevatedexperience.sanity.studio** (project `s2mpqcie`, dataset `production`). Everything else on the site lives in this repository.

- Publishing, editing or deleting an article triggers a Sanity webhook that calls a Vercel deploy hook, so the site rebuilds itself within a minute or two.
- Each article gets its own page at `/resources/<web-address>/`, appears in Featured Insights (articles marked "Feature this article", otherwise the newest three) and in Explore the Resources (filterable by topic), and is added to the sitemap, `/llms.txt` and `/llms-full.txt`.
- The studio code (article fields, topics list) is in `studio/`. To change it: `cd studio`, `npm install`, edit `schemaTypes/`, then `npx sanity deploy` (needs `SANITY_AUTH_TOKEN` from `.env`).
- `studio/scripts/import-articles.mjs` imported the old WordPress articles from `content-holding/articles/` (already done; safe to re-run).
- Articles are the authors' own words, so `npm run check:copy` lists brand-spelling issues in them as warnings rather than errors.

## Search and AI search

- Every page has a title, description, canonical address, sharing image and structured data (set in `src/layouts/Base.astro`).
- `/sitemap-index.xml` is generated on every build.
- `/robots.txt` allows search engines and AI crawlers.
- `/llms.txt` and `/llms-full.txt` are generated from the copy files (`src/lib/llms.ts`) so AI assistants read the same approved wording as visitors.

After go-live: add the site to Google Search Console and Bing Webmaster Tools and submit `https://elevatedexperience.vip/sitemap-index.xml`.

## Deploying

Vercel builds every push. `main` is production (currently served at elevatedexperienceweb2.vercel.app, as the live domain is not yet connected); other branches get a private preview address. The domain elevatedexperience.vip is only connected with Andy's or Claire's explicit go-ahead.

## Still to do

- Verlag is not licensed for web use; League Spartan stands in for headings (one line in `global.css` to change).
