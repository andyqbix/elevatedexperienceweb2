import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

// Project ID and dataset are public identifiers, not secrets.
// One studio, two websites: Elevated eXperience (elevatedexperience.vip) and
// Andy Jarvis, The Digital King (andyjarvis.digital). Each site has its own
// document types (post / ajArticle + ajTikTok), so content never crosses over.
// Authors are shared.
const newestFirst = [{ field: 'publishedAt', direction: 'desc' as const }];

export default defineConfig({
  name: 'elevated-experience',
  title: 'Elevated eXperience',
  projectId: 's2mpqcie',
  dataset: 'production',
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Elevated eXperience')
              .child(
                S.list()
                  .title('Elevated eXperience')
                  .items([
                    S.listItem().title('Articles').schemaType('post').child(S.documentTypeList('post').title('Articles').defaultOrdering(newestFirst)),
                  ]),
              ),
            S.listItem()
              .title('Andy Jarvis · The Digital King')
              .child(
                S.list()
                  .title('Andy Jarvis · The Digital King')
                  .items([
                    S.listItem().title('Articles').schemaType('ajArticle').child(S.documentTypeList('ajArticle').title('Articles').defaultOrdering(newestFirst)),
                    S.listItem().title('TikTok videos').schemaType('ajTikTok').child(S.documentTypeList('ajTikTok').title('TikTok videos').defaultOrdering(newestFirst)),
                  ]),
              ),
            S.divider(),
            S.listItem().title('Authors').schemaType('author').child(S.documentTypeList('author').title('Authors')),
          ]),
    }),
    visionTool(),
  ],
});
