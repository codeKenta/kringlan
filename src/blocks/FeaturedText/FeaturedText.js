import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Card, CardContent, Typography, Button } from '@mui/material'
import { linkType } from '~/api/utils'

const FeaturedTextRoot = styled('section', {
  name: 'TitleHero',
  slot: 'Root',
})(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 550,
  color: theme.palette.common.white,
  [theme.breakpoints.up('md')]: {
    minHeight: 650,
  },
}))

function FeaturedText(props) {
  const { heading, headingType = 'h3', subheading, subtitle, ctaPrimary } = props

  return (
    <FeaturedTextRoot>
      <Card sx={{ maxWidth: 740, backgroundColor: 'secondary.main', pt: 10, pb: 2, px: 4 }}>
        <CardContent>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }} component={headingType} gutterBottom>
            {heading}
          </Typography>

          <Typography variant="h4" sx={{ lineHeight: 1.3, pb: 2 }} paragraph>
            {subheading}
          </Typography>

          <Typography variant="body1" paragraph sx={{ pb: 4 }}>
            {subtitle}
          </Typography>
          <Button variant="contained" sx={{ borderRadius: '8px' }}>
            {ctaPrimary.label}
          </Button>
        </CardContent>
      </Card>
    </FeaturedTextRoot>
  )
}

FeaturedText.propTypes = {
  subtitle: PropTypes.string,
  heading: PropTypes.string,
  headingType: PropTypes.string,
  subheading: PropTypes.string,
  ctaPrimary: linkType,
}

export default FeaturedText
