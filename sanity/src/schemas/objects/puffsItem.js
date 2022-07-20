export default {
  name: 'puffsItem',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'excerpt',
      type: 'text',
    },
    {
      name: 'mediaProps',
      title: 'Media',
      type: 'media',
    },
    {
      name: 'ctaLabelPrimary',
      title: 'label',
      type: 'string',
    },
    {
      name: 'ctaUrlPrimary',
      title: 'link',
      type: 'link',
    },
  ],
}
