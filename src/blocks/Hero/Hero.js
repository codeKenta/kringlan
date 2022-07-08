import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Button, Typography } from '@mui/material'
import { Media, MediaReveal } from '@noaignite/oui'
import { RouterLink } from '~/containers'
import { linkType, mediaType } from '~/api/utils'

const HeroRoot = styled('section', {
  name: 'Hero',
  slot: 'Root',
})(({ theme }) => ({
  background: 'radial-gradient(rgba(0,0,0,0.06), rgba(0,0,0,0.69))',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 550,
  color: theme.palette.common.white, // Use `common.white` as color is based on image not theme mode.
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    minHeight: 650,
  },
}))

const HeroMediaReveal = styled(MediaReveal, {
  name: 'Hero',
  slot: 'MediaReveal',
})(({ theme }) => ({
  ...theme.mixins.absolute(0),
  zIndex: -1,
  '& *:not(style)': {
    height: '100%',
  },
}))

const HeroMain = styled('div', {
  name: 'Hero',
  slot: 'Main',
})(({ theme }) => ({
  ...theme.mixins.verticalRhythm(2),
  ...theme.mixins.contain('md'),
  paddingLeft: 'var(--cia-container-spacing)',
  paddingRight: 'var(--cia-container-spacing)',
  color: theme.palette.contrastText,
}))

const HeroButton = styled(Button, {
  name: 'Hero',
  slot: 'Button',
})(({ theme }) => ({
  margin: theme.spacing(0, 2.5),
  borderRadius: 8,
}))

function Hero(props) {
  const {
    heading,
    subheading,
    mediaProps,
    ctaPrimary,
    ctaSecondary,
    renderIndex,
    headingType = 'h1',
    subheadingType = 'h2',
  } = props

  return (
    <HeroRoot>
      {mediaProps && (
        <HeroMediaReveal>
          <Media
            {...(mediaProps?.component === 'video'
              ? {
                  autoPlay: true,
                  muted: true,
                  loop: true,
                  playsInline: true,
                }
              : { alt: '' })}
            {...mediaProps}
            priority={renderIndex === 0}
          />
        </HeroMediaReveal>
      )}

      <HeroMain>
        <Typography
          variant="h1"
          component={headingType}
          sx={(theme) => ({
            ...theme.typography.h1, // dunno why this makes the text bigger, shouldnt it already be applied?
          })}
        >
          {heading.toUpperCase()}
        </Typography>

        {subheading && (
          <Typography
            component={subheadingType}
            variant="h3"
            sx={(theme) => ({
              display: 'block',
              ...theme.mixins.contain('sm'),
              padding: theme.spacing(2.5),
              lineHeight: '3.5rem',
            })}
          >
            {subheading}
          </Typography>
        )}

        {ctaPrimary && ctaPrimary.url && ctaPrimary.label && (
          <HeroButton
            component={RouterLink}
            href={ctaPrimary.url}
            variant="contained"
            color="primary"
            sx={{
              fontWeight: 'bolder',
            }}
          >
            {ctaPrimary.label}
          </HeroButton>
        )}

        {ctaSecondary && ctaSecondary.url && ctaSecondary.label && (
          <HeroButton
            component={RouterLink}
            href={ctaSecondary.url}
            variant="contained"
            color="secondary"
            sx={{
              fontWeight: 'bolder',
            }}
          >
            {ctaSecondary.label}
          </HeroButton>
        )}
      </HeroMain>
    </HeroRoot>
  )
}

Hero.propTypes = {
  mediaProps: mediaType,
  renderIndex: PropTypes.number.isRequired,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  ctaPrimary: linkType,
  ctaSecondary: linkType,
  headingType: PropTypes.string,
  subheadingType: PropTypes.string,
}

export default Hero
