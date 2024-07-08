import React from 'react'
import {Container,Box,Typography,Grid} from '@mui/material'
import { useSelector } from 'react-redux'

import {Line} from 'react-chartjs-2'

import {Chart as ChartJS,
  LineElement,
  CategoryScale,  //x-axis
  LinearScale,    //y-axis
  PointElement,
  Tooltip,
  Title,
  } from 'chart.js'
ChartJS.register(LineElement,CategoryScale,LinearScale,PointElement,Tooltip,Title);

const DashboardCardBig = (props) => {


  const numUsers = useSelector((state) => state.activeUsers.count);
  
  return (
    <Container disableGutters sx={{ borderRadius: '20px', bgcolor: 'white', paddingX: '15px' }}>
    <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ height: { md: '220px', xs: 'auto' } }}>
      
      <Grid item xs={12} sm={4} display="flex" flexDirection="column" justifyContent="space-between" gap={2}>
        <img src={props.image} alt="Icon" width={55} height={55} />
        <Typography variant='body1' sx={{ fontFamily: 'Roboto', color: '#071952', fontWeight: '400', fontSize: '1.5rem', ":hover": { cursor: 'default' } }}>
          {props.value ? props.value : props.numUsers}
        </Typography>
        <Typography variant='body1' sx={{ fontFamily: 'Roboto', color: '#071952', fontWeight: '300', fontSize: '1.5rem', ":hover": { cursor: 'default' } }}>
          {props.title}
        </Typography>
      </Grid>

      <Grid item xs={12} sm={8} display="flex" alignItems="center" justifyContent="center">
        <Line data={props.data} options={props.options} />
      </Grid>

    </Grid>
  </Container>
  )
}

export default DashboardCardBig
