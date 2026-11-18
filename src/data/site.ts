// Global site settings: navigation, verified links and contact details.
export const site = {
  name: 'Elevated eXperience',
  legalName: 'Elevated eXperience Ltd',
  url: 'https://elevatedexperience.vip',
  email: 'hello@elevatedexperience.vip',
  phoneDisplay: '+44 7797 828950',
  phoneHref: 'tel:+447797828950',
  whatsappHref: 'https://wa.me/447797828950',
  address: 'Holly House, Tower Road, St Helier, Jersey, JE2 3HR',
  /** Jersey Financial Services Commission company registration number */
  companyNumber: '120462',
  /** Jersey Office of the Information Commissioner (data protection) registration number; renews annually */
  joicNumber: '19141',
};

export const links = {
  home: '/',
  powerDuo: '/about-the-power-duo-experience-experts/',
  shine: '/shine-blueprint/',
  keynote: '/keynote-speaker-digital-customer-experience/',
  experiences: '/experiences/',
  masterclass: '/executive-masterclass/',
  coachsulting: '/coachsulting/',
  resources: '/resources/',
  hxPage: '/hx-hive-experience/',
  hxEnterprise: '/hx-enterprise/',
  contact: '/contact/',
  privacy: '/privacy-policy/',
  // External, verified destinations supplied in the brief
  diagnostic: 'https://eu.checker-soft.com/4star-je/i_survey-fill.php?SurveyID=610',
  bookCall: 'https://bookings.cloud.microsoft/book/ElevatedExperienceLtd@elevatedexperience.vip/?ismsaljsauthenabled',
  hx: 'https://hive.elevatedexperience.vip/',
  hxEvents: 'https://hive.elevatedexperience.vip/events',
  hxHives: 'https://hive.elevatedexperience.vip/hives',
  hxCourses: 'https://hive.elevatedexperience.vip/courses',
  hxPricing: 'https://hive.elevatedexperience.vip/pricing',
  hxMicrosoftStore: 'https://apps.microsoft.com/detail/9NKRSD0B4FPH',
  hxGooglePlay: 'https://play.google.com/store/apps/details?id=com.elevatedexperience.hive',
  humanxIndia: 'https://hive.elevatedexperience.vip/events/humanx-india-new-delhi-2027-adadc759-d8c7-42da-87de-825be77dfbfe?ref=link',
  digitalxMauritius: 'https://hive.elevatedexperience.vip/events/digitalx-mauritius-2027-the-digital-advantage-290f9cff-31da-450b-bda6-97250cfe79b7?ref=link',
  mailchimp: 'https://mailchi.mp/457ee259e0eb/elevated-experience-sign-up',
  claire: 'https://claireboscq.com/',
  andy: 'https://andyjarvis.digital/about',
};

export interface NavItem { label: string; href: string; children?: NavItem[] }
export const nav: NavItem[] = [
  { label: 'Power Duo', href: links.powerDuo, children: [{ label: 'SHINE Blueprint', href: links.shine }] },
  { label: 'Keynote', href: links.keynote },
  { label: 'Masterclasses', href: links.masterclass },
  { label: 'Coachsulting', href: links.coachsulting },
  { label: 'eXperiences', href: links.experiences },
  { label: 'Resources', href: links.resources, children: [{ label: 'HX | Hive eXperience', href: links.hxPage }, { label: 'HX Enterprise', href: links.hxEnterprise }] },
  { label: 'Contact', href: links.contact },
];
/** Every page in menu order, sub-pages included (footer). */
export const navFlat: NavItem[] = nav.flatMap((n) => [n, ...(n.children ?? [])]);

export const social = [
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/elevated-experience/' },
  { name: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/@ElevatedeXperiencevip' },
  { name: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/@elevatedexperience' },
  { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/ElevatedeXperience' },
  { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/elevatedexperience.vip/' },
];
