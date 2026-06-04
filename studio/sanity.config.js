import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

import siteSettings from './schemas/siteSettings'
import collectie from './schemas/collectie'
import teamlid from './schemas/teamlid'
import realisatie from './schemas/realisatie'
import testimonial from './schemas/testimonial'

export default defineConfig({
  name: 'woodexperience',
  title: 'Wood Experience',

  projectId: 'apliysvo',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Beheer')
          .items([
            S.listItem()
              .title('⚙️  Website instellingen')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            S.documentTypeListItem('collectie').title('🪵  Collecties'),
            S.documentTypeListItem('realisatie').title('🏠  Realisaties'),
            S.documentTypeListItem('teamlid').title('👤  Team'),
            S.documentTypeListItem('testimonial').title('⭐  Getuigenissen'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: [siteSettings, collectie, teamlid, realisatie, testimonial],
  },
})
