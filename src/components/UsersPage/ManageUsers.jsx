import {useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import IconButton from '@mui/material/IconButton';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Container,Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../app/slices/usersTableSlice';


const Example = (props) => {
  const  users  = useSelector(selectUsers);

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName', //access nested data with dot notation
        header: 'First Name',
        size: 80,
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        size: 80,
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
        size: 120,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 100,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 100,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 100,
      },
      {
        accessorKey: 'remove',
        header: 'Remove',
        size: 40,
        enableSorting: false,
        enableColumnActions: false,
        Cell: ({ row }) => (
          <IconButton sx={{color:'#EC6258'}}> <PersonRemoveIcon /> </IconButton>
        ),
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data: users, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return (
    <Container disableGutters sx={{ marginBottom: '16px' }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MaterialReactTable table={table} />
      </Grid>
    </Grid>
  </Container>

)
};

export default Example;
