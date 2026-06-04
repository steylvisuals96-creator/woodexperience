export default {
  name: 'teamlid',
  title: 'Team',
  type: 'document',
  icon: () => '👤',
  fields: [
    {
      name: 'naam',
      title: 'Naam',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'volgorde',
      title: 'Volgorde',
      type: 'number',
      description: '1 = eerst getoond (oprichter = 1)',
    },
    {
      name: 'isOprichter',
      title: 'Is oprichter?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'rol_nl',
      title: 'Functie (NL)',
      type: 'string',
      description: 'Optioneel — bijv. Oprichter, Verkoop, Logistiek',
    },
    {
      name: 'rol_fr',
      title: 'Functie (FR)',
      type: 'string',
    },
    {
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  preview: {
    select: { title: 'naam', subtitle: 'rol_nl', media: 'foto' },
  },
  orderings: [
    { title: 'Volgorde', name: 'volgorde', by: [{ field: 'volgorde', direction: 'asc' }] },
  ],
}
