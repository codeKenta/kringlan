const subLinks = Array.from(new Array(12), (_, idx) => ({
  label: `Link ${idx + 1}`,
  url: `/link-${idx + 1}`,
}))

export const menuPrimary = [
  {
    label: 'Campaigns',
    url: '/campaigns',
  },
  {
    label: 'Characters',
    url: '/characters',
  },
]

export const menuSecondary = [
  {
    items: subLinks,
    label: 'Clothing',
    url: '/clothing',
  },
  {
    items: subLinks,
    label: 'Accessories',
    url: '/accessories',
  },
  {
    items: subLinks,
    label: 'Shoes',
    url: '/shoes',
  },
  {
    items: subLinks,
    label: 'Homewear',
    url: '/homewear',
  },
  {
    items: subLinks,
    label: 'Skincare',
    url: '/skincare',
  },
]

export const menuFooter = [
  {
    label: 'Campaigns',
    url: '/campaigns',
  },
  {
    label: 'Characters',
    url: '/characters',
  },
]

export default {
  menus: {
    primary: menuPrimary,
    footer: menuFooter,
  },
  facebookUrl: 'https://www.facebook.com/',
  instagramUrl: 'https://www.instagram.com/',
  pinterestUrl: 'https://www.pinterest.com/',
  storeMessage: 'lorem ipsum dolor sit amet, consectetur',
  termsPageUrl: '/terms-and-conditions',
  twitterUrl: 'https://twitter.com/',
}
