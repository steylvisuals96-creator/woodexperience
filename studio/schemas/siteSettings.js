export default {
  name: 'siteSettings',
  title: 'Website instellingen',
  type: 'document',
  icon: () => '⚙️',
  fields: [
    {
      name: 'telefoon',
      title: 'Telefoonnummer',
      type: 'string',
    },
    {
      name: 'email',
      title: 'E-mailadres',
      type: 'string',
    },
    {
      name: 'adres',
      title: 'Adres',
      type: 'string',
    },
    {
      name: 'openingsuren',
      title: 'Openingsuren',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'dag', title: 'Dag(en)', type: 'string' },
            { name: 'uren', title: 'Uren', type: 'string' },
          ],
          preview: {
            select: { title: 'dag', subtitle: 'uren' },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: 'Website instellingen' }
    },
  },
}
