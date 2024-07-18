
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
import { useEffect, useState } from 'react';
import axios from 'axios';


const columns = [
  { id: 'sno', label: 'S.No.', minWidth: 10 },
  { id: 'organizerName', label: 'Organizer Name', minWidth: 70 },
  {
    id: 'flagshipEvent',
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
    minWidth: 150,
    align: 'center',
  },
  {
    id: 'requestDate',
    label: 'Request Date',
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

export default function StickyHeadTable() {
  const [rows,setRows] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const {data} = await axios.get('http://localhost:5000/api/organizerRequests',
        {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
        );
        const dataWithSerial = data.organizerRequests.map((item, index) => ({
          ...item,
          sno: index + 1,
        }));
        setRows(dataWithSerial);
      } catch(error){
        console.log(error);
      }
    }
    fetchData();
  },[]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAccept = async (email) => {
    if(window.confirm('Are you sure you want to accept this organizer?')){
      console.log(email);
    try{
      const user = await axios.get(`http://localhost:5000/api/users/${email}`,
      {headers : {Authorization: `Bearer ${localStorage.getItem('token')}`}}
      );
      console.log(user.data.user._id);
      if(user){
      await axios.put(`http://localhost:5000/api/users/${user.data.user._id}`,
        {
          isOrganizer: true,
        },
        {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
      window.alert('Organizer Added');
      await axios.delete(`http://localhost:5000/api/organizerRequests?email=${email}`,
        {headers : {Authorization: `Bearer ${localStorage.getItem('token')}`}
        });
      window.location.reload();
    }
    } catch(error){
      console.log('Failed to add organizer',error);
    }
  }
};

const handleDecline = async (email) => {
  if(window.confirm('Are you sure you want to decline this organizer?')){
    console.log(email);
  try{
    if(email){
    await axios.delete(`http://localhost:5000/api/organizerRequests?email=${email}`,
    {headers : {Authorization: `Bearer ${localStorage.getItem('token')}`}
    });
    window.alert('Organizer Request Declined');
    window.location.reload();
  }
  }
  catch(error){
    console.log('Failed to decline organizer',error);
  }
}
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

                                <IconButton sx={{color:'#37B7C3'}} onClick={() => handleAccept(row.email)}> <DoneIcon /> </IconButton>
                                <IconButton sx={{color:'#EC6258'}} onClick={() => handleDecline(row.email)}> <CloseIcon /> </IconButton>
                            

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
