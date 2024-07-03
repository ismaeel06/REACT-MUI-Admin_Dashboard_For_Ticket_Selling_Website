import React, { createContext, useState, useContext } from 'react';
import { Data } from '../components/UsersPage/ManageUsers';

const UsersDataContext = createContext();

export const useUsers = () => useContext(UsersDataContext);

export const UsersDataProvider = ({ children }) => {
  const [users, setUsers] = useState(Data);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <UsersDataContext.Provider value={{ users, addUser }}>
      {children}
    </UsersDataContext.Provider>
  );
};