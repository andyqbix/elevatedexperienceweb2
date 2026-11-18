// HX | HIVE EXPERIENCE LANDING PAGE: /hx-hive-experience/
// Approved copy. Do not edit wording here without sign-off. Headings use title case to match the rest of the site.
// Writing rules: British English, no em or en dashes, "HX | Hive eXperience" on first mention then "HX",
// and every app name carries the HX prefix (HXCafé, HXChats, HXEvents...).
// `icon` is the file name of each app icon in src/assets/hx/landing/icons/ (without the extension).
import { typeset } from '@/lib/text';
import { links } from '@/data/site';

export const hxLanding = typeset({
  meta: {
    title: 'HX | Hive eXperience: A Free Online Community Platform Built Around People',
    description: 'HX is a free online community platform built around people. Every HX app is free to use. No advertising. No algorithm. No data selling.',
  },
  hero: {
    label: 'HX | Hive eXperience',
    heading: 'Your Free Online Community Platform Built Around People',
    text: 'A place to connect, share, learn and keep relationships growing.',
    italic: 'Imagine a world where communities have no borders, where people come together through shared passions, purpose and a genuine desire to help one another thrive.',
    primary: 'JOIN YOUR VILLAGE WITHOUT WALLS HERE',
    alt: 'The HX Belonging Knot: six interlocking copper hexagons around an open centre, the symbol of HX | Hive eXperience.',
    altLogo: 'The HX | Hive eXperience logo at the centre of the HX Belonging Knot: six interlocking copper hexagons.',
  },
  why: {
    heading: 'Why HX? Because Every eXperience Starts With People.',
    body: [
      'At Elevated eXperience, we bring together two complementary worlds: Customer eXperience (CX) and Digital eXperience (DX). Through everything we do, one thing has become clear. Technology, businesses and communities thrive when people are at the heart of the eXperience.',
      'CX is about people. DX is about how people use technology. EX is about how people feel, connect and contribute.',
      'When these eXperiences work together, connections grow stronger, conversations become more meaningful and more people find their opportunity to shine.',
      'Inspired by the African philosophy of Ubuntu, “I am because we are,” and the Andean principle of Ayni, the power of reciprocity and mutual support, we believe that when people lift each other up, everyone has the opportunity to grow.',
      'Because belonging is more than joining a group. It is about feeling seen, being valued, sharing what you know, discovering what others have to offer and knowing that your contribution matters.',
      'This is the heart of HX | Hive eXperience.',
      'A digital village where technology brings people closer, connections become relationships, and individuals, businesses, charities and communities can flourish together.',
    ],
    closing: 'One village. Endless connections. A world of opportunities.',
    bold: 'A place where everyone can Belong. Contribute. Prosper.',
    signoff: "We don't just talk about elevating eXperiences. We create them.",
    alt: 'Diagram showing how Customer eXperience (CX), Digital eXperience (DX) and Employee eXperience (EX) connect, with people at the centre.',
  },
  apps: {
    heading: 'Too Many Platforms. Too Many Logins. Too Many Subscriptions…',
    intro: [
      'And far too much time spent trying to make everything work together, sound familiar?',
      'Every hour spent chasing information, switching between systems and managing admin is an hour you could be spending growing your community, supporting your members and creating new opportunities.',
      'HX | Hive eXperience brings your conversations, events, learning, business opportunities and connections together in one Hive. Simplify your operations, reduce costs, save valuable time and focus your energy where it belongs: building relationships, growing your community and creating opportunities.',
    ],
    introClosing: 'One Hive. Less Admin. Lower Costs. More Impact.',
    // `row`: 'photo' cards (picture inside the hexagon) show first in two rows of 4;
    // 'symbol' cards (dark hexagon with a symbol) follow in one row of 5 smaller boxes.
    cards: [
      { name: 'HXCafé', icon: 'HXCafe', row: 'photo', text: 'Share updates, ask questions and keep conversations flowing.' },
      { name: 'HXEvents', icon: 'HXEvents', row: 'photo', text: 'Host meetups, workshops, online sessions and conferences.' },
      { name: 'HXSchool', icon: 'HXSchool', row: 'photo', text: 'Create courses, share knowledge and organise learning.' },
      { name: 'HXMarketPlace', icon: 'HXMarketPlace', row: 'photo', text: 'Showcase products, services and eXperiences.' },
      { name: 'HXBusiness', icon: 'HXBusiness', row: 'photo', text: 'Present your business, services and website in one place.' },
      { name: 'HXCommunity', icon: 'HXCommunity', row: 'photo', text: 'Discover members and build connections around shared interests.' },
      { name: 'HXNoticeboard', icon: 'HXNoticeboard', row: 'photo', text: 'Share notices, coordinate projects and organise sign up or bring lists.' },
      { name: 'HXRadio', icon: 'HXRadio', row: 'photo', text: 'Bring a shared listening eXperience into your Hive.' },
      { name: 'HXChats', icon: 'HXChats', row: 'symbol', text: 'Stay in touch through direct, group and Hive conversations.' },
      { name: 'HXWebsiteBuilder', icon: 'HXWebsiteBuilder', row: 'symbol', text: 'Build a free business website with templates and up to six pages.' },
      { name: 'HXAI', icon: 'HXAI', row: 'symbol', text: 'Connect a supported AI assistant to your Hive activities.' },
      { name: 'HXSocialMediaConnector', icon: 'HXSocialMediaConnector', row: 'symbol', text: 'Share HXCafé posts to your social accounts, with optional scheduling.' },
      { name: 'HXPayment', icon: 'HXPayment', row: 'symbol', text: 'Support paid tickets, courses, products and services.' },
    ],
    caption: 'Illustrative screens. Names, counts and notifications are examples.',
    homeAlt: 'The HX home screen: a honeycomb of HX apps beside a list of upcoming events and recent conversations.',
    hivesAlt: 'The HX Your Hives switcher, listing the Hives a member belongs to so they can move between them.',
  },
  testimonials: {
    heading: 'What Hivers Say',
    items: [
      {
        quote: "HX feels like a little village where you can connect, share, and dive into meaningful conversations. I set up three Hives in four weeks and made sales within the first few days. In a connected world, belonging to something is far more important than just having a thousand followers. It's intuitive, simple, and wonderfully effective.",
        name: 'Karola Sakotnik',
        title: 'Organiser, TEDxGraz',
      },
      {
        quote: 'Running masterclasses and courses across fragmented platforms used to drain so much energy. Bringing everything into HX changed the game: courses, events, and meaningful discussions all flow seamlessly in one trusted space. Andy, you are a magician! HX has completely redefined how our members connect and prosper.',
        name: 'Sandeep Nath',
        title: 'Founder, RENEWALism & Inner Power Coach',
      },
      {
        quote: "HX strips away the social noise and gives leaders and coaches a genuine digital home. From hosting live cohorts to having deep conversations in the HXCafé without algorithms getting in the way, the platform is pure magic. It's intuitive, beautifully structured, and keeps my community truly engaged.",
        name: 'Chantelle Botha',
        title: 'The Choice Catalyst & International Keynote Speaker',
      },
    ],
  },
  promise: {
    heading: 'You Are a Person. Not a Product.',
    subheading: 'Built Around People. For People. Not Advertisers.',
    intro: [
      'Your community deserves better than a platform designed to sell your attention, control what you see or turn your personal information into profit.',
      'HX is built to move from Attention Economy to the Belonging eXperience, and we intend to keep it that way.',
    ],
    label: 'Our promise to you…',
    points: [
      { heading: 'No Ads', sub: 'Your Attention Is Yours.', text: 'No advertising. No boosted posts. No sponsored distractions. Just genuine conversations, meaningful connections and communities focused on what matters.' },
      { heading: 'No Algorithms', sub: 'Deciding What You See.', text: 'No fighting for visibility. No paying to reach your own community. HXCafé shows posts in chronological order, giving everyone a fair opportunity to be seen and heard.' },
      { heading: 'No Selling Your Data.', sub: 'Ever!', text: "Your personal information is yours. We never sell it to advertisers or build advertising profiles. Your trust matters more than your data's commercial value." },
    ],
    closing: 'Your People. Your Community. Your Connections.',
  },
  // One section in place of the former "Who it's for", "Free to join" and "Three steps" sections.
  join: {
    heading: 'Whatever You Want to Build Together, There Is Room for It Here.',
    intro: "Whether you're bringing a local community together, growing a business, supporting a charity, running an association, sharing your expertise or connecting people around a common passion, there's a place for you on HX.",
    pills: ['Local communities', 'Passion groups', 'Creators', 'Clubs', 'Charities', 'Associations', 'Learning communities', 'Businesses', 'Memberships'],
    text: 'Join a Hive or create your own, bring your people together and start building meaningful connections, sharing opportunities and growing something wonderful.',
    freeHeading: 'Free to Join. Free to Connect. Free to Grow.',
    freeText: 'Use every HX app at no cost. HX is free. You only pay when you sell something.',
    pricing: 'See what HX costs',
    cta: 'JOIN HX NOW',
    quote: 'Because Every eXperience Starts With People. And Every Great Community Starts With You.',
    networkAlt: 'The HX Community "Your Network" map: a member at the centre, connected to friends, family and professional contacts shown as hexagon portraits.',
  },
  meaning: {
    label: 'What the knot means',
    heading: 'Six Interlocking Loops Around an Open Centre, Drawn From the Honeycomb of a Hive.',
    alt: 'The closed HX Belonging Knot in copper on an ivory background.',
    points: [
      { term: 'Each hexagon', text: 'A person or community, with its own identity and space.' },
      { term: 'The interlocking edges', text: 'Contribution: people sharing knowledge, making introductions and creating opportunities together.' },
      { term: 'The open centre', text: 'Belonging: a shared space with room for everyone to take part.' },
      { term: 'The copper', text: 'Warmth, and the thread that connects HX to the Elevated eXperience™ family.' },
      { term: 'Closed and open', text: 'The closed knot is our emblem for belonging. The open knot is a frame that invites people in.' },
    ],
    closing: 'The spirit of Ubuntu and Ayni sits at the core of what we do. When people belong and contribute, they and their communities prosper.',
  },
  faq: {
    heading: 'Frequently Asked Questions',
    items: [
      { q: 'Is HX really free?', a: 'Yes. Joining HX and starting your own Hive is free. HX takes 5% only when you make a sale, for example a paid event ticket, a course or a marketplace item.' },
      { q: 'What is the difference between HX and a Hive?', a: 'HX is the platform. A Hive is a community inside it. You can belong to several Hives and start your own.' },
      { q: 'Are there ads?', a: "No. There are no ads on HX and your members' attention is never sold." },
      { q: 'How does the feed decide what I see?', a: 'It does not. HXCafé shows posts in the order they were written, with no algorithm choosing what you miss.' },
      { q: 'How do I get paid for events, courses and sales?', a: 'Payments run through PayPal and payouts to hosts and sellers are fully automatic. There is nothing to chase.' },
      {
        q: 'Is there an app?',
        a: 'Yes. HX is on the Microsoft Store for Windows and on Google Play for Android. It also runs in any modern browser, and can be installed on your phone or desktop straight from the browser.',
        links: [
          { label: 'Get it from the Microsoft Store', href: links.hxMicrosoftStore, external: true },
          { label: 'Get it on Google Play', href: links.hxGooglePlay, external: true },
        ],
      },
      { q: 'How do you keep the community safe?', a: 'Every account should be a real person. Fake accounts are not allowed and are removed by Hive admins.' },
      {
        q: 'Can my organisation have its own private version?',
        a: 'Yes. HX Enterprise is a private, white label instance of HX for organisations. Get in touch and we will walk you through it.',
        links: [{ label: 'Find out about HX Enterprise', href: links.hxEnterprise, external: false }],
      },
      { q: 'Who is behind HX?', a: 'HX is created by Andy Jarvis and Claire Boscq and powered by Elevated eXperience™, from Elevated eXperience Ltd, registered in Jersey.' },
    ],
  },
});
