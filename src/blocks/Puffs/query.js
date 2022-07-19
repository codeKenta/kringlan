import { formatCtaLink, formatMedia } from '~/api/sanity/utils'

export default `{
  heading,
  headingType,
  entries[] {
    title,
    excerpt,
    mediaProps ${formatMedia},
    ${formatCtaLink('ctaPrimary', 'ctaLabelPrimary', 'ctaUrlPrimary')},
  }
}`
