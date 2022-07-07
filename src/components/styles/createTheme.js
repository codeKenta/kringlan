import { createTheme as createMuiTheme } from '@mui/material/styles'
import breakpoints from './breakpoints'
import createMixins from './createMixins'
import createOverrides from './createOverrides'
import createPalette from './createPalette'
import createTypography from './createTypography'
import shape from './shape'
import spacing from './spacing'
import zIndex from './zIndex'

/**
 * `createTheme` wrapper function enables the following
 * - Custom light/dark pallete.
 * - Custom mixins with `breakpoints` and `spacing` access.
 * - Custom overrides with `theme` object access.
 *
 * @param {object} options
 */
export default function createTheme(options = {}) {
  const {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    typography: typographyInput = {},
    ...other
  } = options

  const palette = createPalette(paletteInput)
  const typography = createTypography(palette, typographyInput)

  const theme = createMuiTheme(
    {
      breakpoints,
      palette: {
        primary: {
          light: '#032C51',
          main: '#26252D',
          dark: '#000000',
        },
        secondary: {
          light: '#F8F8F8',
          main: '#E9E9E9',
          dark: '#C90000',
        },
        text: {
          secondary: '#C90000',
        },
      },
      shape,
      spacing,
      typography,
      zIndex,
    },
    other,
  )

  // Patch the theme object with mixins & overrides once the theme object is defined
  theme.mixins = createMixins(theme.breakpoints, theme.spacing, mixinsInput)
  theme.components = createOverrides(theme)

  return theme
}
