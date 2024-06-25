import { Box, Container,Typography } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const AppBar = () => {
  return (
    <Container disableGutters sx={{display:'flex',justifyContent:'space-between',height:'60px',borderBottom:'1px solid #1C4E80',position:'relative',zIndex:'2',paddingX:'18px'}}>
        <Box sx={{alignItems:'center',display:'flex',gap:'6px'}}>

          <Box sx={{display:'flex',borderRadius:'50%',bgcolor:'#088395',width:'35px',height:'35px',alignItems:'center',justifyContent:'center'}}>
            <Typography variant='p' sx={{textAlign:'center',color:'white',fontFamily:'roboto'}}>L</Typography>
          </Box>
          <Box>
            <Typography variant='p' sx={{color:'#088395',fontSize:'14px'}}>Logo</Typography>
          </Box>
          
        </Box>


        <Box sx={{display:'flex',gap:'56px',alignItems:'center'}}>

          <Box sx={{position:'relative',top:'3.5px'}}>
            <NotificationsIcon sx={{color:'#088395'}} fontSize='medium'/>
          </Box>


          <Box sx={{display:'flex',gap:'28px',alignItems:'center'}}>

            <Box sx={{width:'38px',height:'38px',bgcolor:'#088395',borderRadius:'50%'}}></Box>

            <Typography variant='p' sx={{textAlign:'center',color:'#088395',fontFamily:'roboto'}}>User</Typography>

            <Box>
            <ArrowDownIcon sx={{color:'#088395'}}/>
            </Box>

          </Box>


        </Box>


    </Container>
  )
}

export default AppBar
