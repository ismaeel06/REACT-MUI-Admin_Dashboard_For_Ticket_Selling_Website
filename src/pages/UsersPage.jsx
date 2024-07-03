import React,{useState} from 'react'
import { Container, Box, Typography,Tabs,Tab } from '@mui/material'
import TotalActiveUsers from '../components/UsersPage/TotalActiveUsers'
import GenderRatioDoughnut from '../components/UsersPage/GenderRatioDoughnut'
import ManageUsers from '../components/UsersPage/ManageUsers'
import AddUsers from '../components/UsersPage/AddUsers'
import { UsersDataProvider } from '../context/UsersDataContext'


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
    <Container disableGutters sx={{bgcolor:'#EBF4F6',paddingLeft: '230px',display:'flex',flexDirection:'column',gap:'50px'}}>
        <Box sx={{display:'flex',gap:'20px',justifyContent:'space-between',paddingRight:'20px',paddingLeft:'10px',paddingTop:'20px'}}>
          <TotalActiveUsers icon='/images/activeUsers.png' title='Total Active Users' image='/images/activeUsersImage.svg'/>
          <GenderRatioDoughnut data = {DoughnutData} options ={DoughnutOptions}/>
        </Box>


        <Box sx={{display:'flex',flexDirection:'column',gap:'30px'}}>

          <Tabs value={active} onChange={handleTabChange} aria-label="organizer tabs" TabIndicatorProps={{style:{backgroundColor:'#088395'}}}>
            <Tab label="Manage Users" sx={{'&.Mui-selected': { color: '#071952' }}}/>
            <Tab label="Add User" sx={{'&.Mui-selected': { color: '#071952' }}}/>
          </Tabs>
          <UsersDataProvider>
          {active === 0 && (

            <Box sx={{ paddingRight: '20px', paddingLeft: '10px' }}>
            <ManageUsers />
            </Box>

          )}
          {active === 1 && (
        
            <Box sx={{ paddingRight: '20px', paddingLeft: '10px' }}>
            <AddUsers />
            </Box>
        
          )}
          </UsersDataProvider>
        
      </Box>


    </Container>
  )
}

export default UsersPage
