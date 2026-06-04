export default {
  name: 'collectie',
  title: 'Collecties',
  type: 'document',
  icon: () => '🪵',
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
      description: '1 = eerst getoond',
    },
    {
      name: 'badge_nl',
      title: 'Badge (NL)',
      type: 'string',
      description: 'bijv. Toegankelijk, Maatwerk, Exclusief',
    },
    {
      name: 'badge_fr',
      title: 'Badge (FR)',
      type: 'string',
    },
    {
      name: 'subtitel_nl',
      title: 'Subtitel (NL)',
      type: 'string',
    },
    {
      name: 'subtitel_fr',
      title: 'Subtitel (FR)',
      type: 'string',
    },
    {
      name: 'beschrijving_nl',
      title: 'Beschrijving (NL)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'beschrijving_fr',
      title: 'Beschrijving (FR)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'afbeelding',
      title: 'Afbeelding',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'specs',
      title: 'Specificaties',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label_nl', title: 'Label (NL)', type: 'string' },
            { name: 'label_fr', title: 'Label (FR)', type: 'string' },
            { name: 'waarde_nl', title: 'Waarde (NL)', type: 'string' },
            { name: 'waarde_fr', title: 'Waarde (FR)', type: 'string' },
          ],
          preview: { select: { title: 'label_nl', subtitle: 'waarde_nl' } },
        },
      ],
    },
  ],
  preview: {
    select: { title: 'naam', media: 'afbeelding' },
  },
  orderings: [
    { title: 'Volgorde', name: 'volgorde', by: [{ field: 'volgorde', direction: 'asc' }] },
  ],
}
