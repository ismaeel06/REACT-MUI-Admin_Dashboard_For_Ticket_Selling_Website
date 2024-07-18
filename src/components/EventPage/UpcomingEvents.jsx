
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Container, Typography, IconButton, Box } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const columns = [
  { id: 'name', label: 'EventName', minWidth: 120 },
  { id: 'organizer', label: 'Organizer', minWidth: 70 },
  {
    id: 'venue',
    label: 'Venue',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'genre',
    label: 'Genre',
    minWidth: 60,
    align: 'left',
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 60,
    align: 'center',
  },
  {
    id: 'totalTickets',
    label: 'Total Tickets',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'ticketsSold',
    label: 'Tickets Sold',
    minWidth: 120,
    align: 'left',
  },
    {
        id: 'ticketsRemaining',
        label: 'Tickets Remaining',
        minWidth: 120,
        align: 'left',
    },
  
  
];

function createData(name, organizer, venue, genre, date, totalTickets, ticketsSold) {
   const ticketsRemaining = totalTickets - ticketsSold;
  return { name, organizer, venue, genre, date, totalTickets, ticketsSold, ticketsRemaining };
}

const rows = [
  createData('International Malam Jabba Ski Tournement', 'Malam Jabba Ski Resort', 'Malam Jabba, Swat','Sports', '26/4/24', 12000,8000 ),
  createData('International Naltar Ski Tournament', 'Naltar Ski Resort', 'Naltar Valley, Gilgit','Sports', '26/4/24', 9000,6000 ),
  createData('Spring Blossom Festival', 'GB Ministry', "Gilgit Baltistan", 'Exhibition', '26/4/24', 4500,3600 ),
  createData('International Silk Route Festival', 'GB Ministry', "Karakoram, Gilgit Baltistan", "Exhibition", '26/4/24', 5000,3800 ),
  createData('TasteFest', 'Coca Cola', "Islamabad", "Music/Food", '26/4/24', 15000,13000 ),
  createData('FoodMela', 'National Foods', "Karachi", "Food", '26/4/24', 18000,15050),
  createData('Asim Azhar Concert', 'Asim Azhar', "Lahore","Music", '26/4/24', 12000,11000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/4/24', 16000,12000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/4/24', 16000,12000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/4/24', 16000,12000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/4/24', 16000,12000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/4/24', 16000,12000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/4/24', 16000,12000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/4/24', 16000,12000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/4/24', 6000,4000),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container disableGutters>
      <Typography variant='p' sx={{paddingBottom:'5px',paddingLeft:'10px',fontFamily:'Roboto',color:'#071952',fontSize:'1.8rem'}}>Upcoming Events</Typography>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell sx={{bgcolor:'rgba(55, 183, 195, 0.97)'}}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === 'request') {
                        // For the 'request' column, return TableCell with buttons
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Box sx={{display:'flex',justifyContent:'space-between',gap:'25px'}}>

                                <IconButton sx={{color:'#37B7C3'}}> <DoneIcon /> </IconButton>
                                <IconButton sx={{color:'#EC6258'}}> <CloseIcon /> </IconButton>
                            

                            </Box>
                          </TableCell>
                        );}
                        else {
                            return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              ); 
                        }
                      
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Container>
  );
}
