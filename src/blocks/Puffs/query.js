import { formatCtaLink, formatMedia } from '~/api/sanity/utils'

export default `{
  heading,
  headingType,
  entries,
  mediaProps ${formatMedia},
  ${formatCtaLink('ctaPrimary', 'ctaLabelPrimary', 'ctaUrlPrimary')},


}`
