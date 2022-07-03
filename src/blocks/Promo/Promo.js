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
  const { name, description, race, type, avatar, aligncontent } = props

  return (
    <PromoRoot>
      <PromoMain>
        <Card sx={{ display: 'flex', background: '#E9E9E9' }}>
          {aligncontent !== 'left' && (
            <CardMedia
              component="img"
              sx={{
                width: '300px',
              }}
              image={avatar}
              alt="Avatar"
            />
          )}

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto', padding: '10%' }}>
              <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: '700' }}>
                {name}
              </Typography>
              <Typography variant="subtitle" paragraph>
                {race} / {type}
              </Typography>
              <p>{description}</p>
            </CardContent>
          </Box>
          {aligncontent !== 'right' && (
            <CardMedia component="img" sx={{ width: '300px' }} image={avatar} alt="Avatar" />
          )}
        </Card>
      </PromoMain>
    </PromoRoot>
  )
}

Promo.propTypes = {
  aligncontent: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  race: PropTypes.string,
  type: PropTypes.string,
  avatar: PropTypes.string,
}

export default Promo
