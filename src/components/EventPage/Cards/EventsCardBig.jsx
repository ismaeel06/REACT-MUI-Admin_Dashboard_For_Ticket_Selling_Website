import React,{useState,useEffect} from 'react'
import {Container,Box,Typography} from '@mui/material'

const EventsCardBig = (props) => {
  const [imageWidth, setImageWidth] = useState({ width: '248px' });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1016) { // Example breakpoint for 'md'
        setImageWidth({ width: '248px' });
      }
      else if (window.innerWidth >= 900) { // Example breakpoint for 'sm'
        setImageWidth({ width: '180px' });
      }
      else if (window.innerWidth >= 675 && window.innerWidth <900 ) { // Example breakpoint for 'xs'
        setImageWidth({ width: '230px' });
      }
      else if (window.innerWidth >= 575 && window.innerWidth <675 ) { // Example breakpoint for 'xs'
        setImageWidth({ width: '200px' });
      }
      
      else {
        setImageWidth({ width: '135px' });
      }
    };

    // Set the initial style based on the current window size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <Container disableGutters sx={{display:'flex',borderRadius:'20px',height:'auto',width:'auto',bgcolor:'white',justifyContent:'space-between',paddingX:'15px'}}>

        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',gap:'10px',paddingY:'15px'}}>

            <img src={props.icon} alt="Icon" width={55} height={55}/>

            <Typography variant='p' sx={{fontFamily:'Roboto',color:'#071952',fontWeight:'400',fontSize:'1.5rem',":hover":{cursor: 'default' }}}>{props.value}</Typography>

            <Typography variant='p' sx={{fontFamily:'Roboto',color:'#071952',fontWeight:'300',fontSize:'1.5rem',":hover":{cursor: 'default' }}}>{props.title}</Typography>

        </Box>



        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>

          <img src={props.image} alt="CardImage" height={210} style={imageWidth} />



        </Box>





    </Container>
  )
}

export default EventsCardBig
