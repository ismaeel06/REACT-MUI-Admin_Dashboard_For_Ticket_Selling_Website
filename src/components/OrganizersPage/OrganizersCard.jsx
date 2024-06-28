import {React,useState} from 'react'
import {Container,Box,Typography,Select,MenuItem} from '@mui/material'

const OrganizersCard = (props) => {

    

  return (
    <Container disableGutters sx={{display:'flex',borderRadius:'20px', width:'50%',height:'270px',bgcolor:'white',justifyContent:'space-between',paddingX:'15px'}}>

        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',gap:'10px',paddingY:'15px'}}>

            <img src={props.icon} alt="Icon" width={55} height={55}/>

            <Typography variant='p' sx={{fontFamily:'Roboto',color:'#071952',fontWeight:'400',fontSize:'1.5rem',":hover":{cursor: 'default' }}}>{props.value}</Typography>

            <Typography variant='p' sx={{fontFamily:'Roboto',color:'#071952',fontWeight:'300',fontSize:'1.5rem',":hover":{cursor: 'default' }}}>{props.title} {props.state}</Typography>

        </Box>


            {props.image ? (
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img src={props.image} alt="CardImage" height={210} width={248} />
                </Box>
            ) : (
                <Box sx={{paddingTop:'12px'}}>
                <Select value={props.state} onChange={props.function} displayEmpty sx={{width:'248px', boxShadow:'1px 4px 8px #9fa5a7',border:'none',outline:'none',borderRadius:'10px'}} 
                MenuProps={{
                    PaperProps: {
                        style: {
                        maxHeight: 189,
                        borderRadius:'5px'
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
