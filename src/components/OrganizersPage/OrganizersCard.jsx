import {React,useContext,useState,useEffect} from 'react'
import {Container,Box,Typography,Select,MenuItem} from '@mui/material'
import FilteredRowsContext from '../../context/FilteredRowsContext'

const OrganizersCard = (props) => {

    const { filteredRows } = useContext(FilteredRowsContext);

    const [imageWidth, setImageWidth] = useState({ width: '248px' });
    const [selectWidth, setSelectWidth] = useState('248px');

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
        setImageWidth({ width: '120px' });
      }
    };

    // Set the initial style based on the current window size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1130) { // Example breakpoint for 'md'
        setSelectWidth('248px');
      }
      else if (window.innerWidth >= 1035 && window.innerWidth < 1130) { // Example breakpoint for 'sm'
        setSelectWidth('200px');
      }

      else if (window.innerWidth >= 995 && window.innerWidth < 1030) { // Example breakpoint for 'sm'
        setSelectWidth('180px');
      }

      else if (window.innerWidth >= 900 && window.innerWidth < 995) { // Example breakpoint for 'sm'
        setSelectWidth('132px');
      }

      else if (window.innerWidth >= 675 && window.innerWidth <900 ) { // Example breakpoint for 'xs'
        setSelectWidth('230px');
      }
      else if (window.innerWidth >= 575 && window.innerWidth <675 ) { // Example breakpoint for 'xs'
        setSelectWidth('200px');
      }
      
      else {
        setSelectWidth('120px');
      }
    };

    // Set the initial style based on the current window size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container disableGutters sx={{display:'flex',borderRadius:'20px' ,height:{md:'270px', sm:'auto'},bgcolor:'white',justifyContent:'space-between',paddingX:'15px'}}>

        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',gap:'10px',paddingY:'15px'}}>

            <img src={props.icon} alt="Icon" width={55} height={55}/>

            <Typography variant='p' sx={{fontFamily:'Roboto',color:'#071952',fontWeight:'400',fontSize:'1.5rem',":hover":{cursor: 'default' }}}>{props.value ? props.value : filteredRows.length}</Typography>

            <Typography variant='p' sx={{fontFamily:'Roboto',color:'#071952',fontWeight:'300',fontSize:'1.5rem',":hover":{cursor: 'default' }}}>{props.title} {props.state}</Typography>

        </Box>


            {props.image ? (
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img src={props.image} alt="CardImage" height={210} style={imageWidth} />
                </Box>
            ) : (
                <Box sx={{paddingTop:'12px'}}>
                <Select value={props.state} onChange={props.function} displayEmpty sx={{width:selectWidth, boxShadow:'1px 4px 8px #9fa5a7',border:'none',outline:'none',borderRadius:'10px'}} 
                MenuProps={{
                    PaperProps: {
                        style: {
                        maxHeight: 189,
                        borderRadius:'5px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        },
                    },
                }}>
                <MenuItem value="" disabled>Select an option</MenuItem>
                <MenuItem value="Malam Jabba Ski Resort">Malam Jabba Ski Resort</MenuItem>
                <MenuItem value="Naltar Ski Resort">Naltar Ski Resort</MenuItem>
                <MenuItem value="GB Ministry">GB Ministry</MenuItem>
                <MenuItem value="Coca Cola">Coca Cola</MenuItem>
                <MenuItem value="National Foods">National Foods</MenuItem>
                <MenuItem value="Asim Azhar">Asim Azhar</MenuItem>
                <MenuItem value="Organizer 7">Organizer 7</MenuItem>
                <MenuItem value="Organizer 8">Organizer 8</MenuItem>
                <MenuItem value="Organizer 9">Organizer 9</MenuItem>
                <MenuItem value="Organizer 10">Organizer 10</MenuItem>
                <MenuItem value="Organizer 11">Organizer 11</MenuItem>
                <MenuItem value="Organizer 12">Organizer 12</MenuItem>
                <MenuItem value="Organizer 13">Organizer 13</MenuItem>
                <MenuItem value="Organizer 14">Organizer 14</MenuItem>
                <MenuItem value="Organizer 15">Organizer 15</MenuItem>
                <MenuItem value="Organizer 16">Organizer 16</MenuItem>
                
                </Select>
                </Box>
      )}
          



       





    </Container>
  )
}

export default OrganizersCard
