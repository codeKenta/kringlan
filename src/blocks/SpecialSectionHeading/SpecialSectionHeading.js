import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'
import useTheme from '@mui/material/styles/useTheme'

const SpecialSectionRoot = styled('section', {
  name: 'SpecialSectionHeading',
  slot: 'Root',
})(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 222,
  background: theme.palette.primary.dark,
  color: theme.palette.text.secondary,
}))

function SpecialSectionHeading(props) {
  const { heading, headingType = 'h2' } = props

  const theme = useTheme()

  return (
    <SpecialSectionRoot>
      <Typography
        component={headingType}
        sx={{
          ...theme.typography.h1,
          paddingLeft: 'var(--cia-container-spacing)',
          paddingRight: 'var(--cia-container-spacing)',
          fontFamily: theme.typography.fontFamilyTertiary,
          fontSize: '7rem',
        }}
      >
        {heading}
      </Typography>
    </SpecialSectionRoot>
  )
}

SpecialSectionHeading.propTypes = {
  heading: PropTypes.string,
  headingType: PropTypes.string,
}

export default SpecialSectionHeading
