import React from 'react'
import {Container,Box,Typography} from '@mui/material'

import {Doughnut} from 'react-chartjs-2'

import {Chart as ChartJS,ArcElement,Tooltip,Legend,Title} from 'chart.js'
ChartJS.register(ArcElement,Tooltip,Legend,Title);



const DashboardTicketSellDonutChart = (props) => {

  return (
    <Container disableGutters sx={{display:'flex',borderRadius:'20px', width:'35%',height:'260px',bgcolor:'white',alignItems:'center',justifyContent:'center'}}>

        <Box sx={{height:'100%',paddingY:'15px'}}>

        <Doughnut data={props.data} options = {props.options}/>

        <Typography variant='p' sx={{color:'#071952',fontSize:'2.5rem',position:'relative',bottom:'140px',left:'80px',fontFamily:'Roboto'}}>{props.data.datasets[0].data[0]}%</Typography>

        </Box>
     

    </Container>
  )
}

export default DashboardTicketSellDonutChart
