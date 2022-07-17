import commonBlockSettings from '../partials/commonBlockSettings'

export default {
  ...commonBlockSettings,
  name: 'FeaturedText',
  title: 'Featured Text Block',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      rows: 1,
      group: 'content',
    },
    {
      name: 'headingType',
      type: 'string',
      group: 'content',
      options: {
        list: [
          { value: 'h1', title: 'H1' },
          { value: 'h2', title: 'H2' },
          { value: 'h3', title: 'H3' },
          { value: 'h4', title: 'H4' },
          { value: 'h5', title: 'H5' },
        ],
      },
    },
    {
      name: 'subtitle1',
      type: 'text',
      group: 'content',
    },
    {
      name: 'subtitle2',
      type: 'text',
      group: 'content',
    },
    {
      name: 'ctaLabelPrimary',
      title: 'label',
      type: 'string',
      group: 'content',
    },
    {
      name: 'ctaUrlPrimary',
      title: 'link',
      type: 'link',
      group: 'content',
    },
  ],
  options: {
    editModal: 'fullscreen',
  },
  preview: {
    prepare: () => ({ title: 'FeaturedText' }),
  },
}
