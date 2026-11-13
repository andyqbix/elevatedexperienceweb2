import { defineField, defineType } from 'sanity';

export const seo = defineType({
  name: 'seo',
  title: 'Search and sharing',
  type: 'object',
  description: 'Optional. If left empty, the title, summary and main image are used.',
  fields: [
    defineField({ name: 'metaTitle', title: 'Search title', description: 'Shown in Google results. Around 60 characters.', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Search description', description: 'Shown under the title in Google results. Around 150 characters.', type: 'text', rows: 3 }),
    defineField({ name: 'ogImage', title: 'Social share image', description: 'Shown when the article is shared on LinkedIn and other networks.', type: 'image' }),
  ],
});
