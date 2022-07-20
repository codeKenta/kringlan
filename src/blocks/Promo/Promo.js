import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Media } from '@noaignite/oui'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { mediaType } from '~/api/utils'

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

const Avatar = styled('div')(({ theme }) => ({
  flex: '1 0 auto',
  width: 250,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 150,
  },
}))

function Promo(props) {
  const { name, description, subtitle, mediaProps, alignContent = 'left', imageCircle } = props

  return (
    <PromoRoot>
      <PromoMain>
        <Card
          sx={(theme) => ({
            display: 'flex',
            bgcolor: 'secondary.light',
            flexDirection: alignContent === 'right' ? 'row-reverse' : 'row',
            ...(imageCircle && {
              alignItems: 'center',
            }),
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column-reverse',
              textAlign: 'center',
            },
            '& picture, img, video': {
              height: '100%',
            },
          })}
        >
          <Box>
            <CardContent sx={{ padding: '10%' }}>
              <Typography variant="h3" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                {name}
              </Typography>
              <Typography variant="subtitle" paragraph>
                {subtitle}
              </Typography>
              <Typography>{description}</Typography>
            </CardContent>
          </Box>
          <Avatar>
            {mediaProps?.src && (
              <Media
                {...(mediaProps?.component === 'video'
                  ? {
                      autoPlay: true,
                      muted: true,
                      loop: true,
                      playsInline: true,
                    }
                  : { alt: { name } })}
                {...mediaProps}
                sx={(theme) => ({
                  flex: '1 0 auto',
                  width: 250,
                  ...(mediaProps?.component === 'video' &&
                    imageCircle && {
                      objectFit: 'fill',
                      borderRadius: '50%',
                    }),
                  [theme.breakpoints.down('sm')]: {
                    width: '100%',
                  },
                  '& picture, img, video': {
                    height: '100%',
                    ...(imageCircle && {
                      objectFit: 'cover',
                      borderRadius: '50%',
                      width: 150,
                      height: 150,
                      margin: '0 auto',
                      border: '5px solid salmon',
                    }),
                    // objectFit: imageCircle ? 'contain' : 'cover',
                    // clipPath: imageCircle ? `circle(${circleSettings})` : 0,
                    [theme.breakpoints.down('sm')]: {
                      height: 150,

                      objectPosition: imageCircle ? 'top' : '0% 10%',
                    },
                  },
                })}
              />
            )}
          </Avatar>
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
  mediaProps: mediaType,
}

export default Promo
