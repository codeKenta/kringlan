import * as React from 'react'
import Hero from './Hero'

export default {
  title: 'Blocks/Hero',
  component: Hero,
}

const Template = (args) => <Hero {...args} />

export const Default = Template.bind({})
Default.args = {
  heading: 'Let´s Roll the Dice',
  excerpt: 'Welcome to the magic world of spell casters and fighters',
  ctaPrimary: {
    url: '/adventures',
    label: 'The Adventures',
  },
  ctaSecondary: {
    url: '/characters',
    label: 'The Characters',
  },
  mediaProps: {
    component: 'picture',
    breakpoints: {
      xs: 'https://wallpapercave.com/wp/zD18bKX.jpg',
      sm: 'https://wallpapercave.com/wp/wp2770248.jpg',
    },
  },
}
