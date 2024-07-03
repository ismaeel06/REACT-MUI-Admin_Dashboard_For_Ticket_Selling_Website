
import './App.css'
import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from './pages/DashboardPage'
import EventsPage from './pages/EventsPage'
import OrganizersPage from './pages/OrganizersPage'
import Layout from './pages/Layout'
import NoPage from './pages/NoPage'
import UsersPage from './pages/UsersPage'
import TotalActiveUsersContext from './context/TotalActiveUsersContext'
import SettingsPage from './pages/SettingsPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  const [numUsers,setNumUsers] = useState(0);

  return (
    <TotalActiveUsersContext.Provider value={{numUsers,setNumUsers}}>
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
    </TotalActiveUsersContext.Provider>
  )
}

export default App
