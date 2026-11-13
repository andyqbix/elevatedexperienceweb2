// HOMEPAGE | FINAL APPROVED WEBSITE BRIEF 2027
// Approved copy. Do not edit wording here without sign-off. **text** marks approved emphasis.
import { links } from '@/data/site';
import { typeset } from '@/lib/text';

export const home = typeset({
  meta: {
    title: 'Elevated eXperience | From Friction to Flow',
    description: 'Claire Boscq CSP and Andy Jarvis, the Power Duo, connect Digital, Employee and Customer eXperience through keynotes, Executive Masterclasses and Coachsulting.',
  },
  hero: {
    identifier: 'ELEVATED EXPERIENCE · FROM FRICTION TO FLOW',
    heading: 'What Friction Is Slowing Your Organisation Down in 2027?',
    sub: 'The tech, the people, the customer journey, or the disconnection between them?',
  },
  problem: {
    eyebrow: 'WHY | THE REAL ISSUE',
    heading: 'The Real Issue: The Hidden Cost of Disconnected eXperiences',
    body: [
      "Most organisations aren't struggling because of a lack of effort. They're investing in technology, developing their people and working hard to delight their customers.",
      'Yet too often, these efforts happen in isolation.',
      'The result? Disconnected systems, frustrated employees, fragmented customer journeys and missed opportunities for growth.',
    ],
    statsLabel: 'THREE AREAS OF FRICTION',
    stats: [
      { key: 'dx', tag: 'DX | DIGITAL', figure: 89, title: 'Technology investments fall short', text: "In a PwC survey of US operations leaders, 89% said technology investments hadn't fully delivered expected results.", source: 'PwC, 2026' },
      { key: 'ex', tag: 'EX | EMPLOYEE', figure: 81, title: 'Digital workplaces still create friction for employees.', text: "Only 19% of respondents in Reworked's 2026 research described their digital workplace as frictionless and productive.", source: 'Reworked, 2026' },
      { key: 'cx', tag: 'CX | CUSTOMER', figure: 31, title: 'Silos undermine CX goals', text: 'In 2025 CX research, 31% identified silos between channels and teams as an internal obstacle to achieving customer experience goals.', source: 'Contentful Assets, 2025' },
    ],
    connectionLabel: 'THE CONNECTION',
    connection: ["The problem isn't simply technology, people or customers. It's what happens when they don't work together.", "That's the heart of Elevated eXperience."],
    quote: 'The gaps are not always obvious. But they are expensive.',
    quoteBy: 'Claire Boscq CSP & Andy Jarvis',
  },
  whyUs: {
    eyebrow: 'WHY US? THE POWER DUO',
    heading: 'Where Yin Meets Yang. Where Human Emotion Meets Digital Intelligence.',
    promise: 'A More Soulful Way of Doing Business.',
    credibility: 'Six Decades of Expertise. Two Complementary Energies. One Shared Mission.',
    body: [
      'What happens when you bring together the ancient wisdom of Feng Shui, the power of human emotion and the intelligence of modern technology?',
      '**You get the Power Duo.**',
      'Claire Boscq CSP, a globally recognised Customer eXperience Guru and creator of BizShui™, brings the human heartbeat: intuition, energy, empathy and the understanding of what makes people thrive. Andy Jarvis, the Digital King, brings the digital intelligence: over 30 years of designing, connecting and transforming complex systems to make technology work for people and performance.',
      'Like Yin and Yang, our strengths are different yet beautifully complementary. Together, we bring heart and technology into harmony, revealing the hidden friction between Digital, Employee and Customer eXperience and connecting the right people, systems and solutions to create meaningful business growth.',
      "**Because the future of business isn't about choosing between humanity and technology. It's about making them work brilliantly together.**",
    ],
    closing: 'Different by Design. Stronger Together. From Friction to Flow.',
    cta: { label: 'MEET THE POWER DUO', href: links.powerDuo },
  },
  solution: {
    eyebrow: 'HOW | THE SHINE BLUEPRINT',
    heading: "From Disconnected to Extraordinary. It's Time to SHINE.",
    body: [
      "What if the real opportunity for growth isn't about doing more, but about connecting what you already have?",
      'At Elevated eXperience, we believe Digital, Employee and Customer eXperience are not three separate challenges. They are one connected system.',
      "That's why we created the SHINE Blueprint, our approach to identifying the gaps, aligning people, culture, processes and technology, and transforming friction into seamless flow.",
      'When every part of your organisation works together, your people thrive, your customers feel valued and your business is positioned to grow.',
    ],
    // Shortened home page version (approved): title, stage strip, this text and the button
    short: [
      'At Elevated eXperience, we believe Digital, Employee and Customer eXperience are not three separate challenges. They are one connected system.',
      "That's why we created the SHINE Blueprint, our approach to identifying the gaps, aligning people, culture, processes and technology, and transforming friction into seamless flow.",
    ],
    stages: ['VISION', 'DISCOVERY', 'STRATEGY', 'ROADMAP', 'DELIVERY', 'SHINE'],
    cta: { label: 'DISCOVER THE SHINE BLUEPRINT', href: links.shine },
  },
  delivery: {
    eyebrow: 'WHAT | INSPIRE TO ELEVATE',
    heading: 'Inspire to Elevate. Empower to Transform.',
    intro: 'Every organisation is different, and so is its journey towards extraordinary eXperiences. We bring the insight, energy and expertise to help leaders and their teams turn understanding into meaningful action.',
    label: 'THREE WAYS TO WORK WITH US',
    services: [
      { key: 'keynotes', title: 'KEYNOTES', text: 'Inspire leaders and audiences to think differently, challenge perspectives and discover new possibilities for growth.', outcome: 'Inspire change.', cta: 'EXPLORE OUR KEYNOTES', href: links.keynote },
      { key: 'masterclasses', title: 'MASTERCLASSES', text: 'Equip leaders and teams with the knowledge, practical tools and confidence to identify friction and drive improvements themselves.', outcome: 'Empower action.', cta: 'EXPLORE OUR MASTERCLASSES', href: links.masterclass },
      { key: 'coachsulting', title: 'COACHSULTING', text: 'Work directly with organisations to turn strategy into action, align teams and systems, and embed meaningful, measurable improvements.', outcome: 'Accelerate elevation.', cta: 'EXPLORE COACHSULTING', href: links.coachsulting },
    ],
  },
  outcome: {
    eyebrow: 'FROM FRICTION TO FLOW',
    heading: 'When Everything Connects, Everything Elevates.',
    body: [
      'Imagine an organisation where technology empowers people, employees feel engaged and confident, customers enjoy seamless experiences, and every interaction contributes to stronger business performance.',
      "That's what happens when Digital, Employee and Customer eXperience work together.",
    ],
    closing: 'One connected vision. One aligned organisation. Extraordinary eXperiences.',
  },
  proof: { eyebrow: 'TRUSTED BY' },
  action: {
    eyebrow: 'DISCOVER YOUR EXPERIENCE GAPS',
    heading: "Ready to Discover What's Slowing Your Organisation Down?",
    text: 'Take our 10-minute eXperience diagnostic and start identifying the hidden gaps holding back your growth.',
    cta: { label: 'TAKE THE 10-MINUTE DIAGNOSTIC', href: links.diagnostic },
  },
});
