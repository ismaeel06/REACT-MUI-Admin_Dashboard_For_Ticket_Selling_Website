
import React, { useContext,useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Container, Typography } from '@mui/material';
import FilteredRowsContext from '../../context/FilteredRowsContext';



const columns = [
  { id: 'name', label: 'EventName', minWidth: 120 },
  { id: 'organizer', label: 'Organizer', minWidth: 70 },
  {
    id: 'venue',
    label: 'Venue',
    minWidth: 170,
    align: 'left',
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'genre',
    label: 'Genre',
    minWidth: 60,
    align: 'left',
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 120,
    align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'ticketsSold',
    label: 'Tickets Sold',
    minWidth: 120,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  
  
];

function createData(name, organizer, venue, genre, date, ticketsSold) {
  return { name, organizer, venue, genre, date, ticketsSold };
}

const rows = [
  createData('International Malam Jabba Ski Tournement', 'Malam Jabba Ski Resort', 'Malam Jabba, Swat','Sports', '26/3/24', 7654),
  createData('International Naltar Ski Tournament', 'Naltar Ski Resort', 'Naltar Valley, Gilgit','Sports', '26/3/24', 5422),
  createData('Spring Blossom Festival', 'GB Ministry', "Gilgit Baltistan", 'Exhibition', '26/3/24', 2600),
  createData('International Silk Route Festival', 'GB Ministry', "Karakoram, Gilgit Baltistan", "Exhibition", '26/3/24', 3200),
  createData('TasteFest', 'Coca Cola', "Islamabad", "Music/Food", '26/3/24', 13800),
  createData('FoodMela', 'National Foods', "Karachi", "Food", '26/3/24',17200),
  createData('Asim Azhar Concert', 'Asim Azhar', "Lahore","Music", '26/3/24',10600),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/3/24',2000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/3/24',2000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/3/24',2000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/3/24',2000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/3/24',2000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/3/24',2000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/3/24',2000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', '26/3/24',2000),
];

export default function StickyHeadTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { setFilteredRows } = useContext(FilteredRowsContext);

  useEffect(() => {
    // Assuming you have a way to calculate filteredRows within this component
    const filteredRows = rows.filter(row => row.organizer === props.state);
    setFilteredRows(filteredRows);
  }, [props.state]);
  


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredRows = rows.filter(row => row.organizer === props.state);
  // console.log(filteredRows.length);

  return (
    <Container disableGutters>
      <Typography variant='p' sx={{paddingBottom:'5px',paddingLeft:'10px',fontFamily:'Roboto',color:'#071952',fontSize:'1.8rem'}}>Events Organized By: {props.state}</Typography>
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
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
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
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Container>
  );
}
