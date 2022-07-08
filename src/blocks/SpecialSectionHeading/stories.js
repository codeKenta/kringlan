import * as React from 'react'
import { blocks } from '~/api/__mock__'
import SpecialSectionHeading from './SpecialSectionHeading'

export default {
  title: 'Blocks/SpecialSectionHeading',
  component: SpecialSectionHeading,
}

const Template = (args) => <SpecialSectionHeading {...args} />

export const Default = Template.bind({})
Default.args = blocks.SpecialSectionHeading
