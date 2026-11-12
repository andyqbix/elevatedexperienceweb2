// CONTACT PAGE | FINAL APPROVED WEBSITE BRIEF 2027
// Approved copy. Do not edit wording here without sign-off.
// No forms on this page, by design.
// Approved corrections applied:
//  - Phone, WhatsApp and email use the confirmed details in src/data/site.ts (+44 7797 828950, hello@elevatedexperience.vip).
//  - "ELEVATED eXPERIENCE" social heading -> "ELEVATED EXPERIENCE".
//  - Only the Elevated eXperience social group is shown: no personal profile links were supplied for Claire or Andy,
//    and the brief says not to show empty groups.
import { links, site } from '@/data/site';
import { typeset } from '@/lib/text';

export const contact = typeset({
  meta: {
    title: "Contact: Let's Connect",
    description: 'No forms. Just real conversations. Email, WhatsApp or book a call with Claire Boscq CSP and Andy Jarvis at Elevated eXperience.',
  },
  hero: {
    eyebrow: "LET'S CONNECT",
    heading: 'Great Things Start With a Conversation.',
    line: "You Bring the Challenge. We'll Bring the Energy, Expertise and Fresh Perspectives.",
    body: [
      "Whether you're planning an unforgettable event, looking to energise your leadership team or ready to transform how your organisation works, we'd love to explore what's possible together.",
      'At Elevated eXperience, we believe the best opportunities begin with meaningful conversations, fresh thinking and people coming together with a shared ambition.',
    ],
    closing: "Let's Discover What's Possible. Together.",
  },
  direct: {
    eyebrow: 'NO FORMS. JUST REAL CONVERSATIONS.',
    heading: 'Because Human Connection Should Be Simple.',
    body: [
      'We believe the best business relationships begin with genuine conversations.',
      "Whether you're exploring a keynote, an Executive Masterclass, Coachsulting, a strategic partnership or simply have an idea worth discussing, we'd love to connect.",
    ],
    label: 'THREE EASY WAYS TO REACH US',
    cards: [
      {
        key: 'email', accent: 'copper', icon: 'mail', n: '01', title: 'SEND US AN EMAIL',
        text: ["Have a question, an opportunity or a challenge you'd like to explore? Drop us a message and let's start the conversation."],
        detail: { label: site.email, href: `mailto:${site.email}` },
        button: { label: 'SEND US AN EMAIL', href: `mailto:${site.email}`, external: false },
      },
      {
        key: 'whatsapp', accent: 'silver', icon: 'whatsapp', n: '02', title: 'GIVE US A CALL',
        text: ['Prefer a personal conversation? WhatsApp us.'],
        detail: { label: site.phoneDisplay, href: site.phoneHref },
        button: { label: 'WHATSAPP US', href: site.whatsappHref, external: true },
      },
      {
        key: 'calendar', accent: 'gold', icon: 'calendar', n: '03', title: 'BOOK A CALENDAR MEETING',
        text: [
          "Let's find a time that works and explore what's possible together.",
          'Choose a convenient slot in our calendar for an introductory conversation about your event, organisation or collaboration opportunity.',
        ],
        button: { label: 'BOOK A CONVERSATION', href: links.bookCall, external: true },
      },
    ],
  },
  social: {
    eyebrow: "LET'S STAY CONNECTED.",
    heading: 'Find Us Where the Conversations Are Happening.',
    text: 'Follow Elevated eXperience and connect with Claire and Andy across our social media channels for fresh thinking, inspiring conversations, behind-the-scenes moments and practical insights into Digital, Employee and Customer eXperience.',
    groupLabel: 'ELEVATED EXPERIENCE',
  },
  hx: {
    eyebrow: 'MORE THAN A CONNECTION. A COMMUNITY.',
    heading: 'Your Village Without Walls Is Waiting.',
    body: [
      'Great conversations deserve a place to continue.',
      "That's why we created HX | Hive eXperience, our free, ad-free and algorithm-free community platform where people, businesses and organisations come together to build meaningful relationships, share ideas, collaborate and create opportunities.",
      'Join our growing community to connect with like-minded people, discover events, exchange knowledge and be part of a more human, connected way of doing business.',
    ],
    closing: 'Belong. Contribute. Prosper.',
    cta: { label: 'JOIN OUR HX COMMUNITY', href: links.hx },
  },
  duo: {
    eyebrow: 'A LITTLE FRENCH FLAIR. A LITTLE YORKSHIRE COMMON SENSE.',
    heading: 'A Whole Lot of Experience.',
    body: [
      'Claire brings the human energy, emotion and connection. Andy brings the digital intelligence, clarity and practical thinking.',
      'Together, we combine six decades of expertise, two complementary perspectives and one shared belief: business works better when people and technology work in harmony.',
    ],
    closing: 'Different by Design. Stronger Together.',
    cta: { label: 'MEET THE POWER DUO', href: links.powerDuo },
  },
  closing: {
    eyebrow: "LET'S CREATE SOMETHING EXTRAORDINARY.",
    heading: 'A More Soulful Way of Doing Business.',
    text: 'From energising audiences and empowering leaders to connecting systems, people and customer experiences, our mission remains the same: to help organisations move from friction to flow.',
    line: "You Bring the People. We'll Bring the Energy.",
    signoff: 'Elevated eXperience | From Friction to Flow.',
  },
});
