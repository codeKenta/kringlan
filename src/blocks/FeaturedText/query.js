import { formatCtaLink } from '~/api/sanity/utils'

export default `{
  heading,
  headingType,
  ${formatCtaLink('ctaPrimary', 'ctaLabelPrimary', 'ctaUrlPrimary')},
  subtitle1,
  subtitle2
}`
