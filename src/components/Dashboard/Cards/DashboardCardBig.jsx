import React from 'react'
import {Container,Box,Typography} from '@mui/material'

const DashboardCardBig = (props) => {
  return (
    <Container disableGutters sx={{display:'flex',borderRadius:'20px', width:'50%',height:'220px',bgcolor:'white'}}>

        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',gap:'10px',paddingY:'15px',paddingLeft:'10px'}}>

            <img src={props.image} alt="Icon" width={55} height={55}/>

            <Typography variant='p' sx={{fontFamily:'Roboto',color:'#071952',fontWeight:'400',fontSize:'1.5rem',":hover":{cursor: 'default' }}}>{props.value}</Typography>

            <Typography variant='p' sx={{fontFamily:'Roboto',color:'#071952',fontWeight:'300',fontSize:'1.5rem',":hover":{cursor: 'default' }}}>{props.title}</Typography>



        </Box>



        <Box>



        </Box>





    </Container>
  )
}

export default DashboardCardBig
