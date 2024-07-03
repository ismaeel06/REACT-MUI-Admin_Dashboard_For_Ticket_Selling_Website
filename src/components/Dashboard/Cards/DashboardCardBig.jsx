import React,{useContext} from 'react'
import {Container,Box,Typography} from '@mui/material'
import TotalActiveUsersContext from '../../../context/TotalActiveUsersContext'

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
  const contextValue = useContext(TotalActiveUsersContext);
  const numUsers = contextValue ? contextValue.numUsers : null; // Safely access numUsers
  return (
    <Container disableGutters sx={{display:'flex',borderRadius:'20px', width:'50%',height:'220px',bgcolor:'white',justifyContent:'space-between',paddingX:'15px'}}>

        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',gap:'10px',paddingY:'15px'}}>

            <img src={props.image} alt="Icon" width={55} height={55}/>

            <Typography variant='p' sx={{fontFamily:'Roboto',color:'#071952',fontWeight:'400',fontSize:'1.5rem',":hover":{cursor: 'default' }}}>{props.value ? props.value : numUsers}</Typography>

            <Typography variant='p' sx={{fontFamily:'Roboto',color:'#071952',fontWeight:'300',fontSize:'1.5rem',":hover":{cursor: 'default' }}}>{props.title}</Typography>



        </Box>



        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>

          <Line data = {props.data} options = {props.options}/>



        </Box>





    </Container>
  )
}

export default DashboardCardBig
