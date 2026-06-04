export default {
  name: 'realisatie',
  title: 'Realisaties',
  type: 'document',
  icon: () => '🏠',
  fields: [
    {
      name: 'titel_nl',
      title: 'Titel (NL)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'titel_fr',
      title: 'Titel (FR)',
      type: 'string',
    },
    {
      name: 'categorie',
      title: 'Categorie',
      type: 'string',
      options: {
        list: [
          { title: 'Hotel', value: 'hotel' },
          { title: 'Restaurant & Winkel', value: 'horeca' },
          { title: 'Residentieel', value: 'residentieel' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'collectie',
      title: 'Gebruikte collectie',
      type: 'string',
      options: {
        list: [
          { title: 'Cosy', value: 'Cosy' },
          { title: 'Cosy Vinyl', value: 'Cosy Vinyl' },
          { title: 'Craft', value: 'Craft' },
          { title: 'Luxe', value: 'Luxe' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'afbeelding',
      title: 'Afbeelding',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: { title: 'titel_nl', subtitle: 'categorie', media: 'afbeelding' },
  },
}
