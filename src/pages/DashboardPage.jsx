import React from 'react'
import { Box, Container,Typography } from '@mui/material'
import DashboardCardBig from '../components/Dashboard/Cards/DashboardCardBig'
import DashboardCardSmall from '../components/Dashboard/Cards/DashboardCardSmall'
import TicketSellDonutChart from '../components/Dashboard/Cards/DashboardTicketSellDonutChart'
import TicketSellGraph from '../components/Dashboard/Cards/DashboardTicketSellGraph'
import UpcomingEvents from '../components/Dashboard/DashboardUpcomingEvents'
import { color } from 'chart.js/helpers'

const DashboardPage = () => {

const DoughnutData = {
  labels: ['Sold','Remaining'],
  datasets: [
    {
      label: 'Tickets Sold',
      data: [60,40],
      backgroundColor: [
        '#088395',
        '#F7685B',
      ],
      borderColor: [
        '#088395',
        '#F7685B',
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
      text: 'Tickets Sold',
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

    <Box sx={{display:'flex',flexDirection:'column',gap:'20px',paddingRight:'10px',paddingLeft:'10px'}}>

    <Box sx={{display:'flex',justifyContent:'space-between',paddingRight:'10px',paddingTop:'20px',gap:'20px'}}> 

      <DashboardCardBig image='/images/TotalUsers.svg' title='Total Users' value='36,000'/>

      <DashboardCardBig image='/images/TotalRevenue.svg' title='Total Revenue' value='86,000' />

    </Box>

    <Box sx={{display:'flex',justifyContent:'space-between',paddingRight:'10px',paddingTop:'15px',gap:'20px'}}>

      <DashboardCardSmall image='/images/EventsOrganized.svg' title={<p style={{margin:'0',lineHeight:'1'}}>Events<br/>Organized</p>} value='116' />
      <DashboardCardSmall image='/images/TotalEventOrganizers.svg' title={<p style={{margin:'0',lineHeight:'1'}}>Total Events<br/>Organizers</p>} value='26' />
      <DashboardCardSmall image='/images/TotalTicketsSold.svg' title={<p style={{margin:'0',lineHeight:'1'}}>Total Tickets<br/>Sold</p>} value='42,000' />

    </Box>


    </Box>



    <Box sx={{display:'flex',gap:'20px',justifyContent:'space-between',paddingRight:'20px',paddingLeft:'10px'}}>

      <TicketSellGraph />

      <TicketSellDonutChart data = {DoughnutData} options ={DoughnutOptions}/>

    </Box>

    <Box sx={{paddingRight:'20px',paddingLeft:'10px'}}>
      <UpcomingEvents />
    </Box>

    
    
      
   </Container>
  )
}

export default DashboardPage
