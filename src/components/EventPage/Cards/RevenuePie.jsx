import React from 'react'
import {Container,Box,Typography} from '@mui/material'

import {Pie} from 'react-chartjs-2'

import {Chart as ChartJS,ArcElement,Tooltip,Legend,Title} from 'chart.js'
ChartJS.register(ArcElement,Tooltip,Legend,Title);

const EventsListedPie = (props) => {
  return (
    <Container disableGutters sx={{display:'flex',borderRadius:'20px',height:'260px',bgcolor:'white',alignItems:'center',justifyContent:'center'}}>

    <Box sx={{height:'100%',paddingY:'15px'}}>

    <Pie data={props.data} options = {props.options}/>


    </Box>
 

</Container>
  )
}

export default EventsListedPie
