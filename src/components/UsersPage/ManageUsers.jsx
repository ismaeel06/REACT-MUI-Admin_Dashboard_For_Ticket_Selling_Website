import {useMemo,useEffect } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import IconButton from '@mui/material/IconButton';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Container,Grid } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { selectUsers,fetchUsers } from '../../app/slices/usersTableSlice';



const Example = (props) => {
  const  users  = useSelector(selectUsers);
  const status = useSelector((state) => state.usersTable.status);
  const error = useSelector((state) => state.usersTable.error);
  // console.log(users);

  

  const userArray = useMemo(() => Object.values(users), [users]);

  const data = useMemo(() => {
    if (userArray.length > 0 && userArray[0]) {
      console.log(userArray[0]);
      return userArray[0].map((user) => {
        return {
          firstName: user.firstName,
          lastName: user.lastName,
          address: user.address,
          city: user.city,
          state: user.state,
          email: user.email,
        };
      });
    }
    return [];
  }, [userArray]);




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
    data: data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return (
    <Container disableGutters sx={{ marginBottom: '16px' }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
          {status === 'loading' && <p>Loading...</p>}
          {status === 'failed' && <p>Error: {error}</p>}
          {status === 'succeeded' && <MaterialReactTable table={table} />}
      </Grid>
    </Grid>
  </Container>

)
};

export default Example;
