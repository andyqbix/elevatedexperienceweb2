// HX ENTERPRISE PAGE: /hx-enterprise/
// Copy from the HX Enterprise one-pager (HX-Enterprise.pdf), brought in line with /hx-hive-experience/ (November 2026).
// Writing rules: British English, no em or en dashes, "HX | Hive eXperience" on first mention, the HX prefix on
// every HX app name, and "white label" without a hyphen.
// The app cards and testimonials come straight from the HX page (src/content/hx-hive-experience.ts), so the two
// pages always show the same apps and quotes. Recognition is an Enterprise feature added to the app list here;
// drop an icon called Recognition.jpg into src/assets/hx/landing/icons/ and the page picks it up.
import { typeset } from '@/lib/text';
import { links } from '@/data/site';
import { hxLanding } from '@/content/hx-hive-experience';

export const hxEnterprise = typeset({
  meta: {
    title: 'HX Enterprise: White Label Community Platform',
    description: 'Your own fully branded, completely private instance of HX | Hive eXperience, built, hosted, supported and maintained end to end, under your own name.',
  },
  hero: {
    label: 'White label community platform',
    heading: 'HX Enterprise',
    purpose: 'Belong. Contribute. Prosper.',
    tagline: 'No ads. No algorithms. No selling your data. Just community.',
    body: 'Your own fully branded, completely private instance of the HX | Hive eXperience community platform, built, hosted, supported and maintained end to end by us. Your organisation gets a real community platform under your own name, without running any of it yourselves.',
    primary: 'Talk to us about HX Enterprise',
    secondary: 'Book a Call',
    alt: 'The HX Belonging Knot with the HX logo at its centre, in copper.',
  },
  problem: {
    heading: 'Too Many Platforms. Too Many Logins. Too Many Subscriptions…',
    intro: [
      'Teams or Slack for conversations. A separate system for training. Eventbrite for events. Mailchimp for newsletters. WhatsApp groups on the side. Sound familiar?',
      'Every extra tool means another login for your people, another licence for your budget and another place for information to get lost. Every hour spent chasing information and switching between systems is an hour not spent engaging your members, staff and partners.',
      'HX Enterprise brings your conversations, events, learning, directory, marketplace and messaging together in one private platform, under your own brand. Fewer tools, lower costs, less admin and more time for the people who matter.',
    ],
    closing: 'One Platform. Your Brand. Less Admin. More Impact.',
  },
  modules: {
    label: '01',
    heading: 'What Your People Get',
    intro: 'Every HX app is included in your licence, and you can switch any of them on or off to suit your organisation.',
    // The same 13 HX apps as the HX page, plus Recognition.
    items: [
      ...hxLanding.apps.cards,
      { name: 'Recognition', icon: 'Recognition', row: 'symbol', text: 'Points, badges and milestones that reward the people showing up and contributing.' },
    ],
    caption: 'Built for connection. Live on mobile and desktop.',
    // Real app screens, as on the HX page (no links here: Enterprise instances are private).
    inAction: hxLanding.apps.inAction,
    homeAlt: hxLanding.apps.homeAlt,
  },
  promise: {
    heading: 'Your People. Your Data. Your Platform.',
    subheading: 'Built Around People. For People. Not Advertisers.',
    intro: [
      'Your organisation deserves better than a platform designed to sell your attention, control what your people see or turn their personal information into profit.',
      'HX Enterprise is completely private to your organisation. Your data belongs to you, not to us.',
    ],
    label: 'Our promise to you…',
    points: hxLanding.promise.points,
    closing: 'Your People. Your Community. Your Connections.',
  },
  who: {
    heading: 'Built for Organisations That Bring People Together.',
    intro: 'Whether you are connecting staff across sites, supporting members of an association, training partners or bringing alumni back together, HX Enterprise gives your people one trusted home.',
    pills: ['Associations', 'Membership bodies', 'Companies', 'Franchises', 'Universities', 'Schools', 'Charities', 'Professional networks', 'Alumni groups'],
  },
  licence: {
    label: '02',
    heading: "What's Included in Your Licence",
    items: [
      { lead: 'Every HX app:', text: 'all of them included, and you can switch any on or off.' },
      { lead: 'Fully hosted infrastructure:', text: 'nothing for your IT team to run or patch.' },
      { lead: 'Your choice of hosting region:', text: 'pinned to the AWS region you choose, so your data stays where you need it.' },
      { lead: 'Ongoing maintenance and updates:', text: 'every new platform feature, included.' },
      { lead: 'Dedicated support:', text: 'a real team behind your instance, not a ticket queue.' },
      { lead: 'Complete white label branding:', text: 'your logo, colours and custom domain throughout.' },
      { lead: 'Native apps and installable web app:', text: 'Android and Windows, plus a web app that installs on phones and desktops, under your name.' },
      { lead: 'Admin dashboard and analytics:', text: 'engagement, growth and activity at a glance.' },
      { lead: 'Unlimited Hives:', text: 'as many internal communities as your organisation needs.' },
      { lead: 'Push notifications:', text: 'desktop and mobile, so nothing important gets missed.' },
    ],
  },
  pricing: {
    label: 'Simple, transparent pricing',
    platform: { price: '£498', unit: 'per month, per organisation' },
    seat: { price: '98p', unit: 'per month, per active user' },
    note: 'One licence covers your entire standalone instance: every HX app, fully hosted and supported.',
    noteBold: 'No separate infrastructure, maintenance or support bill.',
  },
  assurances: ['Fully hosted', 'Fully supported', 'Fully maintained', 'Fully private'],
  testimonials: hxLanding.testimonials,
  cta: {
    heading: 'Ready to Bring HX to Your Organisation?',
    email: 'hx@elevatedexperience.vip',
    primary: 'Talk to us about HX Enterprise',
    secondary: 'Book a Call',
  },
  faq: {
    heading: 'Frequently Asked Questions',
    items: [
      { q: 'How is HX Enterprise different from HX?', a: 'HX is the free, public platform where anyone can join or create a Hive. HX Enterprise is your own private, white label instance of HX: your brand, your custom domain and your people only.' },
      { q: 'Who owns our data?', a: 'You do. Your instance is private to your organisation, so the data belongs to your organisation, not to us. There are no ads, and your data is never sold.' },
      { q: 'Where is our data hosted?', a: 'We host HX Enterprise on AWS, through Vercel, and can pin it to any AWS region you choose, so your data stays where your organisation needs it. If you would rather host and support it yourselves, it can run on any hosting provider of your choice.' },
      { q: 'Can we choose which apps our people see?', a: 'Yes. Every HX app is included in your licence, and you can switch any of them on or off at any time.' },
      { q: 'Is there an app?', a: 'Yes. You get native apps for Android and Windows plus a web app that installs on phones and desktops, all under your own name.' },
      { q: 'What does it cost?', a: '£498 per month for your organisation, plus 98p per month for each active user. That covers hosting, maintenance, updates and support, with no separate bills.' },
      { q: 'What counts as an active user?', a: 'Anyone you give an account to. If a person has an account on your instance, they count as an active user and are included in your monthly bill.' },
      { q: 'When can we start?', a: 'HX Enterprise is available now. Get in touch or book a call and we will walk you through setting up your instance.' },
      { q: 'Who is behind HX?', a: 'HX is created by Andy Jarvis and Claire Boscq and powered by Elevated eXperience™, from Elevated eXperience Ltd, registered in Jersey.' },
    ],
  },
  back: {
    label: 'HX | Hive eXperience',
    cta: 'See all the HX apps',
    href: `${links.hxPage}#whats-inside`,
  },
});
