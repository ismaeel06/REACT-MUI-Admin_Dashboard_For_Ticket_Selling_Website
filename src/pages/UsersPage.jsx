import React,{useState} from 'react'
import { Container, Box, Typography,Tabs,Tab,Grid } from '@mui/material'
import TotalActiveUsers from '../components/UsersPage/TotalActiveUsers'
import GenderRatioDoughnut from '../components/UsersPage/GenderRatioDoughnut'
import ManageUsers from '../components/UsersPage/ManageUsers'
import AddUsers from '../components/UsersPage/AddUsers'


const UsersPage = () => {

  const [active, setActive] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActive(newValue);
  };

  const DoughnutData = {
    labels: ['Male','Female'],
    datasets: [
      {
        label: 'No. Of Users',
        data: [65,35],
        backgroundColor: [
          '#37b7c3',
          '#ffb0cd',
        ],
        borderColor: [
          '#37b7c3',
          '#ffb0cd',
        ],
        borderWidth: 1,
        hoverOffset: 8,
        cutout: '75%',
      },
    ],
  };
  
  
  
  
  
  const DoughnutOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Gender Ratio in %',
        position: 'top',
        align: 'center',
        color: '#071952',
        font: {
          size: 20,
          family: 'Roboto'
      },
      },
      tooltip:{
        xAlign: 'center',
        yAlign: 'top',
      },
    },
  };


  return (
    <Container disableGutters sx={{bgcolor:'#EBF4F6',paddingLeft: '235px',paddingRight:'15px',paddingTop:'15px',position:'relative',zIndex:'0',display:'flex',flexDirection:'column',gap:'48px'}}>
          <Grid container spacing={3} sx={{ justifyContent: 'space-between', paddingRight: '20px', paddingLeft: '10px', paddingTop: '20px' }}>
            <Grid item xs={12} sm={12} md={7}>
              <TotalActiveUsers icon='/images/activeUsers.png' title='Total Active Users' image='/images/activeUsersImage.svg' />
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <GenderRatioDoughnut data={DoughnutData} options={DoughnutOptions} />
            </Grid>
          </Grid>
    
          <Grid container direction="column" gap={3}>
            <Grid item>
              <Tabs value={active} onChange={handleTabChange} aria-label="organizer tabs" TabIndicatorProps={{ style: { backgroundColor: '#088395' } }}>
                <Tab label="Manage Users" sx={{ '&.Mui-selected': { color: '#071952' } }} />
                <Tab label="Add User" sx={{ '&.Mui-selected': { color: '#071952' } }} />
              </Tabs>
            </Grid>
    
            {active === 0 && (
              <Grid item sx={{ paddingRight: '20px', paddingLeft: '10px' }}>
                <ManageUsers />
              </Grid>
            )}
    
            {active === 1 && (
              <Grid item sx={{ paddingRight: '20px', paddingLeft: '10px' }}>
                <AddUsers />
              </Grid>
            )}
          </Grid>
        </Container>
      );
    };

export default UsersPage
