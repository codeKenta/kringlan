import * as React from 'react'
import { blocks } from '~/api/__mock__'
import TitleHero from './TitleHero'

export default {
  title: 'Blocks/TitleHero',
  component: TitleHero,
}

const Template = (args) => <TitleHero {...args} />

export const Default = Template.bind({})
Default.args = blocks.TitleHero
