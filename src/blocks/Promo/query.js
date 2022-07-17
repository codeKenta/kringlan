import { formatMedia } from '~/api/sanity/utils'

export default `{
  name,
  alignContent,
  description,
  imageCircle,
  mediaProps ${formatMedia},
  heading,
  subtitle,
}`
