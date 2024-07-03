import {useMemo,useState,useEffect,useContext } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import IconButton from '@mui/material/IconButton';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import TotalActiveUsersContext from '../../context/TotalActiveUsersContext';
import { Container } from '@mui/material';
import { useUsers } from '../../context/UsersDataContext';

export const Data = [
  {
  
    firstName: 'John',
    lastName: 'Doe',
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
    email:'abc@xyz.com',
    
    
  },
  {
    
    firstName: 'Jane',
    lastName: 'Doe',
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
    email:'abc@xyz.com'
  },
  {
    firstName: 'Joe',
    lastName: 'Doe',
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
    email:'abc@xyz.com'
  },
  {
    
    firstName: 'Kevin',
    lastName: 'Vandy',
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
    email:'abc@xyz.com'
  },
  {
    
    firstName: 'Joshua',
    lastName: 'Rolluffs',
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
    email:'abc@xyz.com'
  },
];

const Example = (props) => {
  const { users } = useUsers();

  const { setNumUsers } = useContext(TotalActiveUsersContext);

  useEffect(() => {
    const activeUsers = users.length;
    setNumUsers(activeUsers);
  }, [users]);

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName', //access nested data with dot notation
        header: 'First Name',
        size: 100,
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        size: 100,
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
        size: 170,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 100,
      },
      {
        accessorKey: 'remove',
        header: 'Remove',
        size: 60,
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
  <Container disableGutters sx={{marginBottom:'16px'}}>
    <MaterialReactTable table={table} />
  </Container>

)
};

export default Example;
