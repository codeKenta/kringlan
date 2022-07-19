import commonBlockSettings from '../partials/commonBlockSettings'

export default {
  ...commonBlockSettings,
  fieldsets: [
    {
      title: 'Entries',
      name: 'entries',
    },
  ],
  name: 'Puffs',
  title: 'Puffs block',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      rows: 1,
      required: true,
    },
    {
      name: 'headingType',
      type: 'string',
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
      name: 'entries',
      type: 'array',
      of: [{ type: 'puffsItem' }],
    },
  ],
  options: {
    editModal: 'fullscreen',
  },
  preview: {
    prepare: () => ({ title: 'Puffs' }),
  },
}
