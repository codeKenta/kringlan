import commonBlockSettings from '../partials/commonBlockSettings'

export default {
  ...commonBlockSettings,
  name: 'Promo',
  title: 'Promo Block',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      rows: 1,
      group: 'content',
    },
    {
      name: 'subtitle',
      type: 'string',
      group: 'content',
      rows: 1,
    },
    {
      name: 'description',
      type: 'text',
      rows: 4,
      group: 'content',
    },
    {
      name: 'alignContent',
      type: 'string',
      group: 'content',
      title: 'On which side do you want the content?',
      options: {
        list: [
          { value: 'left', title: 'Left' },
          { value: 'right', title: 'Right' },
        ],
      },
    },
    {
      name: 'imageCircle',
      type: 'boolean',
      group: 'content',
      title: 'Do you want the image to be circular?',
    },
    {
      name: 'mediaProps',
      title: 'Media',
      type: 'media',
      group: 'content',
    },
  ],
  options: {
    editModal: 'fullscreen',
  },
  preview: {
    prepare: () => ({ title: 'Promo' }),
  },
}
