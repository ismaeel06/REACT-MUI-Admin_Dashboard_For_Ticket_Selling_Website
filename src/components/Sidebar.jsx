import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CelebrationIcon from '@mui/icons-material/Celebration';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const drawerWidth = 220;

export default function PermanentDrawerLeft() {

  const mainData = [

    {title:'Dashboard',icon:<DashboardIcon/>},
    {title:'Events',icon:<CelebrationIcon/>},
    {title:'Organizers',icon:<GroupsIcon/>}
  ]

  const secondaryData = [

    {index: 3,title:'Settings',icon:<SettingsIcon/>},
    {index: 4,title:'Manage Accounts',icon:<ManageAccountsIcon/>}
  ]

  const [selected,setSelected] = useState(0)

  const handleListItemClick = (index) => {
    setSelected(index);
  };


  return (

    
    <Container disableGutters sx={{position:'relative',zIndex:'1'}}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{marginTop:'100px',display:'flex',flexDirection:'column',gap:'28px'}}>
        <Typography sx={{color:'#082431',opacity:'50%',paddingLeft:'18px',fontFamily:'roboto'}}>MENU</Typography>

<List sx={{display:'flex',flexDirection:'column',gap:'18px'}}>
  {mainData.map((text, index) => (
    <NavLink style={{ textDecoration: 'none', color: '#082431' }} to={text.title === 'Dashboard' ? '/' : `/${text.title}`}>
      <ListItem key={index} disablePadding>
      <ListItemButton sx={{":hover":{bgcolor:'rgba(8, 131, 149, 0.1)'},bgcolor: selected === index ? 'rgba(8, 131, 149, 0.2)' : 'transparent','&::after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
          transition: 'all 0.5s',
          boxShadow: '0 0 10px 10px rgba(8, 131, 149, 0.1)',
        },

        '&:active::after': {
          boxShadow: '0 0 0 0 rgba(8, 131, 149, 0.1)',
          position: 'absolute',
          borderRadius: '5px',
          left: 0,
          top: 0,
          opacity: 1,
          transition: '0s',
        },}} onClick={() => handleListItemClick(index)}>
        <ListItemIcon>
          {text.icon}
        </ListItemIcon>
        <ListItemText primary={text.title} />
      </ListItemButton>
    </ListItem>
    </NavLink>
    
  ))}
</List>
<Typography sx={{color:'#082431',opacity:'50%',paddingLeft:'18px',fontFamily:'roboto'}}>SETTINGS</Typography>
<List sx={{display:'flex',flexDirection:'column',gap:'18px'}}>
  {secondaryData.map((text) => (
    <NavLink to='*' style={{ textDecoration: 'none', color: '#082431' }}>

      <ListItem key={text.index} disablePadding>
            <ListItemButton sx={{":hover":{bgcolor:'rgba(8, 131, 149, 0.1)'},bgcolor: selected === text.index ? 'rgba(8, 131, 149, 0.2)' : 'transparent','&::after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
          transition: 'all 0.5s',
          boxShadow: '0 0 10px 10px rgba(8, 131, 149, 0.1)',
        },

        '&:active::after': {
          boxShadow: '0 0 0 0 rgba(8, 131, 149, 0.1)',
          position: 'absolute',
          borderRadius: '5px',
          left: 0,
          top: 0,
          opacity: 1,
          transition: '0s',
        },}} onClick={() => handleListItemClick(text.index)}>
        <ListItemIcon>
          {text.icon}
        </ListItemIcon>
        <ListItemText primary={text.title} />
      </ListItemButton>
      </ListItem>

    </NavLink>
    
  ))}
</List>




        </Box>
        
      </Drawer>
      </Container>
  );
}
