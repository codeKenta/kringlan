import commonBlockSettings from '../partials/commonBlockSettings'

export default {
  ...commonBlockSettings,
  name: 'TitleHero',
  title: 'Title Hero Block',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      rows: 4,
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
      name: 'subtitle',
      type: 'string',
      rows: 1,
      group: 'content',
    },
    {
      name: 'textColor',
      type: 'string',
      group: 'content',
      options: {
        list: [
          { value: 'blue', title: 'Blue' },
          { value: 'green', title: 'Green' },
          { value: 'red', title: 'Red' },
          { value: 'pink', title: 'Pink' },
          { value: 'purple', title: 'Purple' },
          { value: 'orange', title: 'Orange' },
          { value: 'white', title: 'White' },
          { value: 'yellow', title: 'Yellow' },
        ],
      },
    },
  ],
  options: {
    editModal: 'fullscreen',
  },
  preview: {
    prepare: () => ({ title: 'TitleHero' }),
  },
}
