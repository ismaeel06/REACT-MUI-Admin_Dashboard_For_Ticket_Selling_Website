import { createSlice } from '@reduxjs/toolkit';

const Data = [
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

export const usersTableSlice = createSlice({
  name: 'usersTable',
  initialState: {
    users: Data,
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = usersTableSlice.actions;

export const selectUsers = (state) => state.usersTable.users;

export default usersTableSlice.reducer;