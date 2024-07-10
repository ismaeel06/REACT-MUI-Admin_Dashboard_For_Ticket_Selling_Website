import React,{useState} from 'react'
import { Box, Container,Typography,Grid,Paper } from '@mui/material'
import DashboardCardBig from '../components/Dashboard/Cards/DashboardCardBig'
import DashboardCardSmall from '../components/Dashboard/Cards/DashboardCardSmall'
import TicketSellDonutChart from '../components/Dashboard/Cards/DashboardTicketSellDonutChart'
import TicketSellGraph from '../components/Dashboard/Cards/DashboardTicketSellGraph'
import UpcomingEvents from '../components/Dashboard/DashboardUpcomingEvents'

const DashboardPage = () => {

  const [numUsers,setNumUsers] = useState(0);


const DoughnutData = {
  labels: ['Sold','Remaining'],
  datasets: [
    {
      label: 'No. Of Tickets',
      data: [60,40],
      backgroundColor: [
        '#37b7c3',
        '#F7685B',
      ],
      borderColor: [
        '#37b7c3',
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
      text: 'Tickets Sold This Month',
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

const LineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Tickets Sold',
      data: [1012, 1987, 2042, 1980, 1720, 1653, 1328],
      fill: false,
      backgroundColor: '#37b7c3',
      borderColor: '#37b7c3',
      tension: 0.3,
    },
  ],
};

const LineOptions = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Tickets Sold By Month',
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
  scales: {
    x: {
      title: {
        display: true,
        text: 'Month',
        color: '#071952',
        font: {
          size: 15,
          family: 'Roboto'
      },
      },
    },
    y: {
      title: {
        display: true,
        text: 'Tickets Sold',
        color: '#071952',
        font: {
          size: 15,
          family: 'Roboto'
      },
    },
    grid: {
      //remove grid lines
      display: false,
    },
    },
  },
};

const TotalUserData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Total Users',
      data: [12000, 22000, 28000, 33000, 33500, 34600, 36000],
      fill: false,
      backgroundColor: '#37b7c3',
      borderColor: '#37b7c3',
      tension: 0.3,
    },
  ],
};

const TotalUserOptions = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip:{
      xAlign: 'center',
      yAlign: 'top',
    },
  },
  scales: {
    x: {
      title: {
        display: false,
    },
    grid: {
      //remove grid lines
      display: false,
    },
    ticks: {
      display: false,
    },
    display: false,
  },
    y: {
      title: {
        display: false,
    },
    grid: {
      //remove grid lines
      display: false,
    },
    ticks: {
      display: false,
    },
    display: false,
    },
  },
};

const TotalRevenueData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Total Revenue',
      data: [10000, 12000, 20000, 22000, 9000, 7000, 6000],
      fill: false,
      backgroundColor: '#37b7c3',
      borderColor: '#37b7c3',
      tension: 0.3,
    },
  ],
};

const TotalRevenueOptions = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip:{
      xAlign: 'center',
      yAlign: 'top',
    },
  },
  scales: {
    x: {
      title: {
        display: false,
      },
      grid: {
        //remove grid lines
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
      display: false,
    },
    y: {
      title: {
        display: false,
    },
    grid: {
      //remove grid lines
      display: false,
      drawBorder:'false'
    },
    ticks: {
      display: false,
  },
  display: false,
    
    },
  },
};

  return(

<Container disableGutters sx={{bgcolor:'#EBF4F6',paddingLeft: '235px',paddingRight:'15px',paddingY:'30px',position:'relative',zIndex:'0'}}>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <DashboardCardBig image='/images/TotalUsers.svg' title='Total Users' data = {TotalUserData} options = {TotalUserOptions}/>
      </Grid>
      <Grid item xs={12} md={6}>
        <DashboardCardBig image='/images/TotalRevenue.svg' title='Total Revenue' value='86,000' data = {TotalRevenueData} options = {TotalRevenueOptions}/>
      </Grid>
      <Grid item xs={12} md={4}>
        <DashboardCardSmall image='/images/EventsOrganized.svg' title={<p style={{margin:'0',lineHeight:'1'}}>Events<br/>Organized</p>} value='116' />
      </Grid>
      <Grid item xs={12} md={4}>
        <DashboardCardSmall image='/images/TotalEventOrganizers.svg' title={<p style={{margin:'0',lineHeight:'1'}}>Total Events<br/>Organizers</p>} value='26' />
      </Grid>
      <Grid item xs={12} md={4}>
        <DashboardCardSmall image='/images/TotalTicketsSold.svg' title={<p style={{margin:'0',lineHeight:'1'}}>Total Tickets<br/>Sold</p>} value='42,000' />
      </Grid>
      <Grid item xs={12} md={8}>
      <Typography variant='h6' sx={{ paddingBottom: '5px', fontFamily: 'Roboto', color: '#071952', fontSize: '1.8rem' }}>Tickets Sold By Month</Typography>
        <TicketSellGraph data = {LineData} options = {LineOptions}/>
      </Grid>
      <Grid item xs={12} md={4} sx={{marginTop:'51px'}}>
        <TicketSellDonutChart data = {DoughnutData} options ={DoughnutOptions}/>
      </Grid>
      <Grid item xs={12}>
        <UpcomingEvents />
      </Grid>
    </Grid>
  </Container>

  )

}

export default DashboardPage
