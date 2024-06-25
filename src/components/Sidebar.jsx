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

const drawerWidth = 220;

export default function PermanentDrawerLeft() {

  const mainData = [

    {title:'Dashboard',icon:<DashboardIcon/>},
    {title:'Events',icon:<CelebrationIcon/>},
    {title:'Organizers',icon:<GroupsIcon/>}
  ]

  const secondaryData = [

    {title:'Settings',icon:<SettingsIcon/>},
    {title:'Manage Accounts',icon:<ManageAccountsIcon/>}
  ]


  return (

    
    <Container disableGutters sx={{position:'relative',zIndex:'0'}}>
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
    <NavLink style={{ textDecoration: 'none', color: 'black' }} to={text.title === 'Dashboard' ? '/' : `/${text.title}`}>
      <ListItem key={index} disablePadding>
      <ListItemButton>
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
  {secondaryData.map((text, index) => (
    <NavLink to='*' style={{ textDecoration: 'none', color: 'black' }}>

      <ListItem key={index} disablePadding>
            <ListItemButton>
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
