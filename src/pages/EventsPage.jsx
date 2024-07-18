import React,{useState} from 'react'
import { Box, Container,Typography,Grid,Tab,Tabs } from '@mui/material'
import EventsCardBig from '../components/EventPage/Cards/EventsCardBig'
import EventsListedGraph from '../components/EventPage/Cards/EventsListedGraph'
import RevenuePie from '../components/EventPage/Cards/RevenuePie'
import EventRequests from '../components/EventPage/EventRequests'
import UpcomingEvents from '../components/EventPage/UpcomingEvents'

const EventsPage = () => {

  const [active, setActive] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActive(newValue);
  };


  const LineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'No. of Events',
        data: [12, 10, 16, 14, 11, 8, 5],
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
        text: 'Events Listed By Month',
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


  const PieData = {
    labels: ['Sports','Music','Food','Exhibition','Others'],
    datasets: [
      {
        label: 'Revenue By Genre',
        data: [25, 30, 20, 15, 10],
        backgroundColor: [
          '#EF9234',
          '#4CB140',
          '#F0AB00',
          '#37B7C3',
          '#005F60',
        ],
        borderColor: [
          '#002F5D',
        ],
        borderWidth: 1,
        hoverOffset: 8,
      },
    ],
  };
  
  
  
  
  
  const PieOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Revenue per Genre',
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
    <Container disableGutters sx={{display:'flex',flexDirection:'column',bgcolor:'#EBF4F6',paddingLeft: '235px',paddingRight:'15px',paddingTop:'15px',position:'relative',zIndex:'0',gap:'3rem'}}>
      <Grid container spacing={4} >
        
        <Grid item xs={12} md={6}>
          <EventsCardBig icon='/images/EventsApprovedIcon.svg' title='Events Approved' value='15' image='/images/EventsApproved.svg' />
        </Grid>

        <Grid item xs={12} md={6}>
          <EventsCardBig icon='/images/EventsPendingIcon.svg' title='Events Pending' value='12' image='/images/EventsPending.svg' />
        </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant='h6' sx={{ paddingBottom: '5px', fontFamily: 'Roboto', color: '#071952', fontSize: '1.8rem' }}>Events Listed By Month</Typography>
            <EventsListedGraph data={LineData} options={LineOptions} />
          </Grid>

          <Grid item xs={12} md={4} sx={{marginTop:'51px'}}>
            <RevenuePie data={PieData} options={PieOptions} />
          </Grid>
      </Grid>

      <Grid container direction="column" gap={3}>
            <Grid item>
              <Tabs value={active} onChange={handleTabChange} aria-label="organizer tabs" TabIndicatorProps={{ style: { backgroundColor: '#088395' } }}>
                <Tab label="Event Requests" sx={{ '&.Mui-selected': { color: '#071952' } }} />
                <Tab label="Upcoming Events" sx={{ '&.Mui-selected': { color: '#071952' } }} />
              </Tabs>
            </Grid>
    
            {active === 0 && (
              <Grid item sx={{ paddingRight: '20px', paddingLeft: '10px' }}>
                <EventRequests />
              </Grid>
            )}
    
            {active === 1 && (
              <Grid item sx={{ paddingRight: '20px', paddingLeft: '10px' }}>
                <UpcomingEvents />
              </Grid>
            )}
          </Grid>

    </Container>
  );
};

export default EventsPage
