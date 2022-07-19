import * as React from 'react'
import { blocks } from '~/api/__mock__'
import Puffs from './Puffs'

export default {
  title: 'Blocks/Puffs',
  component: Puffs,
}

const Template = (args) => <Puffs {...args} />

export const Default = Template.bind({})
Default.args = blocks.Puffs
