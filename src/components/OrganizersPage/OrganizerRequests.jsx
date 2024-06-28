
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
  { id: 'id', label: 'ID', minWidth: 120 },
  { id: 'organizerName', label: 'Organizer Name', minWidth: 70 },
  {
    id: 'event',
    label: 'Flagship Event',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 60,
    align: 'left',
  },
  {
    id: 'phone',
    label: 'Phone No.',
    minWidth: 60,
    align: 'center',
  },
  {
    id: 'budget',
    label: 'Budget',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'request',
    label: 'Request Action',
    minWidth: 120,
    align: 'left',
  },
  
  
];

function createData(id,organizerName, event, email, phone, budget, request) {
  return { id,organizerName,  event, email, phone, budget, request };
}

const rows = [
  createData('124418', 'Malam Jabba Ski Resort', 'Int. Ski Competition','abc@xyz.com', '0234-9876543', 12000, ),
  createData('122312', 'Naltar Ski Resort', 'Int. Ski Competition','abc@xyz.com', '0234-9876543', 9000, ),
  createData('145321', 'GB Ministry', "Spring Blossom Festival", 'abc@xyz.com', '0234-9876543', 4500, ),
  createData('178892', 'GB Ministry', "International Silk Route ", "abc@xyz.com", '0234-9876543', 5000, ),
  createData('164231', 'Coca Cola', "Taste Fest", "abc@xyz.com", '0234-9876543', 15000, ),
  createData('116743', 'National Foods', "Food Mela", "abc@xyz.com", '0234-9876543', 18000,),
  createData('109675', 'Asim Azhar', "Concert","abc@xyz.com", '0234-9876543', 12000,),
  createData('166543', 'Organizer', 'Venue', 'abc@xyz.com', '0234-9876543', 16000,),
  createData('177432', 'Organizer', 'Venue', 'abc@xyz.com', '0234-9876543', 16000,),
  createData('143323', 'Organizer', 'Venue', 'abc@xyz.com', '0234-9876543', 16000,),
//   createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/4/24', 16000,),
//   createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/4/24', 16000,),
//   createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/4/24', 16000,),
//   createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/4/24', 16000,),
//   createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/4/24', 6000,),
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
      <Typography variant='p' sx={{paddingBottom:'5px',paddingLeft:'10px',fontFamily:'Roboto',color:'#071952',fontSize:'1.8rem'}}>Organizer Requests</Typography>
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
