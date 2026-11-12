// Downloads the YouTube thumbnail for every YouTube video listed in src/data/videos.ts
// into src/assets/video-thumbs, so pages make no request to YouTube until a visitor presses play.
import fs from 'node:fs';
import sharp from 'sharp';

const src = fs.readFileSync(new URL('../src/data/videos.ts', import.meta.url), 'utf8');
const ids = [...src.matchAll(/yt\('\w+',\s*'([\w-]{11})'/g)].map((m) => m[1]);
const out = new URL('../src/assets/video-thumbs/', import.meta.url);
fs.mkdirSync(out, { recursive: true });

for (const id of ids) {
  let buf = null;
  for (const name of ['maxresdefault', 'sddefault', 'hqdefault']) {
    const res = await fetch(`https://i.ytimg.com/vi/${id}/${name}.jpg`);
    if (!res.ok) continue;
    const b = Buffer.from(await res.arrayBuffer());
    const meta = await sharp(b).metadata();
    if (meta.width >= 480) { buf = b; break; }
  }
  if (!buf) { console.warn('No thumbnail found for', id); continue; }
  // 16:9 crop removes the black bars on the 4:3 fallback sizes
  await sharp(buf).resize(1280, 720, { fit: 'cover', withoutEnlargement: true }).jpeg({ quality: 82 }).toFile(new URL(`${id}.jpg`, out).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
  console.log('saved', id);
}
