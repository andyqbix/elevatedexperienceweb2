// EXPERIENCES (the bespoke executive programme)
// Approved copy. Do not edit wording here without sign-off.
// Approved corrections applied:
//  - Page name and URL: "eXperiences" (/experiences/)
//  - Button: "LET'S DESIGN YOUR X EXECUTIVE EXPERIENCE" -> "LET'S DESIGN YOUR EXECUTIVE EXPERIENCE"
//  - Live heading: "Discover Our Upcoming X Experiences on HX" -> "Discover Our Upcoming HX events on Hive eXperience"
import { links } from '@/data/site';
import { typeset } from '@/lib/text';

export const experiences = typeset({
  meta: {
    title: 'eXperiences: Bespoke Executive Programmes',
    description: 'HumanX, DigitalX, CustomerX, CommunityX or your own X-topic. Choose one of our signature executive experiences or let us create something entirely unique around your vision.',
  },
  hero: {
    eyebrow: 'EXPERIENCES',
    heading: 'FOUR SIGNATURE EXPERIENCES. ENDLESS POSSIBILITIES.',
    text: 'Every organisation faces different challenges, and every leadership team has different priorities. Choose one of our signature experiences or let us create something entirely unique around your vision.',
  },
  items: [
    {
      key: 'humanx', name: 'HumanX', lead: 'Putting Humanity at the Heart of Business.',
      text: 'Explore human connection, leadership, employee engagement, belonging and the uniquely human capabilities that help people and organisations thrive.',
      link: { label: 'HumanX India, New Delhi 2027', href: links.humanxIndia },
    },
    {
      key: 'digitalx', name: 'DigitalX', lead: 'Making Technology Work for People.',
      text: 'Bring technology, AI, digital transformation and human experience together to simplify complexity, unlock opportunities and accelerate progress.',
      link: { label: 'DigitalX Mauritius 2027', href: links.digitalxMauritius },
    },
    {
      key: 'customerx', name: 'CustomerX', lead: 'Putting Customers at the Heart of Growth.',
      text: 'Connect leadership, employee culture, digital systems and customer journeys to create seamless experiences, strengthen loyalty and drive business performance.',
    },
    {
      key: 'communityx', name: 'CommunityX', lead: 'Turning Connection into Belonging, Collaboration and Growth.',
      text: 'Explore how organisations, associations and communities can build trust, strengthen engagement and create meaningful opportunities for people to belong, contribute and prosper together.',
    },
  ],
  yours: {
    name: 'Your X-Topic',
    lead: 'Your Challenge. Your Vision. Your eXperience.',
    body: [
      "Have a different priority or an emerging challenge you'd like to explore? Let's create a completely bespoke executive experience around the topic that matters most to your organisation.",
      "We'll bring together the right specialist speakers, expertise and interactive sessions to turn your vision into an EPIC day.",
    ],
  },
  design: {
    heading: 'YOUR VISION. OUR EXPERTISE. ONE EPIC DAY.',
    text: 'From programme design and specialist speaker selection to inspiring keynotes, interactive workshops and facilitated conversations, we work alongside you to create a high-impact executive experience tailored to your organisation.',
    closing: 'One day. The right people. The right conversations. Meaningful action.',
    note: 'Bespoke programme and investment available on enquiry.',
    cta: { label: "LET'S DESIGN YOUR EXECUTIVE EXPERIENCE", href: links.bookCall },
  },
  live: {
    eyebrow: 'EXPERIENCE IT LIVE',
    heading: 'Discover Our Upcoming HX events on Hive eXperience',
    text: "Great experiences are even better when we share them. Explore our upcoming X events, connect with the people behind them and discover how we're bringing leaders, ideas and communities together.",
    href: links.hxEvents,
  },
});
