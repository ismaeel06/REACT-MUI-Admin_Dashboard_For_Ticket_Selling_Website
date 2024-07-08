import React,{useState,useEffect} from 'react'
import { Box, Container,Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const TotalActiveUsers = (props) => {

   const numUsers = useSelector((state) => state.activeUsers.count);

   const [imageWidth, setImageWidth] = useState({ width: '248px' });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1016) { // Example breakpoint for 'md'
        setImageWidth('248px');
      }
      else if (window.innerWidth >= 900) { // Example breakpoint for 'sm'
        setImageWidth('180px');
      }
      else if (window.innerWidth >= 675 && window.innerWidth <900 ) { // Example breakpoint for 'xs'
        setImageWidth('230px');
      }
      else if (window.innerWidth >= 600 && window.innerWidth <675 ) { // Example breakpoint for 'xs'
        setImageWidth('200px');
      }
      
      else {
        setImageWidth('135px');
      }
    };

    // Set the initial style based on the current window size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (


<Container disableGutters sx={{display:'flex',borderRadius:'20px',height:'260px',bgcolor:'white',justifyContent:'space-between',paddingX:'15px'}}>
    
          <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',gap:'10px',paddingY:'15px'}}>

            <img src={props.icon} alt="Icon" width={75} height={75}/>

            <Typography variant='p' sx={{fontFamily:'Roboto',color:'#071952',fontWeight:'400',fontSize:'1.5rem',":hover":{cursor: 'default' }}}>{numUsers}</Typography>

            <Typography variant='p' sx={{fontFamily:'Roboto',color:'#071952',fontWeight:'300',fontSize:'1.5rem',":hover":{cursor: 'default' }}}>{props.title}</Typography>

          </Box>



        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>

          <img src={props.image} alt="CardImage" height={210} width={imageWidth} />



        </Box>



  </Container>
  )
}

export default TotalActiveUsers
