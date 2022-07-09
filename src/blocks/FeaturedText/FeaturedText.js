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
  const { heading, headingType = 'h3', subtitle2, subtitle1, ctaPrimary, ctaSecondary } = props

  return (
    <FeaturedTextRoot>
      <Card
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: theme.palette.secondary.main,
          pt: theme.spacing(10),
          pb: theme.spacing(2),
          px: theme.spacing(4),
          mx: theme.spacing(4),
        })}
      >
        <CardContent>
          <Typography
            variant="h3"
            sx={{ fontSize: '2rem', fontWeight: 'bold', pb: 2 }}
            component={headingType}
            gutterBottom
          >
            {heading}
          </Typography>

          <Typography variant="h4" paragraph gutterBottom sx={{ lineHeight: 1.3 }}>
            {subtitle1}
          </Typography>

          <Typography variant="subtitle1" paragraph sx={{ py: 2 }}>
            {subtitle2}
          </Typography>
          <Button variant="contained" size="small" sx={{ borderRadius: 2 }}>
            {ctaPrimary.label}
          </Button>
        </CardContent>
      </Card>
      <Card
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: theme.palette.primary.light,
          bgcolor: theme.palette.primary.main,
          pt: theme.spacing(10),
          pb: theme.spacing(2),
          px: theme.spacing(4),
        })}
      >
        <CardContent>
          <Typography
            variant="h3"
            sx={{ fontSize: '2rem', fontWeight: 'bold', pb: 2 }}
            component={headingType}
            gutterBottom
          >
            {heading}
          </Typography>

          <Typography variant="h4" paragraph gutterBottom sx={{ lineHeight: 1.3 }}>
            {subtitle1}
          </Typography>

          <Typography variant="subtitle1" paragraph sx={{ py: 2 }}>
            {subtitle2}
          </Typography>

          <Button
            variant="contained"
            size="small"
            sx={(theme) => ({
              bgcolor: theme.palette.primary.light,
              borderRadius: 2,
              color: theme.palette.primary.main,
            })}
          >
            {ctaSecondary.label}
          </Button>
        </CardContent>
      </Card>
    </FeaturedTextRoot>
  )
}

FeaturedText.propTypes = {
  ctaPrimary: linkType,
  ctaSecondary: linkType,
  heading: PropTypes.string,
  headingType: PropTypes.string,
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string,
}

export default FeaturedText
