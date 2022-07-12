import * as React from 'react'
import { styled, keyframes } from '@mui/system'
import { Container, Link } from '@mui/material'
import { Brand as BrandIcon } from '~/components/icons'
import { useRemoteConfig, useI18n } from '~/context'
import RouterLink from '../../RouterLink'

const AppFooterRoot = styled('footer', {
  name: 'AppFooter',
  slot: 'Root',
})(({ theme }) => ({
  padding: 'var(--cia-section-spacing) 0',
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.getContrastText(theme.palette.primary.dark),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

// Experimental just for fun
const neonLight = keyframes`
  from {
    filter: saturate(70%);
  }
  to {
    filter: saturate(100%);
  }

`

const AppFooterBrandLink = styled(RouterLink, {
  name: 'AppFooter',
  slot: 'BrandLink',
})(() => ({
  color: 'inherit',
  '& > svg': {
    display: 'block',
    width: '300px',
    height: 'auto',
    margin: '0 auto',
    animation: `${neonLight} 50ms infinite alternate`,
  },
}))

const AppFooterNav = styled('nav', {
  name: 'AppFooter',
  slot: 'List',
})(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: theme.spacing(4),
}))

const AppFooter = React.memo(function AppFooter(props) {
  const { menus } = useRemoteConfig()
  const { t } = useI18n()

  return (
    <AppFooterRoot {...props}>
      <Container>
        <AppFooterBrandLink
          alt="Kringlan Logo"
          href="/"
          aria-label={t(__translationGroup)`Go to the homepage`}
        >
          <BrandIcon />
        </AppFooterBrandLink>
        <AppFooterNav>
          {menus?.footer?.map((menuItem, idx) => (
            <div key={idx}>
              <Link component={RouterLink} href={menuItem.url} variant="button">
                {menuItem.label}
              </Link>
            </div>
          ))}
        </AppFooterNav>
      </Container>
    </AppFooterRoot>
  )
})

export default AppFooter
