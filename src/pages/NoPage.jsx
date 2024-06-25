import React from 'react'
import { Box, Container,Typography } from '@mui/material'

const NoPage = () => {
  return (
    <Container disableGutters sx={{ marginLeft: '230px', width: `calc(100% - 230px)` }}>
    <Box>
      <Typography variant='h1'>Under Development</Typography>
    </Box>
 </Container>
  )
}

export default NoPage
