
import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from './pages/DashboardPage'
import EventsPage from './pages/EventsPage'
import OrganizersPage from './pages/OrganizersPage'
import Layout from './pages/Layout'
import NoPage from './pages/NoPage'
import UsersPage from './pages/UsersPage'
import SettingsPage from './pages/SettingsPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { useSelector,useDispatch } from 'react-redux';
import { selectUsers,fetchUsers } from './app/slices/usersTableSlice';
import { setActiveUsersCount } from './app/slices/activeUsersSlice';
import { useEffect,useMemo } from 'react';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const  users  = useSelector(selectUsers);
  const usersArray = useMemo(() => Object.values(users), [users]);

  const numUsers = useMemo(() => {
    if (usersArray.length > 0 && usersArray[0]) {
      return usersArray[0].length
    }
    return [];
  }, [usersArray]);





  useEffect(() => {
    dispatch(setActiveUsersCount(numUsers));
  }, [numUsers]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="Users" element={<UsersPage />} />
          <Route path="Events" element={<EventsPage />} />
          <Route path="Settings" element={<SettingsPage />} />
          <Route path="Organizers" element={<OrganizersPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
