import React from 'react'
import {Container,Box,Typography} from '@mui/material'

const EventsCardBig = (props) => {
  return (
    <Container disableGutters sx={{display:'flex',borderRadius:'20px', width:'50%',height:'220px',bgcolor:'white',justifyContent:'space-between',paddingX:'15px'}}>

        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',gap:'10px',paddingY:'15px'}}>

            <img src={props.icon} alt="Icon" width={55} height={55}/>

            <Typography variant='p' sx={{fontFamily:'Roboto',color:'#071952',fontWeight:'400',fontSize:'1.5rem',":hover":{cursor: 'default' }}}>{props.value}</Typography>

            <Typography variant='p' sx={{fontFamily:'Roboto',color:'#071952',fontWeight:'300',fontSize:'1.5rem',":hover":{cursor: 'default' }}}>{props.title}</Typography>

        </Box>



        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>

          <img src={props.image} alt="CardImage" height={210} width={248} />



        </Box>





    </Container>
  )
}

export default EventsCardBig
