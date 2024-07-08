import {Container,Box,Typography} from '@mui/material'

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
const DashboardTicketSellGraph = (props) => {
  return (
    <Container disableGutters sx={{display:'flex',borderRadius:'20px',height:'260px',bgcolor:'white',alignItems:'center',justifyContent:'center'}}>

      <Line data = {props.data} options = {props.options} />




    </Container>
  )
}

export default DashboardTicketSellGraph
