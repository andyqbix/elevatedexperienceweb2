import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

// Project ID and dataset are public identifiers, not secrets.
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
            S.listItem().title('Articles').schemaType('post').child(S.documentTypeList('post').title('Articles').defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])),
            S.listItem().title('Authors').schemaType('author').child(S.documentTypeList('author').title('Authors')),
          ]),
    }),
    visionTool(),
  ],
});
