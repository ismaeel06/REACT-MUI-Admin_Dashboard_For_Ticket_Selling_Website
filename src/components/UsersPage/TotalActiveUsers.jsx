import React,{useContext} from 'react'
import { Box, Container,Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const TotalActiveUsers = (props) => {

   const numUsers = useSelector((state) => state.activeUsers.count);

  return (


<Container disableGutters sx={{display:'flex',borderRadius:'20px', width:'55%',height:'260px',bgcolor:'white',justifyContent:'space-between',paddingX:'15px'}}>
    
          <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',gap:'10px',paddingY:'15px'}}>

            <img src={props.icon} alt="Icon" width={75} height={75}/>

            <Typography variant='p' sx={{fontFamily:'Roboto',color:'#071952',fontWeight:'400',fontSize:'1.5rem',":hover":{cursor: 'default' }}}>{numUsers}</Typography>

            <Typography variant='p' sx={{fontFamily:'Roboto',color:'#071952',fontWeight:'300',fontSize:'1.5rem',":hover":{cursor: 'default' }}}>{props.title}</Typography>

          </Box>



        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>

          <img src={props.image} alt="CardImage" height={210} width={248} />



        </Box>



  </Container>
  )
}

export default TotalActiveUsers
