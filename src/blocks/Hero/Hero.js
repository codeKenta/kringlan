import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Button } from '@mui/material'
import { Media, MediaReveal } from '@noaignite/oui'
import { RouterLink } from '~/containers'
import { linkType, mediaType } from '~/api/utils'

const HeroRoot = styled('section', {
  name: 'Hero',
  slot: 'Root',
})(({ theme }) => ({
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
}))

const HeroHeading = styled('h1', {
  name: 'Hero',
  slot: 'Heading',
})(({ theme }) => ({
  ...theme.typography.h1,
  margin: 0,
  textTransform: 'uppercase',
  fontWeight: '700',
}))

const HeroExcerpt = styled('p', {
  name: 'Hero',
  slot: 'Excerpt',
})(({ theme }) => ({
  ...theme.typography.h3,
  ...theme.mixins.contain('sm'),
  padding: theme.spacing(2.5),
  lineHeight: '60px',
}))

const HeroButton = styled(Button, {
  name: 'Hero',
  slot: 'Button',
})(({ theme }) => ({
  // Makes entire Hero block clickable.
  position: 'static',
  '&:before': {
    ...theme.mixins.absolute(0),
    content: '""',
  },
  margin: theme.spacing(0, 2.5),
  borderRadius: '8px',
}))

function Hero(props) {
  const { heading, excerpt, mediaProps, ctaPrimary, ctaSecondary, renderIndex } = props

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
        <HeroHeading>{heading}</HeroHeading>

        {excerpt && <HeroExcerpt>{excerpt}</HeroExcerpt>}

        {ctaPrimary && ctaPrimary.url && ctaPrimary.label && (
          <HeroButton
            component={RouterLink}
            href={ctaPrimary.url}
            variant="contained"
            sx={{
              // Testing purposes, dont be alarmed.
              backgroundColor: '#000',
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
            sx={{
              // Testing purposes, dont be alarmed.
              backgroundColor: '#fff',
              color: '#000',
              fontWeight: 'bolder',
              borderWidth: '0',
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
  excerpt: PropTypes.array,
  ctaPrimary: linkType,
  ctaSecondary: linkType,
}

export default Hero
