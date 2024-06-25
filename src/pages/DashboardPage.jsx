import React from 'react'
import { Box, Container,Typography } from '@mui/material'

const DashboardPage = () => {
  return (
   <Container disableGutters sx={{ marginLeft: '230px', width: `calc(100% - 230px)` }}>
      <Box>
        <Typography variant='h1'>Dashboard</Typography>
      </Box>
   </Container>
  )
}

export default DashboardPage
