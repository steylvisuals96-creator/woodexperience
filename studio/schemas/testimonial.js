export default {
  name: 'testimonial',
  title: 'Getuigenissen',
  type: 'document',
  icon: () => '⭐',
  fields: [
    {
      name: 'auteur',
      title: 'Naam',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'rol_nl',
      title: 'Functie/locatie (NL)',
      type: 'string',
      description: 'bijv. Parketspecialist, Antwerpen',
    },
    {
      name: 'rol_fr',
      title: 'Functie/locatie (FR)',
      type: 'string',
    },
    {
      name: 'quote_nl',
      title: 'Quote (NL)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'quote_fr',
      title: 'Quote (FR)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'sterren',
      title: 'Aantal sterren',
      type: 'number',
      initialValue: 5,
      validation: Rule => Rule.min(1).max(5),
    },
  ],
  preview: {
    select: { title: 'auteur', subtitle: 'rol_nl' },
  },
}
