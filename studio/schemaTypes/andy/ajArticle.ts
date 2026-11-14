import { defineArrayMember, defineField, defineType } from 'sanity';

// Articles for andyjarvis.digital (Andy Jarvis, The Digital King).
// A separate document type from the Elevated eXperience "post", so the two sites
// never show each other's articles. Shares the Authors list and the SEO fields.
export const ajArticle = defineType({
  name: 'ajArticle',
  title: 'Andy Jarvis article',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'listing', title: 'Listing' },
    { name: 'seo', title: 'Search and sharing' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', group: 'content', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug',
      title: 'Web address',
      description: 'The end of the article address: andyjarvis.digital/resources/this-part. Click Generate to make it from the title.',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      description: 'Shown on the article card, at the top of the article and when it is shared. Optional, but recommended.',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Image description',
          description: 'Describe the image for people who cannot see it (and for Google).',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Summary',
      description: 'One or two sentences shown on the article cards. Maximum 260 characters.',
      type: 'text',
      rows: 3,
      group: 'content',
      validation: (rule) => rule.required().max(260),
    }),
    defineField({ name: 'author', title: 'Author', type: 'reference', to: [{ type: 'author' }], group: 'content' }),
    defineField({
      name: 'publishedAt',
      title: 'Published date',
      type: 'datetime',
      group: 'content',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Article',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Image description', type: 'string' }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Feature this article',
      description: 'Featured articles are shown first on the Resources page.',
      type: 'boolean',
      group: 'listing',
      initialValue: false,
    }),
    defineField({ name: 'seo', title: 'Search and sharing', type: 'seo', group: 'seo' }),
  ],
  orderings: [{ title: 'Published, newest first', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: {
    select: { title: 'title', media: 'mainImage', date: 'publishedAt', featured: 'featured' },
    prepare: ({ title, media, date, featured }) => ({
      title,
      media,
      subtitle: [featured ? '★ Featured' : '', date ? new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Not dated'].filter(Boolean).join(' · '),
    }),
  },
});
