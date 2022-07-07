import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'

const TitleHeroRoot = styled('section', {
  name: 'TitleHero',
  slot: 'Root',
})(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 550,
  color: theme.palette.common.white,
  [theme.breakpoints.up('md')]: {
    minHeight: 650,
  },
  background: theme.palette.primary.dark,
}))

const TitleHeroMain = styled('div', {
  name: 'TitleHero',
  slot: 'Main',
})(({ theme }) => ({
  ...theme.mixins.verticalRhythm(2),
  ...theme.mixins.contain('md'),
  width: 'min-content',
  paddingLeft: 'var(--cia-container-spacing)',
  paddingRight: 'var(--cia-container-spacing)',
  textAlign: 'center',
}))

function TitleHero(props) {
  const { heading, headingType = 'h3', subtitle, textColor } = props

  return (
    <TitleHeroRoot>
      <TitleHeroMain>
        <Typography
          variant="h1"
          component={headingType}
          sx={(theme) => ({
            color: !textColor ? 'text.secondary' : textColor,
            lineHeight: '6.5rem',
            fontFamily: theme.typography.fontFamilyTertiary,
            fontSize: '7rem',
            fontWeight: 'bold',
          })}
        >
          {heading.toUpperCase()}
        </Typography>

        <Typography variant="h3" paragraph>
          {subtitle}
        </Typography>
      </TitleHeroMain>
    </TitleHeroRoot>
  )
}

TitleHero.propTypes = {
  subtitle: PropTypes.string,
  heading: PropTypes.string,
  headingType: PropTypes.string,
  textColor: PropTypes.string,
}

export default TitleHero
