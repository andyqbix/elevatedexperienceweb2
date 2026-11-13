// Generates web-ready assets from the original media in /assets-source.
// Run with: npm run assets            (photos, brand, client logos)
//           npm run assets -- video   (also re-encodes video; slow)
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import ffmpegPath from 'ffmpeg-static';

const SRC = 'assets-source';
const OUT_PHOTOS = 'src/assets/photos';
const OUT_BRAND = 'src/assets/brand';
const OUT_CLIENTS = 'src/assets/clients';
const OUT_VIDEO = 'public/video';
for (const d of [OUT_PHOTOS, OUT_BRAND, OUT_CLIENTS, OUT_VIDEO]) fs.mkdirSync(d, { recursive: true });

const doVideo = process.argv.includes('video');

/* ---------- Photos ---------- */
// crop = [x0, y0, x1, y1] as fractions of the original. CEM crops remove the organiser watermark.
const TOP = [0, 0, 1, 0.655];
const photos = [
  ['cem-stage-87.png', 'stage-duo-close', TOP],
  ['cem-stage-92.png', 'stage-claire', TOP],
  ['cem-stage-93.png', 'stage-duo-flipchart', TOP],
  ['cem-stage-94.png', 'stage-duo-andy-speaking', TOP],
  ['cem-stage-96.png', 'stage-duo-wide', TOP],
  ['cem-stage-97.png', 'stage-duo-screen', [0.352, 0, 1, 1]],
  ['cem-stage-98.png', 'stage-duo-room', TOP],
  ['cem-stage-99.png', 'stage-duo-audience', [0.352, 0, 1, 1]],
  ['duo-studio-151.jpg', 'duo-studio-a'],
  ['duo-studio-154.jpg', 'duo-studio-b'],
  ['claire-portrait-csp.jpg', 'claire-portrait-csp'],
  ['claire-portrait-yellow.jpg', 'claire-portrait'],
  ['andy-portrait.jpg', 'andy-portrait'],
  ['duo-networking.jpg', 'duo-networking'],
  ['dtc-2026-duo-stage.jpg', 'stage-duo-dtc'],
  ['dtc-2026-andy-stage.jpg', 'stage-andy-dtc'],
  ['fcc-andy-stage.jpg', 'stage-andy-fcc'],
  ['fcc-duo-portrait.jpg', 'duo-fcc-portrait'],
  ['fcc-duo-wide.jpg', 'duo-fcc-wide'],
  ['duo-venue-phone.jpg', 'duo-venue'],
  ['claire-audience-gala.jpg', 'claire-audience'],
  ['claire-usb-stage.jpg', 'stage-claire-usb'],
  ['flow-pyramid.png', 'flow-pyramid'],
];

for (const [file, name, crop] of photos) {
  let img = sharp(path.join(SRC, 'photos', file)).rotate();
  const meta = await sharp(path.join(SRC, 'photos', file)).metadata();
  if (crop) {
    const [x0, y0, x1, y1] = crop;
    img = img.extract({
      left: Math.round(x0 * meta.width),
      top: Math.round(y0 * meta.height),
      width: Math.round((x1 - x0) * meta.width),
      height: Math.round((y1 - y0) * meta.height),
    });
  }
  await img
    .resize(2600, 2600, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(OUT_PHOTOS, `${name}.jpg`));
  console.log('photo', name);
}

/* ---------- Low resolution originals, enlarged with a gentle sharpen so they stay crisp on large screens ---------- */
for (const [file, name, width] of [['qbix-conference-stage.png', 'stage-qbix-conference', 2400]]) {
  await sharp(path.join(SRC, 'photos', file))
    .resize({ width, kernel: 'lanczos3' })
    .sharpen({ sigma: 0.8, m1: 0.6, m2: 1.2 })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(OUT_PHOTOS, `${name}.jpg`));
  console.log('photo (enlarged)', name);
}

/* ---------- Studio cut-outs (background removed locally, kept transparent so the duo sits on the page) ---------- */
// [source file, output name, mirror horizontally]
for (const [file, name, mirror] of [['duo-studio-154-cutout.png', 'duo-studio-b-cutout', true], ['duo-studio-151-cutout.png', 'duo-studio-a-cutout', false]]) {
  let img = sharp(path.join(SRC, 'photos', file)).trim({ threshold: 1 });
  if (mirror) img = img.flop();
  await img.resize(1600, 1600, { fit: 'inside', withoutEnlargement: true }).png({ compressionLevel: 9 }).toFile(path.join(OUT_PHOTOS, `${name}.png`));
  console.log('cut-out', name);
}

/* ---------- Brand marks (copied unaltered, only transparent padding trimmed) ---------- */
const brand = [
  'ee-logo-full', 'ee-flame', 'ee-x-mark', 'cx-colour', 'ex-colour', 'dx-colour', 'hx-colour',
  'cx-white', 'ex-white', 'dx-white', 'hx-white', 'hx-hive-experience-full',
  'claire-boscq-logo', 'digital-king-logo',
];
for (const b of brand) {
  await sharp(path.join(SRC, 'brand', `${b}.png`)).trim().png({ compressionLevel: 9 }).toFile(path.join(OUT_BRAND, `${b}.png`));
  console.log('brand', b);
}
// Wordmark only (ELEVATED eXperience), cut from the full logo below the flame, unaltered, for the header lockup
{
  const src = path.join(SRC, 'brand', 'ee-logo-full.png');
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const rowEmpty = (y) => { for (let x = 0; x < info.width; x++) if (data[(y * info.width + x) * 4 + 3] > 8) return false; return true; };
  let y = Math.floor(info.height * 0.6);
  while (y < info.height && !rowEmpty(y)) y++; // end of flame
  while (y < info.height && rowEmpty(y)) y++;  // start of wordmark
  await sharp(src).extract({ left: 0, top: y, width: info.width, height: info.height - y }).trim().png({ compressionLevel: 9 }).toFile(path.join(OUT_BRAND, 'ee-wordmark.png'));
  console.log('brand ee-wordmark');
}

/* ---------- Client logos: one colour (white on transparent) ---------- */
// [source file, slug, organisation name]
export const clients = [
  ['hsbc.jpg', 'hsbc', 'HSBC'],
  ['23.png', 'kpmg', 'KPMG'],
  ['SAP.png', 'sap', 'SAP'],
  ['fab.png', 'first-abu-dhabi-bank', 'First Abu Dhabi Bank'],
  ['28.png', 'government-of-jersey', 'Government of Jersey'],
  ['hr dubai gov.png', 'government-of-dubai', 'Government of Dubai'],
  ['22.png', 'jersey-post', 'Jersey Post'],
  ['ports_of_jersey_opt.png', 'ports-of-jersey', 'Ports of Jersey'],
  ['baker tilly.png', 'baker-tilly', 'Baker Tilly Channel Islands'],
  ['sure_opt.png', 'sure', 'Sure'],
  ['24.png', 'trustford', 'TrustFord'],
  ['hand_picked_hotels_opt.png', 'hand-picked-hotels', 'Hand Picked Hotels'],
  ['informa (2).png', 'informa-connect', 'Informa Connect'],
  ['dmg logo.png', 'dmg-events', 'dmg events'],
  ['qna logo.png', 'qna-international', 'QnA International'],
  ['Emirats_Arabes_Unis_03, cci, logo.jpg', 'cci-france-uae', 'CCI France UAE'],
  ['10.png', 'mecsr', 'Middle East Council of Shopping Centres & Retailers'],
  ['pra-new-logo-300x150.jpg', 'philippine-retailers-association', 'Philippine Retailers Association'],
  ['bchamber.jpg', 'british-chamber-philippines', 'British Chamber of Commerce Philippines'],
  ['pcci_opt.png', 'philippine-chamber-of-commerce', 'Philippine Chamber of Commerce and Industry'],
  ['MSPA_Europe_opt-150x150.png', 'mspa-europe-africa', 'MSPA Europe/Africa'],
  ['cropped-VSAI-Logo-150X150.png', 'vsa-international', 'Virtual Speakers Association International'],
  ['PAPS-150x150.png', 'paps', 'Philippine Association of Professional Speakers'],
  ['logo_osiris.png', 'osiris', 'Osiris Management Services'],
  ['vivat_trust_opt.png', 'vivat-trust', 'Vivat Trust'],
  ['harem_opt-150x150.png', 'harem', 'Harem'],
  ['ewpc logo.png', 'ewpc', 'EWPC'],
  ['exito logo.png', 'exito', 'Exito'],
  ['informa.png', 'aqmen365', 'AQMEN365 by Informa Connect'],
  ['world marketing congress.png', 'world-marketing-congress', 'World Marketing Congress'],
  ['7 (2).png', 'customer-fest-show', 'The Customer Fest Show'],
  ['CX west Africa.jpg', 'cx-west-africa-summit', 'CX West Africa Summit'],
  ['franchise_asia_opt-150x150.png', 'franchise-asia', 'Franchise Asia Philippines'],
  ['global-gurus-top30-cx.png', 'global-gurus', 'Global Gurus'],
];

async function monoLogo(file, slug) {
  const { data, info } = await sharp(path.join(SRC, 'client-logos', file)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const px = (x, y) => { const i = (y * w + x) * 4; return [data[i], data[i + 1], data[i + 2], data[i + 3]]; };
  // Background = most common corner colour; transparent corners mean the logo already has a cut-out.
  const corners = [px(0, 0), px(w - 1, 0), px(0, h - 1), px(w - 1, h - 1), px(Math.floor(w / 2), 0), px(Math.floor(w / 2), h - 1)];
  const transparentBg = corners.filter((c) => c[3] < 20).length >= 3;
  let bg = [255, 255, 255];
  if (!transparentBg) {
    const opaque = corners.filter((c) => c[3] > 200);
    bg = [0, 1, 2].map((k) => opaque.map((c) => c[k]).sort((a, b) => a - b)[Math.floor(opaque.length / 2)]);
  }
  // Is this an (almost) all-white logo on transparency? Then alpha alone is the shape.
  let lumSum = 0, n = 0;
  for (let i = 0; i < data.length; i += 4) if (data[i + 3] > 128) { lumSum += (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114); n++; }
  const whiteLogo = transparentBg && n > 0 && lumSum / n > 215;

  const out = Buffer.alloc(w * h * 4);
  let maxA = 0;
  const alphas = new Float32Array(w * h);
  for (let p = 0; p < w * h; p++) {
    const i = p * 4;
    const a = data[i + 3] / 255;
    let d = 1;
    if (!whiteLogo) {
      const dr = data[i] - bg[0], dg = data[i + 1] - bg[1], db = data[i + 2] - bg[2];
      d = Math.min(1, Math.sqrt(dr * dr + dg * dg + db * db) / 200);
    }
    alphas[p] = a * d;
    if (alphas[p] > maxA) maxA = alphas[p];
  }
  for (let p = 0; p < w * h; p++) {
    const i = p * 4;
    let a = maxA > 0 ? alphas[p] / maxA : 0;
    a = Math.min(1, Math.max(0, (a - 0.08) / 0.55)); // lift contrast so shapes read as one solid colour
    out[i] = out[i + 1] = out[i + 2] = 255;
    out[i + 3] = Math.round(a * 255);
  }
  await sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .trim()
    .resize({ height: 160, withoutEnlargement: false, kernel: 'lanczos3' })
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT_CLIENTS, `${slug}.png`));
}

if (process.argv[1] && process.argv[1].endsWith('build-assets.mjs')) {
  for (const [file, slug] of clients) { await monoLogo(file, slug); console.log('client', slug); }
}

/* ---------- Video ---------- */
function ff(args) { execFileSync(ffmpegPath, ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: 'inherit' }); }
const V = (f) => path.join(SRC, 'video', f);

if (doVideo) {
  const h264 = (crf) => ['-c:v', 'libx264', '-preset', 'slow', '-crf', String(crf), '-pix_fmt', 'yuv420p', '-movflags', '+faststart'];
  const aac = ['-c:a', 'aac', '-b:a', '96k', '-ac', '2'];

  // Homepage hero: silent loop
  ff(['-i', V('homepage-hero.mp4'), '-an', '-vf', 'scale=1280:-2,fps=30', ...h264(27), `${OUT_VIDEO}/home-hero.mp4`]);
  ff(['-i', V('homepage-hero.mp4'), '-an', '-vf', 'scale=720:-2,fps=24', ...h264(30), `${OUT_VIDEO}/home-hero-mobile.mp4`]);
  ff(['-ss', '1', '-i', V('homepage-hero.mp4'), '-frames:v', '1', '-vf', 'scale=1600:-2', '-q:v', '4', `${OUT_VIDEO}/home-hero-poster.jpg`]);

  // Masterclass: cropped to Claire and Andy at the front of the room, with sound available
  const mcCrop = 'crop=1160:640:0:20';
  ff(['-ss', '80', '-t', '32', '-i', V('jersey-masterclass.mp4'), '-vf', `${mcCrop},fps=30`, ...h264(27), ...aac, `${OUT_VIDEO}/masterclass-hero.mp4`]);
  ff(['-ss', '92', '-i', V('jersey-masterclass.mp4'), '-frames:v', '1', '-vf', mcCrop, '-q:v', '3', `${OUT_VIDEO}/masterclass-hero-poster.jpg`]);
  const stills = [22, 62, 92, 128, 150, 172, 196, 208];
  stills.forEach((t, i) => ff(['-ss', String(t), '-i', V('jersey-masterclass.mp4'), '-frames:v', '1', '-vf', mcCrop, '-q:v', '2', `${OUT_PHOTOS}/masterclass-${String(i + 1).padStart(2, '0')}.jpg`]));

  // Keynote: silent hero loop plus the full captioned clip with sound
  ff(['-ss', '8', '-t', '14', '-i', V('cem-africa-2026-keynote-clip.mp4'), '-an', '-vf', 'scale=1280:-2,fps=30', ...h264(28), `${OUT_VIDEO}/keynote-hero.mp4`]);
  ff(['-ss', '10', '-i', V('cem-africa-2026-keynote-clip.mp4'), '-frames:v', '1', '-vf', 'scale=1600:-2', '-q:v', '4', `${OUT_VIDEO}/keynote-hero-poster.jpg`]);
  ff(['-i', V('cem-africa-2026-keynote-clip.mp4'), '-vf', 'scale=1280:-2,fps=30', ...h264(28), ...aac, `${OUT_VIDEO}/keynote-cem-africa.mp4`]);

  // Showreel: the homepage hero cut with sound and text overlays, played in the keynote page's modal.
  // Full HD so the overlay text stays crisp at large sizes.
  ff(['-i', V('showreel.mp4'), '-vf', 'scale=1920:-2,fps=30', ...h264(25), '-c:a', 'aac', '-b:a', '160k', '-ac', '2', `${OUT_VIDEO}/showreel.mp4`]);
  ff(['-ss', '1.5', '-i', V('showreel.mp4'), '-frames:v', '1', '-vf', 'scale=1600:-2', '-q:v', '3', `${OUT_VIDEO}/showreel-poster.jpg`]);

  // Claire introducing Andy on stage
  ff(['-i', V('claire-intro-closeup.mov'), '-vf', 'scale=1280:-2', ...h264(26), ...aac, `${OUT_VIDEO}/claire-introduces-andy.mp4`]);
  ff(['-ss', '2', '-i', V('claire-intro-closeup.mov'), '-frames:v', '1', '-vf', 'scale=1600:-2', '-q:v', '4', `${OUT_VIDEO}/claire-introduces-andy-poster.jpg`]);
  console.log('video done');
}
