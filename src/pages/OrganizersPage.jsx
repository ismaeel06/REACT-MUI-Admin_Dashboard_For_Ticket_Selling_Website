import React,{useState} from 'react'
import { Box, Container,Typography,Tabs,Tab } from '@mui/material'
import OrganizersCard from '../components/OrganizersPage/OrganizersCard'
import OrganizersRequests from '../components/OrganizersPage/OrganizerRequests'
import EventsOrganized from '../components/OrganizersPage/EventsOrganized'
import FilteredRowsContext from '../context/FilteredRowsContext'

const OrganizersPage = () => {

  const [selectedOrganizer, setSelectedOrganizer] = useState('')
  const [filteredRows, setFilteredRows] = useState([]);

    const handleChange = (event) => {
        setSelectedOrganizer(event.target.value);
    }

  const [active, setActive] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActive(newValue);
  };

  return (
    <FilteredRowsContext.Provider value={{filteredRows, setFilteredRows}}>
    <Container disableGutters sx={{bgcolor:'#EBF4F6',paddingLeft: '230px',display:'flex',flexDirection:'column',gap:'100px'}}>
      <Box sx={{display:'flex',justifyContent:'space-between',paddingRight:'20px',paddingTop:'20px',gap:'30px',paddingLeft:'10px'}}> 

        <OrganizersCard icon='/images/OrganizersOnboardIcon.svg' title='Organizers Onboard' value='16' image='/images/OrganizersOnboard.svg'/>

        <OrganizersCard icon='/images/EventsOrganizedByOrganizerIcon.svg' title='Events Organized By' state = {selectedOrganizer} function = {handleChange} />

      </Box>


      <Box sx={{display:'flex',flexDirection:'column',gap:'30px'}}>

      <Tabs value={active} onChange={handleTabChange} aria-label="organizer tabs" TabIndicatorProps={{style:{backgroundColor:'#088395'}}}>
        <Tab label="Events Organized" sx={{'&.Mui-selected': { color: '#071952' }}}/>
        <Tab label="Organizers Requests" sx={{'&.Mui-selected': { color: '#071952' }}}/>
      </Tabs>

      {active === 0 && (

        <Box sx={{ paddingRight: '20px', paddingLeft: '10px' }}>
        <EventsOrganized state={selectedOrganizer} />
        </Box>

      )}
      {active === 1 && (
        
        <Box sx={{ paddingRight: '20px', paddingLeft: '10px' }}>
        <OrganizersRequests />
        </Box>
        
      )}
        
      </Box>

      
      
   </Container>
   </FilteredRowsContext.Provider>
  )
}

export default OrganizersPage
