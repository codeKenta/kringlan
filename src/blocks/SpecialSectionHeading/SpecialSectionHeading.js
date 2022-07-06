import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'

const SpecialSectionRoot = styled('section', {
  name: 'SpecialSectionHeading',
  slot: 'Root',
})(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 222,
  color: '#C90000',
  background: '#130101',
}))

const SpecialSectionHeader = styled('h1', {
  name: 'SpecialSectionHeading',
  slot: 'Main',
})(({ theme }) => ({
  ...theme.typography.h1,
  paddingLeft: 'var(--cia-container-spacing)',
  paddingRight: 'var(--cia-container-spacing)',
  fontFamily: 'Benguiat Std',
  fontSize: '7rem',
}))

function SpecialSectionHeading(props) {
  const { heading } = props

  return (
    <SpecialSectionRoot>
      <SpecialSectionHeader>{heading}</SpecialSectionHeader>
    </SpecialSectionRoot>
  )
}

SpecialSectionHeading.propTypes = {
  heading: PropTypes.string,
}

export default SpecialSectionHeading
