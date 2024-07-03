import React from 'react'
import {Container,Box,Typography} from '@mui/material'

import {Doughnut} from 'react-chartjs-2'

import {Chart as ChartJS,ArcElement,Tooltip,Legend,Title} from 'chart.js'
ChartJS.register(ArcElement,Tooltip,Legend,Title);

const GenderRatioDoughnut = (props) => {
  return (
    <Container disableGutters sx={{display:'flex',borderRadius:'20px', width:'45%',height:'260px',bgcolor:'white',alignItems:'center',justifyContent:'center'}}>

    <Box sx={{height:'100%',paddingY:'15px'}}>

    <Doughnut data={props.data} options = {props.options}/>


    </Box>
 

    </Container>
  )
}

export default GenderRatioDoughnut
