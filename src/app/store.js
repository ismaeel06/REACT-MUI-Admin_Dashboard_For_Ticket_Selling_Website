import { configureStore } from '@reduxjs/toolkit'
import activeUsersReducer from './slices/activeUsersSlice'
import usersTableReducer from './slices/usersTableSlice'

export const store = configureStore({
  reducer: {activeUsers: activeUsersReducer,
            usersTable: usersTableReducer,
  },
})