import * as React from 'react'
import { blocks } from '~/api/__mock__'
import storySelectArgType from '~/utils/storySelectArgType'
import Promo from './Promo'

export default {
  title: 'Blocks/Promo',
  component: Promo,
  argTypes: {
    aligncontent: storySelectArgType(['left', 'right']),
  },
}

const Template = (args) => <Promo {...args} />

export const Default = Template.bind({})
Default.args = blocks.Promo
