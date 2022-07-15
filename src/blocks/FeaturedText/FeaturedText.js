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
  const { heading, headingType = 'h3', subtitle2, subtitle1, ctaPrimary } = props

  return (
    <FeaturedTextRoot>
      <Card
        sx={(theme) => ({
          bgcolor: theme.palette.secondary.main,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: theme.spacing(10, 4, 4),
          maxWidth: 700,
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

          <Typography variant="subtitle2" paragraph sx={{ py: 4 }}>
            {subtitle2}
          </Typography>
          <Button
            variant="contained"
            href={ctaPrimary.url}
            size="small"
            sx={{ bgcolor: 'primary.light', borderRadius: 2 }}
          >
            {ctaPrimary.label}
          </Button>
        </CardContent>
      </Card>
    </FeaturedTextRoot>
  )
}

FeaturedText.propTypes = {
  ctaPrimary: linkType,
  heading: PropTypes.string,
  headingType: PropTypes.string,
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string,
}

export default FeaturedText
