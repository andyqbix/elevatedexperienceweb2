// Organisations Claire, Andy or Elevated eXperience have worked with.
// Logos are generated in one colour by scripts/build-assets.mjs from /assets-source/client-logos.
// To add one: drop the file in that folder, add it to the list in the script, run `npm run assets`, then add it here.
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/clients/*.png', { eager: true });
const img = (slug: string) => files[`../assets/clients/${slug}.png`]?.default;

const list: [string, string][] = [
  ['hsbc', 'HSBC'],
  ['kpmg', 'KPMG'],
  ['sap', 'SAP'],
  ['first-abu-dhabi-bank', 'First Abu Dhabi Bank'],
  ['government-of-jersey', 'Government of Jersey'],
  ['government-of-dubai', 'Government of Dubai'],
  ['informa-connect', 'Informa Connect'],
  ['baker-tilly', 'Baker Tilly Channel Islands'],
  ['jersey-post', 'Jersey Post'],
  ['dmg-events', 'dmg events'],
  ['ports-of-jersey', 'Ports of Jersey'],
  ['cci-france-uae', 'CCI France UAE'],
  ['sure', 'Sure'],
  ['qna-international', 'QnA International'],
  ['trustford', 'TrustFord'],
  ['hand-picked-hotels', 'Hand Picked Hotels'],
  ['mecsr', 'Middle East Council of Shopping Centres & Retailers'],
  ['philippine-retailers-association', 'Philippine Retailers Association'],
  ['british-chamber-philippines', 'British Chamber of Commerce Philippines'],
  ['philippine-chamber-of-commerce', 'Philippine Chamber of Commerce and Industry'],
  ['mspa-europe-africa', 'MSPA Europe/Africa'],
  ['vsa-international', 'Virtual Speakers Association International'],
  ['paps', 'Philippine Association of Professional Speakers'],
  ['global-gurus', 'Global Gurus'],
  ['world-marketing-congress', 'World Marketing Congress'],
  ['customer-fest-show', 'The Customer Fest Show'],
  ['cx-west-africa-summit', 'CX West Africa Summit'],
  ['franchise-asia', 'Franchise Asia Philippines'],
  ['aqmen365', 'AQMEN365 by Informa Connect'],
  ['osiris', 'Osiris Management Services'],
  ['vivat-trust', 'Vivat Trust'],
  ['harem', 'Harem'],
  ['ewpc', 'EWPC'],
  ['exito', 'Exito'],
];

export const clients = list.map(([slug, name]) => ({ slug, name, image: img(slug) })).filter((c) => c.image);
