
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Container, Typography,Grid,useTheme,useMediaQuery } from '@mui/material';

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
    id: 'totalTickets',
    label: 'Total Tickets',
    minWidth: 120,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'ticketsSold',
    label: 'Tickets Sold',
    minWidth: 120,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'ticketsLeft',
    label: 'Tickets Left',
    minWidth: 120,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  
  
];

function createData(name, organizer, venue, genre, totalTickets, ticketsSold) {
  const ticketsLeft = totalTickets - ticketsSold;
  return { name, organizer, venue, genre, totalTickets, ticketsSold, ticketsLeft };
}

const rows = [
  createData('International Malam Jabba Ski Tournement', 'Malam Jabba Ski Resort', 'Malam Jabba, Swat','Sports', 12000, 7654),
  createData('International Naltar Ski Tournament', 'Naltar Ski Resort', 'Naltar Valley, Gilgit','Sports', 9000, 5422),
  createData('Spring Blossom Festival', 'GB Ministry', "Gilgit Baltistan", 'Exhibition', 4500, 2600),
  createData('International Silk Route Festival', 'GB Ministry', "Karakoram, Gilgit Baltistan", "Exhibition", 5000, 3200),
  createData('TasteFest', 'Coca Cola', "Islamabad", "Music/Food", 15000, 13800),
  createData('FoodMela', 'National Foods', "Karachi", "Food", 18000,17200),
  createData('Asim Azhar Concert', 'Asim Azhar', "Lahore","Music", 12000,10600),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', 16000,2000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', 16000,2000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', 16000,2000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', 16000,2000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', 16000,2000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', 16000,2000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', 16000,2000),
  createData('Event Name', 'Organizer', 'Venue', 'Genre', 6000,2000),
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

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Container disableGutters>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h6' sx={{ paddingBottom: '5px', paddingLeft: '10px', fontFamily: 'Roboto', color: '#071952', fontSize: isXsScreen ? '1.2rem' : '1.8rem' }}>Upcoming Events</Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell sx={{ bgcolor: 'rgba(55, 183, 195, 0.97)' }}
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
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
