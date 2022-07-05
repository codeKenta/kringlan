import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material'

const PromoRoot = styled('section', {
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
  [theme.breakpoints.up('md')]: {
    minHeight: 650,
  },
}))

const PromoMain = styled('div', {
  name: 'Promo',
  slot: 'Main',
})(({ theme }) => ({
  ...theme.mixins.verticalRhythm(2),
  ...theme.mixins.contain('md'),
  paddingLeft: 'var(--cia-container-spacing)',
  paddingRight: 'var(--cia-container-spacing)',
}))

function Promo(props) {
  const { name, description, subtitle, imageSrc, alignContent, imageCircle } = props

  return (
    <PromoRoot>
      <PromoMain>
        <Card sx={{ display: 'flex', background: '#E9E9E9' }}>
          {alignContent === 'right' && (
            <CardMedia
              component="img"
              image={imageSrc}
              alt={name}
              sx={{
                width: '300px',
                clipPath: () => {
                  if (imageCircle) {
                    return 'circle(100px at 50%)'
                  }
                  return 0
                },
              }}
            />
          )}

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto', padding: '10%' }}>
              <Typography variant="h3" component="h1" gutterBottom>
                {name}
              </Typography>
              <Typography variant="subtitle" paragraph>
                {subtitle}
              </Typography>
              <Typography>{description}</Typography>
            </CardContent>
          </Box>
          {alignContent === 'left' && (
            <CardMedia
              component="img"
              image={imageSrc}
              alt={name}
              sx={{
                width: '300px',
                clipPath: () => {
                  if (imageCircle) {
                    return 'circle(100px at 50%)'
                  }
                  return 0
                },
              }}
            />
          )}
        </Card>
      </PromoMain>
    </PromoRoot>
  )
}

Promo.propTypes = {
  alignContent: PropTypes.string,
  imageCircle: PropTypes.bool,
  name: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Promo
