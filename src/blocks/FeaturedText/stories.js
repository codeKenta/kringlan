import * as React from 'react'
import { blocks } from '~/api/__mock__'
import FeaturedText from './FeaturedText'

export default {
  title: 'Blocks/FeaturedText',
  component: FeaturedText,
}

const Template = (args) => <FeaturedText {...args} />

export const Default = Template.bind({})
Default.args = blocks.FeaturedText
