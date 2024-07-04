import { createSlice } from '@reduxjs/toolkit';

export const activeUsersSlice = createSlice({
  name: 'activeUsers',
  initialState: {
    count: 0,
  },
  reducers: {
    setActiveUsersCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { setActiveUsersCount } = activeUsersSlice.actions;

export default activeUsersSlice.reducer;