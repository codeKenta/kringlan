import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Media } from '@noaignite/oui'
import { Box, Typography, Card, CardContent, Button } from '@mui/material'
import { mediaType, linkType } from '~/api/utils'

const PuffsRoot = styled('section', {
  name: 'Puffs',
  slot: 'Root',
})(({ theme }) => ({
  padding: theme.spacing(5, 0),
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 550,
  color: theme.palette.text.primary,
  [theme.breakpoints.up('md')]: {
    minHeight: 650,
  },
}))

const PuffsMain = styled('div', {
  name: 'Puffs',
  slot: 'Main',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: theme.spacing(3),
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}))

const Avatar = styled('div')(({ theme }) => ({
  padding: theme.spacing(0),
  background: `radial-gradient(109.29% 109.29% at 49.88% -45.06%, #000000 0%, #BCB7B7 0.01%, #000000 0.02%, #BCB7B7 99.99%, #BCB7B7 100%),
  linear-gradient(0deg, rgba(196, 196, 196, 0), rgba(196, 196, 196, 0))
  `, // Border background
  borderRadius: '50%',
  height: 150,
  width: 150,
  margin: '0 auto',
}))

function Puffs(props) {
  const { heading, headingType = 'h2', entries } = props

  return (
    <PuffsRoot>
      <Typography variant="h3" component={headingType} sx={{ fontWeight: 'bold' }}>
        {heading}
      </Typography>
      <PuffsMain>
        {entries?.map((item, idx) => (
          <Card
            key={idx}
            sx={{
              alignItems: 'center',
              py: 3,
              maxWidth: 350,
              mx: 1,
              justifyContent: 'center',
              '& img': {
                p: '4px', // Adjusts the size of the border
                aspectRatio: '1/1',
                borderRadius: '50%',
                margin: '0 auto',
              },
            }}
          >
            <Avatar>{item.mediaProps && <Media {...item.mediaProps} />}</Avatar>

            <Box>
              <CardContent sx={{ py: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Typography paragraph>{item.excerpt}</Typography>
                <Button
                  variant="contained"
                  href={item.ctaPrimary?.url}
                  size="small"
                  sx={{ bgcolor: 'primary.light', borderRadius: 2 }}
                >
                  {item.ctaPrimary?.label}
                </Button>
              </CardContent>
            </Box>
          </Card>
        ))}
      </PuffsMain>
    </PuffsRoot>
  )
}

const entryType = PropTypes.shape({
  title: PropTypes.string,
  excerpt: PropTypes.string,
  ctaPrimary: linkType,
  mediaProps: mediaType,
})

Puffs.propTypes = {
  entries: PropTypes.arrayOf(entryType),
  heading: PropTypes.string,
  headingType: PropTypes.string,
}

export default Puffs
