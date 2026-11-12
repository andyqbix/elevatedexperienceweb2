// SIGNATURE KEYNOTE
// Approved copy. Do not edit wording here without sign-off. **text** marks approved emphasis.
// Approved corrections applied:
//  - Executive programme card: "The X eXecutive eXperience" -> "The eXecutive eXperience"
//  - Card link: "EXPLORE THE bespoke X.X.Xperience" -> "EXPLORE THE BESPOKE EXPERIENCE"
//  - Topic line uses pipes throughout: "HumanX | DigitalX | CustomerX | CommunityX | Your own X-topic"
// The three first-person lines in the takeaways are illustrative audience reactions, not testimonials.
import { links } from '@/data/site';
import { typeset } from '@/lib/text';

export const keynote = typeset({
  meta: {
    title: "Signature Keynote: 'The Gaps Killing Your Business Growth'",
    description: 'Two dynamic speakers. Six decades of expertise. One powerful message that challenges perspectives, energises audiences and inspires meaningful action.',
  },
  hero: {
    eyebrow: 'SIGNATURE KEYNOTE',
    heading: '‘The Gaps Killing Your Business Growth’',
    line: 'When Digital, Employee and Customer Finally Connect and Truly SHINE.',
    text: 'Two dynamic speakers. Six decades of expertise. One powerful message that challenges perspectives, energises audiences and inspires meaningful action.',
    cta: { label: 'ENQUIRE ABOUT THE POWER DUO', href: links.contact },
  },
  bigIdea: {
    eyebrow: 'THE BIG IDEA',
    heading: 'One Connected Challenge. One Extraordinary Shift in Thinking.',
    body: [
      'Disconnected digital systems, disengaged employees and fragmented Customer eXperiences are often treated as separate business challenges.',
      "**But what if they're all symptoms of the same problem?**",
      'In this high-energy, thought-provoking keynote, Claire Boscq CSP and Andy Jarvis reveal the hidden gaps between Digital, Employee and Customer eXperience, challenging leaders to rethink how people, culture and technology work together.',
      'Blending Eastern wisdom with digital intelligence, human emotion with systems thinking, and captivating storytelling with practical business insights, the Power Duo inspires audiences to see the bigger picture, connect the dots and discover what becomes possible when people and technology finally work in harmony.',
    ],
    closing: 'Because extraordinary business growth begins when disconnected experiences become one connected system.',
  },
  experience: {
    eyebrow: 'THE EXPERIENCE',
    heading: 'Two Speakers. Two Perspectives. Twice the Impact.',
    body: [
      'What happens when you combine the infectious energy of a globally recognised CX Energiser, who brings heart, humanity and a touch of Feng Shui wisdom, with the sharp thinking of a Digital King who has spent three decades making complex technology work?',
      '**You get the Power Duo. And a keynote unlike any other.**',
      'Claire Boscq CSP brings the human heartbeat, captivating storytelling, humour, audience interaction and her signature French flair. Andy Jarvis brings the digital intelligence, challenging assumptions, simplifying complexity and showing how technology can support people rather than overwhelm them.',
      'Like Yin and Yang, our contrasting energies create something powerful on stage. We challenge each other, engage the audience, spark fresh thinking and bring complex business challenges to life through relatable stories, humour and real-world insights.',
      '**No death by PowerPoint.** Just genuine connection, powerful insights and the energy to inspire action.',
    ],
    closing: "Because a great keynote doesn't just make people THINK differently. It makes them FEEL differently, so they DO something differently.",
    cta: { label: 'LEARN MORE ABOUT THE POWER DUO', href: links.powerDuo },
  },
  takeaways: {
    eyebrow: 'THE TAKEAWAYS',
    label: 'WHAT YOUR AUDIENCE WALKS AWAY WITH',
    heading: 'A New Way of Thinking About eXperience as One Connected System',
    intro: 'In this high-energy Power Duo keynote, Claire and Andy reveal the hidden gaps between Digital, Employee and Customer eXperience, inspiring audiences to rethink how people, culture and technology connect to unlock performance and accelerate growth.',
    closing: "Because when everything connects, organisations don't just improve. They SHINE.",
    cards: [
      { n: '01', title: 'SEE THE GAPS', lead: 'Recognise the real challenge.', text: 'Discover how seemingly separate Digital, Employee and Customer eXperience challenges are actually interconnected, and why solving them together changes everything.', reaction: "We finally see what's slowing us down and why." },
      { n: '02', title: 'THINK DIFFERENTLY', lead: 'Shift your perspective on growth.', text: 'Move from fixing individual experiences to aligning the entire organisation, recognising that connected experiences are a powerful business growth strategy.', reaction: 'This changes how we think about business growth.' },
      { n: '03', title: 'WALK AWAY READY', lead: 'Turn inspiration into momentum.', text: 'Leave energised, with fresh perspectives, greater clarity and the conviction to take the first steps towards connected experiences.', reaction: "We know where to start and we're ready to make it happen." },
    ],
  },
  options: {
    eyebrow: 'THE OPTIONS',
    heading: 'Two for One. One Price. One Clear Investment. One EPIC eXperience.',
    body: [
      'We believe booking international speakers should be as seamless as the experiences we help organisations create.',
      "Whether you're looking to inspire an entire conference, empower your leadership team or create a collaborative event partnership, we offer three ways to bring human insight and digital intelligence together.",
    ],
    signature: {
      label: 'THE SIGNATURE KEYNOTE',
      title: 'Inspire Your Audience',
      price: '$12,888',
      priceNote: 'ALL-INCLUSIVE',
      lead: 'Two international experts. One powerful message.',
      text: 'Bring Claire Boscq CSP and Andy Jarvis to your conference for a dynamic, thought-provoking keynote that challenges perspectives, energises audiences and inspires action.',
      includedLabel: "What's included:",
      included: ['Both international keynote speakers', 'Signature Power Duo keynote', 'Flights and ground transport', 'Accommodation', 'All speaker travel expenses'],
      closing: 'One clear price. Everything taken care of.',
      cta: { label: 'ENQUIRE ABOUT THE KEYNOTE', href: links.contact },
    },
    executive: {
      label: 'BESPOKE EXECUTIVE PROGRAMME',
      title: 'The eXecutive eXperience',
      lead: 'One Day. Your Challenges. The Right Experts.',
      text: "A curated, one-day executive programme bringing together the Power Duo and specialist keynote speakers, tailored to your organisation's challenges and ambitions.",
      topics: ['HumanX', 'DigitalX', 'CustomerX', 'CommunityX', 'Your own X-topic'],
      price: 'Bespoke investment',
      closing: "Discover our signature experiences and let's design an EPIC day together.",
      cta: { label: 'EXPLORE THE BESPOKE EXPERIENCE', href: links.experiences },
    },
    partnership: {
      label: 'THE STRATEGIC EVENT PARTNERSHIP',
      title: 'Host the Masterclass. Enjoy the Keynote on Us.',
      price: 'COMPLIMENTARY KEYNOTE',
      priceNote: 'WITH 12 CONFIRMED, paying Executive Masterclass participants at $998 each.',
      lead: 'A partnership designed to create exceptional value for everyone.',
      text: [
        "When you partner with us to organise and promote our one-day Executive Masterclass, securing a minimum of 12 paying participants at $998 per person, we'll deliver our signature Power Duo keynote at your conference at no additional keynote fee.",
        'Your conference audience enjoys an inspiring keynote, your masterclass participants gain practical tools to drive organisational improvement, and together we create an EPIC event experience.',
      ],
      includedLabel: "What's included:",
      included: ['Complimentary Power Duo keynote', 'One-day Executive Masterclass for a minimum of 12 participants', 'Both speakers: Claire Boscq CSP and Andy Jarvis', 'Flights and ground transport', 'Accommodation', 'All speaker travel expenses'],
      providesLabel: 'The booker provides:',
      provides: [
        'Support promoting and securing a minimum of 12 confirmed, paying masterclass participants',
        "A suitable training room at the conference venue or another venue arranged at the organiser's expense",
        'Required training-room AV equipment',
        'Participant catering, where applicable',
      ],
      closing: 'One partnership. Two powerful experiences. Greater impact.',
      cta: { label: 'EXPLORE AN EVENT PARTNERSHIP', href: links.contact },
    },
    philosophy: '**Our philosophy:** From Friction to Flow. Even when booking our services.',
  },
  action: {
    eyebrow: 'SEE US IN ACTION',
    heading: 'The Energy. The Connection. The Impact.',
    body: [
      'A great keynote is something you experience, not simply something you listen to.',
      'From international conference stages to executive leadership events, we bring together two complementary perspectives, infectious energy and a shared passion for creating meaningful experiences.',
    ],
    closing: "But don't just take our word for it. See us in action!",
  },
  proof: {
    heading: 'Real Experiences. Real Impact.',
    text: 'Discover what event organisers, business leaders and audiences have to say about working with us.',
    logosHeading: 'Trusted by Organisations Around the World',
  },
  cta: {
    eyebrow: "LET'S CREATE AN EPIC EXPERIENCE TOGETHER",
    heading: "You Bring the People. We'll Bring the Energy.",
    body: [
      'Every great event is an opportunity to inspire new thinking, create meaningful connections and spark action that lasts beyond the stage.',
      "Whether you're planning an international conference, a leadership gathering or an immersive Executive Masterclass, let's create an experience your audience will remember, feel and act upon.",
    ],
    closing: 'Energised. Inspired. Connected. Empowered. Ready to SHINE.',
    button: { label: "LET'S TALK ABOUT YOUR EVENT", href: links.contact },
  },
});
