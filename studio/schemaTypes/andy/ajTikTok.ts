import { defineField, defineType } from 'sanity';

// TikTok videos shown on andyjarvis.digital/resources. TikTok has no public feed
// for a channel, so videos are chosen here: paste the link and publish.
const TIKTOK_URL = /^https:\/\/(www\.)?tiktok\.com\/@[\w.-]+\/video\/\d+/;

export const ajTikTok = defineType({
  name: 'ajTikTok',
  title: 'TikTok video',
  type: 'document',
  fields: [
    defineField({
      name: 'url',
      title: 'TikTok link',
      description: 'Open the video on tiktok.com and copy the address, e.g. https://www.tiktok.com/@andyjarvisdigitalking/video/7312345678901234567',
      type: 'url',
      validation: (rule) =>
        rule.required().custom((value) =>
          !value || TIKTOK_URL.test(value) ? true : 'Use the full tiktok.com/@name/video/... link (short vm.tiktok.com links will not work)',
        ),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Optional. Shown on the card. If empty, the TikTok caption is used.',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date',
      description: 'Used for ordering, newest first.',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [{ title: 'Newest first', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: {
    select: { title: 'title', url: 'url', date: 'publishedAt' },
    prepare: ({ title, url, date }) => ({
      title: title || url || 'TikTok video',
      subtitle: date ? new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '',
    }),
  },
});
