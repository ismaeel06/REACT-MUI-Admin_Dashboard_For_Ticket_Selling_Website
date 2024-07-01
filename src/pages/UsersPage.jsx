import React from 'react'
import { Container, Box, Typography } from '@mui/material'

const UsersPage = () => {
  return (
    <Container disableGutters sx={{bgcolor:'#EBF4F6',paddingLeft: '230px',display:'flex',flexDirection:'column',gap:'50px'}}>
        <Box>
            <Typography variant='h1'>Users Page</Typography>
        </Box>
    </Container>
  )
}

export default UsersPage
