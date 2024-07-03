import { Box, Container,Typography,IconButton,Menu,MenuItem,Button } from '@mui/material'
import { NavLink } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';

const AppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container disableGutters sx={{display:'flex',justifyContent:'space-between',height:'60px',borderBottom:'1px solid #1C4E80',position:'sticky',top:'0px',zIndex:'2',paddingX:'18px',bgcolor:'rgba(255, 255, 255, 0.9)'}}>
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
            <IconButton>
              <NotificationsIcon sx={{color:'#088395'}} fontSize='medium'/>
            </IconButton>
          </Box>


          <Box sx={{display:'flex',gap:'28px',alignItems:'center'}}>

            <Box sx={{width:'38px',height:'38px',bgcolor:'#088395',borderRadius:'50%'}}></Box>

            <Typography variant='p' sx={{textAlign:'center',color:'#088395',fontFamily:'roboto'}}>User</Typography>

            <Box>
              <IconButton onClick={handleClick}>
                <ArrowDownIcon sx={{color:'#088395'}}/>
              </IconButton>
              <Menu
              id="user-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'user-button',
              }}
              PaperProps={{
                style: {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjust the alpha value for translucency
                },
              }}
              >
              <MenuItem onClick={handleClose} sx={{bgcolor:'transparent',borderRadius:'10px'}}>
              <NavLink to={'/Settings'}>
                <Button sx={{color:'#088395',bgcolor:'transparent'}} startIcon={<SettingIcon/>}>Settings</Button>
              </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{bgcolor:'transparent',borderRadius:'10px'}}>
              <NavLink>
                <Button sx={{color:'#088395',bgcolor:'transparent'}} startIcon={<LogoutIcon/>}>LogOut</Button>
              </NavLink>
              </MenuItem>
            </Menu>
            </Box>

          </Box>


        </Box>


    </Container>
  )
}

export default AppBar
