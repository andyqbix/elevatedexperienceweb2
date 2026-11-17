// HX ENTERPRISE PAGE: /hx-enterprise/
// Copy from the HX Enterprise one-pager (HX-Enterprise.pdf), updated to the brand rules:
// no em or en dashes, "HX | Hive eXperience" on first mention, and the HX prefix on module names that are HX apps.
import { typeset } from '@/lib/text';

export const hxEnterprise = typeset({
  meta: {
    title: 'HX Enterprise: White-Label Community Platform',
    description: 'Your own fully branded, completely private instance of HX | Hive eXperience, built, hosted, supported and maintained end-to-end, under your own name.',
  },
  hero: {
    label: 'White-label community platform',
    heading: 'HX Enterprise',
    purpose: 'Belong. Contribute. Prosper.',
    tagline: 'No algorithms, no ads. Just community.',
    body: 'Your own fully branded, completely private instance of the HX | Hive eXperience community platform, built, hosted, supported and maintained end-to-end by us. Your organisation gets a real community platform under your own name, without running any of it yourselves.',
    primary: 'Talk to us about HX Enterprise',
    secondary: 'Book a Call',
    alt: 'The HX Belonging Knot with the HX logo at its centre, in copper.',
  },
  modules: {
    label: '01',
    heading: 'What Your People Get',
    items: [
      { name: 'HXCafé', text: 'A social home base: posts, discussion and Instagram-style Stories for your community.' },
      { name: 'Hives', text: 'Sub-communities by team, department, cohort or interest, each with its own space.' },
      { name: 'HXEvents', text: 'Ticketing, RSVPs, calendars and agendas for gatherings large and small.' },
      { name: 'Directory', text: 'An internal or partner directory of businesses, services and people.' },
      { name: 'HXSchool', text: 'Courses, lessons and certifications for onboarding, training and CPD.' },
      { name: 'HXMarketPlace', text: 'A marketplace for internal listings, products and member-to-member sales.' },
      { name: 'HXChats', text: '1:1 and group messaging with push notifications, on desktop and mobile.' },
      { name: 'Recognition', text: 'Points, badges and milestones that reward the people showing up and contributing.' },
    ],
  },
  licence: {
    label: '02',
    heading: "What's Included in Your Licence",
    items: [
      { lead: 'Fully hosted infrastructure:', text: 'nothing for your IT team to run or patch.' },
      { lead: 'Ongoing maintenance and updates:', text: 'every new platform feature, included.' },
      { lead: 'Dedicated support:', text: 'a real team behind your instance, not a ticket queue.' },
      { lead: 'Complete white-label branding:', text: 'your logo, colours and custom domain throughout.' },
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
    note: 'One licence covers your entire standalone instance: every module above, fully hosted and supported.',
    noteBold: 'No separate infrastructure, maintenance or support bill.',
  },
  assurances: ['Fully hosted', 'Fully supported', 'Fully maintained'],
  cta: {
    heading: 'Ready to Bring HX to Your Organisation?',
    email: 'enterprise@hive.elevatedexperience.vip',
    primary: 'Talk to us about HX Enterprise',
    secondary: 'Book a Call',
  },
  back: {
    label: 'HX | Hive eXperience',
    cta: "See what's inside",
  },
});
