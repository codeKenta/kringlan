// @inheritedComponent AppBar

import * as React from 'react'
import PropTypes from 'prop-types'
import useSize from '@react-hook/size'
import { generateUtilityClasses } from '@mui/base'
import { styled } from '@mui/system'
import { AppBar, IconButton, Link, Toolbar } from '@mui/material'
import { useGlobalState, useGlobalHandlers, useI18n, useRemoteConfig } from '~/context'
import { Brand as BrandIcon, Close as CloseIcon, Menu as MenuIcon } from '~/components/icons'
import RouterLink from '../../RouterLink'

const BREAKPOINT_KEY = 'md'

export const classes = generateUtilityClasses('CiaAppHeader', [
  'toolbarPushMobile',
  'toolbarPushDesktop',
  'hiddenOnMobile',
  'hiddenOnDesktop',
])

const AppHeaderRoot = styled(AppBar, {
  name: 'AppHeader',
  slot: 'Root',
})(({ theme, ownerState }) => ({
  display: 'flex',
  height: 80,
  padding: theme.spacing(0, 2),
  alignItems: 'flex-start',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.dark,

  ...(ownerState.headerModeState === 'transparent' && {
    '&:not(:hover):not(:focus-within)': {
      backgroundColor: 'transparent',
      color: ownerState.headerColor,
    },
  }),
  ...(ownerState.disableTransparency !== undefined && {
    transition: theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.shortest, // Match value of `IconButton`
    }),
  }),
  // Util classes
  [`& .${classes.toolbarPushMobile}`]: {
    [theme.breakpoints.down(BREAKPOINT_KEY)]: { marginLeft: 'auto' },
  },
  [`& .${classes.toolbarPushDesktop}`]: {
    [theme.breakpoints.up(BREAKPOINT_KEY)]: { marginLeft: 'auto' },
  },
  [`& .${classes.hiddenOnMobile}`]: {
    [theme.breakpoints.down(BREAKPOINT_KEY)]: { display: 'none' },
  },
  [`& .${classes.hiddenOnDesktop}`]: {
    [theme.breakpoints.up(BREAKPOINT_KEY)]: { display: 'none' },
  },
}))

const AppHeaderBrandLink = styled(RouterLink, {
  name: 'AppHeader',
  slot: 'BrandLink',
})(() => ({
  maxWidth: 150,
  height: 'auto',
  transform: 'translateX(29%)',

  '& > svg': {
    display: 'block',
    width: 'auto',
    height: 'auto',
  },
}))

const AppHeaderNav = styled('nav', {
  name: 'AppHeader',
  slot: 'List',
})(({ theme }) => ({
  color: theme.palette.getContrastText(theme.palette.primary.dark),
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(3),
  margin: theme.spacing(0, 12),

  '@media(max-width: 600px)': {
    display: 'none',
  },
}))

const AppHeader = React.memo(function AppHeader(props) {
  const {
    headerColor = 'inherit',
    headerMode = 'opaque',
    isNavMenuOpen,
    isSearchMenuOpen,
    isSomeMenuOpen,
    productsCount,
    ...other
  } = props

  const { onNavMenuToggle } = useGlobalHandlers()
  const { t } = useI18n()

  const rootRef = React.useRef(null)
  const [, rootHeight] = useSize(rootRef)

  const [disableTransparency, setDisableTransparency] = React.useState(undefined)
  const syncDisableTransparency = React.useCallback(() => {
    setDisableTransparency(window.pageYOffset > 100)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      syncDisableTransparency()
    }

    if (headerMode === 'auto') {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }

    // Define `disableTransparency` value on `headerMode` prop change, thereby
    // enabling transitions. Doing so negates flashing of header on page load
    // for pages that don't use `headerMode="opaque"`.
    return syncDisableTransparency
  }, [headerMode, syncDisableTransparency])

  let headerModeState = 'opaque'
  if (
    (headerMode === 'transparent' || (headerMode === 'auto' && !disableTransparency)) &&
    !isSomeMenuOpen
  ) {
    headerModeState = 'transparent'
  }

  const ownerState = {
    disableTransparency,
    headerColor,
    headerModeState,
  }

  const { menus } = useRemoteConfig()

  return (
    <AppHeaderRoot
      ownerState={ownerState}
      position={headerMode === 'opaque' ? 'sticky' : 'fixed'}
      ref={rootRef}
      {...other}
    >
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --cia-header-height: ${rootHeight}px;
            --cia-initial-sticky-top: ${headerMode === 'opaque' ? rootHeight : 0}px;
            --cia-sticky-top: ${headerMode !== 'transparent' ? rootHeight : 0}px;
          }
        `,
        }}
      />

      <Toolbar>
        <IconButton
          onClick={onNavMenuToggle}
          color="inherit" // Inherit color from `headerColor`.
          edge="start"
          size="small"
          aria-haspopup="true"
          aria-expanded={isNavMenuOpen}
          aria-label={t(__translationGroup)`Toggle main menu`}
          sx={{
            '@media(min-width: 800px)': {
              display: 'none',
            },
          }}
        >
          {isNavMenuOpen ? <CloseIcon /> : <MenuIcon color="secondary" />}
        </IconButton>
        <div className={classes.toolbarPushMobile} />
        <div className={classes.toolbarPushDesktop} />

        <AppHeaderBrandLink href="/" aria-label={t(__translationGroup)`Go to the homepage`}>
          <BrandIcon />
        </AppHeaderBrandLink>

        {menus?.primary?.length > 0 && (
          <AppHeaderNav>
            {menus.primary.map((menuLink, idx) => (
              <div key={idx}>
                <Link component={RouterLink} href={menuLink.url} variant="button">
                  {menuLink.label}
                </Link>
              </div>
            ))}
          </AppHeaderNav>
        )}
      </Toolbar>
    </AppHeaderRoot>
  )
})

AppHeader.propTypes = {
  headerColor: PropTypes.string,
  headerMode: PropTypes.oneOf(['opaque', 'transparent', 'auto']),
  isNavMenuOpen: PropTypes.bool,
  isSearchMenuOpen: PropTypes.bool,
  isSomeMenuOpen: PropTypes.bool,
  productsCount: PropTypes.number,
}

function AppHeaderContainer(props) {
  const { isNavMenuOpen, isSearchMenuOpen, isSomeMenuOpen } = useGlobalState()

  return (
    <AppHeader
      isNavMenuOpen={isNavMenuOpen}
      isSearchMenuOpen={isSearchMenuOpen}
      isSomeMenuOpen={isSomeMenuOpen}
      {...props}
    />
  )
}

export default AppHeaderContainer
