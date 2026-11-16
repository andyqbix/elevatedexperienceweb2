// RESOURCES | PREMIUM KNOWLEDGE HUB 2027
// Approved copy. Do not edit wording here without sign-off.
// Featured Insights and Explore the Resources are held back until the articles are connected through Sanity:
// the brief says to hide a section rather than show an unfinished heading. Their approved headings are kept here.
// Approved correction applied: "THE ELEVATED eXperience FRICTION DIAGNOSTIC" -> full uppercase.
import { links } from '@/data/site';
import { typeset } from '@/lib/text';

export const resources = typeset({
  meta: {
    title: 'Resources: Fresh Thinking. Human Insights. Smarter Business.',
    description: 'Videos, conversations and practical tools from Elevated eXperience and the Power Duo to help leaders connect people, technology and Customer eXperience.',
  },
  hero: {
    eyebrow: 'RESOURCES',
    heading: 'Fresh Thinking. Human Insights. Smarter Business.',
    line: 'Ideas That Challenge Thinking. Insights That Inspire Action.',
    body: [
      'Explore articles, conversations, videos and practical resources designed to help leaders connect people, technology and Customer eXperience.',
      'From human connection and leadership to digital transformation, AI and business growth, discover fresh perspectives from Elevated eXperience and the Power Duo.',
    ],
    closing: 'Because better business begins with better thinking.',
  },
  // Card linking to the HX | Hive eXperience page
  hxCard: {
    name: 'HX | Hive eXperience',
    text: 'Free community platform. Bring your members, events, courses and sales into one Hive you own.',
    cta: 'Explore HX',
  },
  // Hidden until Sanity is connected
  // Heading for the related articles strip at the foot of each article page
  featured: { eyebrow: 'FEATURED INSIGHTS', heading: 'Fresh Perspectives Worth Exploring.' },
  explore: { eyebrow: 'EXPLORE THE RESOURCES', heading: 'Find the Ideas That Matter to You.' },
  watch: {
    eyebrow: 'WATCH. LISTEN. GET INSPIRED.',
    heading: 'Real Conversations. Powerful Perspectives.',
    text: 'Explore genuine video content, interviews, podcast appearances and conversations featuring Elevated eXperience, Claire Boscq CSP and Andy Jarvis.',
  },
  tools: {
    eyebrow: 'TURN INSIGHT INTO ACTION.',
    heading: 'Explore. Reflect. Take the Next Step.',
    body: [
      'Reading a new perspective is valuable. Applying it to your own organisation is where meaningful improvement begins.',
      'For leaders ready to explore how connected their Digital, Employee and Customer eXperience really are, our short diagnostic provides a practical starting point.',
    ],
    featuredLabel: 'FEATURED TOOL',
    toolName: 'THE ELEVATED EXPERIENCE FRICTION DIAGNOSTIC',
    toolText: 'Discover how connected your Digital, Employee and Customer eXperience really are and identify where hidden friction may be slowing business growth.',
    cta: { label: 'TAKE THE 10-MINUTE DIAGNOSTIC', href: links.diagnostic },
  },
  stay: {
    eyebrow: 'KEEP YOUR THINKING ELEVATED.',
    heading: 'Fresh Perspectives. Practical Ideas. Delivered to Your Inbox.',
    body: [
      'Stay connected with Elevated eXperience and explore new ideas on leadership, Digital eXperience, Employee eXperience, Customer eXperience and the human side of business.',
      'Join our mailing list for fresh insights, news and resources from the Power Duo.',
    ],
    cta: { label: 'STAY CONNECTED', href: links.mailchimp },
  },
});
