// SHINE | OUR SIX-STEP BLUEPRINT
// Approved copy. Do not edit wording here without sign-off. **text** marks approved emphasis.
// Approved corrections applied:
//  - "how we helping organisations" -> "how we help organisations"
//  - "that elevation, Not another framework" -> "that elevation. Not another framework"
//  - "SHINE Blueprint™" -> "SHINE Blueprint" (no trade mark symbol)
//  - Values wording aligned with the Power Duo page: "integrity and trust, navigated execution and an expansion mindset"
//  - "[DISCOVER YOUR eXPERIENCE GAPS]" -> "DISCOVER YOUR EXPERIENCE GAPS"
import { links } from '@/data/site';
import { typeset } from '@/lib/text';

// The six stages are reused on the Executive Masterclasses page.
export const shineStages = typeset([
  { label: '1', name: 'VISION', question: 'Where do we want to go?', text: 'Align leadership around a shared vision for Digital, Employee and Customer eXperience.' },
  { label: '2', name: 'DISCOVERY', question: "What's slowing us down?", text: 'Uncover the gaps, hidden friction and opportunities across people, processes, systems and customer interactions.' },
  { label: '3', name: 'STRATEGY', question: 'How do we connect the dots?', text: 'Design a joined-up approach that aligns human experience with digital capabilities and business priorities.' },
  { label: '4', name: 'ROADMAP', question: 'What happens next?', text: 'Prioritise actions, establish ownership and define realistic goals with measurable outcomes.' },
  { label: '5', name: 'DELIVERY', question: 'How do we make it happen?', text: 'Translate plans into practical improvements through collaboration, focused execution and accountability.' },
  { label: '6', name: 'SHINE', question: 'How do we sustain success?', text: 'Embed continuous improvement, elevate experiences and create lasting momentum for growth.' },
]);

export const shine = typeset({
  meta: {
    title: 'The SHINE Blueprint: Six Steps From Friction to Flow',
    description: 'A practical, structured approach to connecting Digital, Employee and Customer eXperience, turning disconnected operations into seamless flow, stronger performance and sustainable growth.',
  },
  hero: {
    eyebrow: 'SHINE | OUR SIX-STEP BLUEPRINT',
    heading: 'Six Steps. One Direction. From Friction to Flow.',
    text: 'A practical, structured approach to connecting Digital, Employee and Customer eXperience, turning disconnected operations into seamless flow, stronger performance and sustainable growth.',
  },
  path: {
    heading: 'A Clear Path From Disconnection to Integration',
    body: [
      "Business growth doesn't happen simply by investing in more technology, launching another employee initiative or improving individual customer touchpoints.",
      '**It happens when all three work together.**',
      'The SHINE Blueprint brings structure to that elevation. Not another framework to learn. A clear path from where you are to where you want to be.',
    ],
  },
  journey: {
    intro: 'The SHINE Blueprint is the HOW, how we help organisations understand where friction exists, identify opportunities, align their people and systems, and turn strategic thinking into practical action and is built around six connected stages:',
    stages: shineStages,
    after: 'The framework helps organisations move from disconnected systems and siloed thinking to a more integrated, energised, and high-performing way of working.',
  },
  values: {
    heading: 'Built on Values. Designed for Action.',
    body: [
      'The SHINE Blueprint is grounded in the shared values that unite the Power Duo: service excellence, human energy, integrity and trust, navigated execution and an expansion mindset.',
      'Together, these principles shape how we work with organisations and turn ambitious ideas into meaningful results.',
    ],
    closing: 'Our values guide us. Our Blueprint gives us the path.',
    cta: { label: 'MEET THE POWER DUO', href: links.powerDuo },
  },
  challenges: {
    heading: 'Recognise Any of These Challenges?',
    items: [
      'Disconnected systems creating inefficiencies and unnecessary costs?',
      'Teams working in silos, slowing collaboration and productivity?',
      'Frustrated employees leading to disengagement and higher staff turnover?',
      'Inconsistent customer journeys affecting satisfaction, loyalty and retention?',
      'Technology and AI investments failing to deliver their full potential?',
    ],
    after: "Perhaps your organisation is growing, but your people, processes and systems are struggling to keep pace. Or perhaps you know things could work better together, but you're unsure where to begin.",
  },
  leaders: {
    heading: 'The SHINE Blueprint Is for Leaders Ready to Disrupt the Old Ways of Doing Business',
    intro: "Whether you're a CEO, C-suite executive, business owner, senior leader or management team, the challenge is often the same: aligning people, technology and customer interactions to achieve stronger business performance.",
    label: "It's for leaders who are:",
    items: [
      '**Driving business growth** and looking to remove the friction slowing performance.',
      '**Investing in technology and AI** and wanting greater value from those investments.',
      '**Leading people and culture** and striving to build more engaged, collaborative and empowered teams.',
      '**Responsible for Customer eXperience** and determined to create seamless journeys that strengthen loyalty.',
      '**Managing transformation and change** and seeking clearer priorities, better alignment and meaningful results.',
    ],
    after: "Whether you're leading an established organisation, scaling a growing business or navigating change, the SHINE Blueprint helps you see the bigger picture, connect the dots and turn complexity into clarity.",
    closing: 'Because business growth accelerates when people, digital and customers interact brilliantly together.',
  },
  impact: {
    eyebrow: 'THE BUSINESS IMPACT',
    heading: 'When Everything Connects, Everything Elevates.',
    intro: 'The SHINE Blueprint is designed to create meaningful improvements across your entire organisation, connecting the experiences of your people, your customers and the technology that supports them.',
    areas: [
      { key: 'dx', title: 'Digital eXperience (DX)', text: 'Simpler systems, smoother processes and technology that works for people, improving efficiency and reducing unnecessary friction.' },
      { key: 'ex', title: 'Employee eXperience (EX)', text: 'More engaged, confident and empowered teams, supported by clearer processes, stronger collaboration and a culture of shared responsibility.' },
      { key: 'cx', title: 'Customer eXperience (CX)', text: 'More consistent, seamless and meaningful customer journeys that strengthen trust, satisfaction, loyalty and long-term relationships.' },
      { key: 'growth', title: 'Business Growth', text: 'Better alignment, stronger productivity, improved performance and a more connected organisation equipped to grow sustainably.' },
    ],
    closing: 'One connected organisation. Extraordinary eXperiences. Sustainable growth.',
  },
  cta: {
    eyebrow: 'READY TO MOVE FROM FRICTION TO FLOW?',
    heading: 'Every Elevation Begins With Clarity.',
    body: [
      'Before you can close the gaps, you need to know where they are.',
      'Our 10-minute eXperience diagnostic helps you take the first step towards identifying the friction between your Digital, Employee and Customer eXperience.',
      'Discover where opportunities exist to reconnect your organisation, elevate experiences and accelerate growth.',
    ],
    primary: { label: 'DISCOVER YOUR EXPERIENCE GAPS', href: links.diagnostic },
    or: 'Or connect with the Power Duo to explore how the SHINE Blueprint could support your organisation.',
    secondary: { label: "LET'S TALK", href: links.contact },
  },
});
