// HX (THE HIVE EXPERIENCE) | RESOURCES PAGE
// Approved copy. Do not edit wording here without sign-off.
// Writing rules: UK English, no dashes of any kind in visible copy, "Hives" for the communities inside HX,
// Community (never Network), School (never Learn).
// `img` names the screenshot used by each feature row; `alt` is the approved alt text.
import { typeset } from '@/lib/text';

export const hx = typeset({
  meta: {
    title: 'HX | The Hive eXperience: a free community platform | Elevated eXperience™',
    description: 'HX is a free, privacy first community platform with no ads and no algorithm. Run your Café, events, courses and marketplace in one Hive you own. You only pay 5% when you make a sale.',
  },
  hero: {
    eyebrow: 'HX | HIVE EXPERIENCE',
    heading: 'The eXperience of belonging.',
    tagline: 'Belong. Contribute. Prosper.',
    intro: 'A home for the communities you are already building. Free to join, privacy first, with no ads and no algorithm deciding who sees what.',
    primary: 'Start your free Hive',
    secondary: 'Explore HX',
    trust: 'Free to join. No ads. No algorithm. You keep what you earn.',
    alt: 'The HX Belonging Knot, six interlocking copper hexagons around an open centre.',
  },
  knot: {
    eyebrow: 'THE HX BELONGING KNOT',
    heading: 'Individual strength. Shared prosperity.',
    body: 'Inspired by the spirit of Ubuntu and Ayni, each person brings their own strength, and our connections help us prosper together.',
    terms: [
      { term: 'HX', text: 'makes it yours.' },
      { term: 'Belonging', text: 'carries your purpose.' },
      { term: 'Knot', text: 'reflects the interlocking forms and their connection to traditional knotwork. Six cells, each whole on its own, each holding the others in place.' },
    ],
  },
  pillars: {
    heading: 'Belong. Contribute. Prosper.',
    cards: [
      { label: 'BELONG', heading: 'A home for the relationships you are already building.', body: 'Bring members, clients and event guests into one Hive you own, where someone new feels comfortable asking a question.' },
      { label: 'CONTRIBUTE', heading: 'Somewhere to keep talking after the room empties.', body: 'People share what they tried, find the workshop replay and help each other, in a feed that shows posts in the order they were written.' },
      { label: 'PROSPER', heading: 'You decide what matters, and you keep what you earn.', body: 'Host events, run courses and sell to people who already know you. HX takes 5% only when you make a sale.' },
    ],
  },
  inside: {
    eyebrow: 'INSIDE EVERY HIVE',
    heading: 'Eight spaces, one knot.',
    intro: 'Each space stands on its own. Together they hold your community in one place, so nobody hunts for the link.',
    alt: 'The HX Home, Café and Community screens showing a Global HX Hive with upcoming events and members.',
    spaces: [
      // Same order as the honeycomb on the HX Home screen.
      // Noticeboard, Community, Businesses and Radio lines were added after the approved copy (Noticeboard and Radio from How We Hive).
      { name: 'Noticeboard', text: 'Notices, bring lists, sign up sheets and questions for the whole Hive.' },
      { name: 'Café', text: 'Where conversations keep going after the event ends.' },
      { name: 'Community', text: 'Find your people by name, skill or place, and keep them close.' },
      { name: 'Businesses', text: 'A local directory of members’ businesses that grows with your Hive.' },
      { name: 'HXEvents', text: 'Host, book and replay in one place.' },
      { name: 'HXSchool', text: 'Courses and workshop replays your members can actually find.' },
      { name: 'HXMarketPlace', text: 'Sell to people who already know you. 5% only when you make a sale.' },
      { name: 'Radio', text: 'Podcasts and recordings shared by members, heard only inside your Hive.' },
    ],
  },
  features: [
    {
      img: 'home', eyebrow: 'YOUR HIVE AT A GLANCE', heading: 'Everything your community needs, one tap away.',
      body: 'Every member lands on a warm welcome with what is coming up, who they were last talking to and what is new in the Hive. Noticeboard, Café, Community, Businesses, Events, School, Market and Radio sit together in the honeycomb, so nothing gets lost.',
      alt: 'The HX Home screen with a honeycomb of spaces and a list of upcoming events.',
    },
    {
      img: 'cafe', eyebrow: 'CAFÉ', heading: 'A feed that respects the people in it.',
      body: 'Share a post, a photo, a location or how you are feeling. Add a story. See upcoming events and say hello to new members. Posts appear in the order they were written, with no ads and no algorithm choosing what you miss.',
      alt: 'The HX Café with stories, upcoming events, new members and a post composer.',
    },
    {
      img: 'community', eyebrow: 'COMMUNITY', heading: 'Find your people and keep them close.',
      body: 'Search members by name, skill or place. Favourite the people you want to see first, connect with new members and invite your contacts. Every account is a real person: fake accounts are not allowed and are removed by Hive admins.',
      alt: 'The HX Community directory showing member cards with Connect and Connected buttons.',
    },
    {
      img: 'events', eyebrow: 'HXEVENTS', heading: 'Host, book and replay in one place.',
      body: 'Publish free or paid events, take bookings and share the replay with the people who were there. Payouts to hosts are automatic, so there is nothing to chase.',
      alt: 'An HXEvents page for a Founders Breakfast showing the date, venue, ticket price and booking button.',
    },
    {
      img: 'school', eyebrow: 'HXSCHOOL', heading: 'Teach what you know. Learn from people you trust.',
      body: 'Browse courses and series by topic, track your progress in My learning, and create your own course when you are ready to teach. Workshop replays live here too, where members can actually find them.',
      alt: 'HXSchool showing free courses such as Leading with Belonging and Start Your Community.',
    },
    {
      img: 'businesses', eyebrow: 'BUSINESSES', heading: 'A local directory that grows with your Hive.',
      body: 'Members list their businesses, from cafés and studios to consultants and speakers. Browse by category, find accessible venues, see them on a map and save the ones you want to come back to.',
      alt: 'The HX Businesses directory with listings for a coffee shop, a studio, a bakery and a wellbeing practice.',
    },
    {
      img: 'chat', eyebrow: 'CHAT', heading: 'The conversation does not stop at the door.',
      body: 'Message members directly with text, emoji, GIFs, voice and video. Pick up where you left off from your Home screen.',
      alt: 'A direct message conversation in HX arranging to meet before a community walk.',
    },
  ],
  meaning: {
    eyebrow: 'WHAT THE KNOT MEANS',
    heading: 'Six interlocking loops around an open centre, drawn from the honeycomb of a Hive.',
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
  free: {
    eyebrow: 'FREE PLATFORM',
    heading: 'Free to join. Free to start your Hive.',
    body: 'There is no subscription to belong. HX earns only when you do: we take 5% when you make a sale through events, courses or the marketplace. Everything else is yours.',
    points: [
      { lead: 'No ads.', text: 'Your members are a community, not an audience to sell.' },
      { lead: 'No algorithm.', text: 'Posts appear in the order they were written.' },
      { lead: 'Privacy first.', text: 'Your Hive, your members, your relationships.' },
    ],
    cta: 'Start your free Hive',
  },
  start: {
    heading: 'Your Hive in three steps.',
    steps: [
      { lead: 'Join HX free.', text: 'Create your account at hive.elevatedexperience.vip.' },
      { lead: 'Start your Hive.', text: 'Give it a name, a purpose and a welcome that sounds like you.' },
      { lead: 'Invite your people.', text: 'Bring in members, clients and event guests, then post your first event or conversation.' },
    ],
    cta: 'Join HX free',
  },
  enterprise: {
    eyebrow: 'FOR ORGANISATIONS',
    heading: 'Your own private HX.',
    body: 'HX Enterprise gives your organisation its own private, white label instance of HX, with a dedicated database, for your people only. The same Café, Community, Events and School, behind your own front door.',
    cta: 'Talk to us about HX Enterprise',
  },
  faq: {
    heading: 'Frequently asked questions',
    items: [
      { q: 'Is HX really free?', a: 'Yes. Joining HX and starting your own Hive is free. HX takes 5% only when you make a sale, for example a paid event ticket, a course or a marketplace item.' },
      { q: 'What is the difference between HX and a Hive?', a: 'HX (The Hive eXperience) is the platform. A Hive is a community inside it. You can belong to several Hives and start your own.' },
      { q: 'Are there ads?', a: "No. There are no ads on HX and your members' attention is never sold." },
      { q: 'How does the feed decide what I see?', a: 'It does not. The Café shows posts in the order they were written, with no algorithm choosing what you miss.' },
      { q: 'How do I get paid for events, courses and sales?', a: 'Payments run through PayPal and payouts to hosts and sellers are fully automatic. There is nothing to chase.' },
      { q: 'Is there an app?', a: 'HX runs in any modern browser and can be installed on your phone or desktop like an app, straight from the browser.' },
      { q: 'How do you keep the community safe?', a: 'Every account should be a real person. Fake accounts are not allowed and are removed by Hive admins.' },
      { q: 'Can my organisation have its own private version?', a: 'Yes. HX Enterprise is a private, white label instance of HX for organisations. Get in touch and we will walk you through it.' },
      { q: 'Who is behind HX?', a: 'HX is created by Andy Jarvis and Claire Boscq and powered by Elevated eXperience™, from Elevated eXperience Ltd, registered in Jersey.' },
    ],
  },
  cta: {
    heading: 'Someone asks for the replay. Someone else has the old booking link. How much time does your team spend joining the dots?',
    body: 'Let us look at one thing you could bring together first. Fifteen minutes, using your next event as the example.',
    primary: 'Book a Call',
    secondary: 'Start your free Hive',
    signoff: 'Individual strength. Shared prosperity. Powered by Elevated eXperience™.',
  },
});
