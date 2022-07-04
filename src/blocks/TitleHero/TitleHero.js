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
  color: theme.palette.common.white, // Use `common.white` as color is based on image not theme mode.
  [theme.breakpoints.up('md')]: {
    minHeight: 650,
  },
  background: '#130101',
}))

const TitleHeroMain = styled('div', {
  name: 'TitleHero',
  slot: 'Main',
})(({ theme }) => ({
  ...theme.mixins.verticalRhythm(2),
  ...theme.mixins.contain('sm'),
  width: 'min-content',
  paddingLeft: 'var(--cia-container-spacing)',
  paddingRight: 'var(--cia-container-spacing)',
  textAlign: 'center',
}))

const TitleHeroHeading = styled('h1', {
  name: 'TitleHeroHeading',
  slot: 'Heading',
})(() => ({
  fontSize: '5rem',
  lineHeight: '5rem',
  fontWeight: 'bolder',
}))

function TitleHero(props) {
  const { heading, subtitle, textColor } = props

  return (
    <TitleHeroRoot>
      <TitleHeroMain>
        <TitleHeroHeading sx={{ color: textColor }}>{heading.toUpperCase()}</TitleHeroHeading>

        <Typography variant="h3" component="p">
          {subtitle}
        </Typography>
      </TitleHeroMain>
    </TitleHeroRoot>
  )
}

TitleHero.propTypes = {
  subtitle: PropTypes.string,
  heading: PropTypes.string,
  textColor: PropTypes.string,
}

export default TitleHero
