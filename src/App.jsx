
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from './pages/DashboardPage'
import EventsPage from './pages/EventsPage'
import OrganizersPage from './pages/OrganizersPage'
import Layout from './pages/Layout'
import NoPage from './pages/NoPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="Events" element={<EventsPage />} />
          <Route path="Organizers" element={<OrganizersPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
