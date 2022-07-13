import commonBlockSettings from '../partials/commonBlockSettings'

export default {
  ...commonBlockSettings,
  name: 'SpecialSectionHeading',
  title: 'Special Section Heading',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      rows: 2,
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
        ],
      },
    },
  ],
  options: {
    editModal: 'fullscreen',
  },
  preview: {
    prepare: () => ({ title: 'Hero' }),
  },
}
