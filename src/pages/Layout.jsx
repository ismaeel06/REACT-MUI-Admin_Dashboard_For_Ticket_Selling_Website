import { Outlet, Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import AppBar from "../components/AppBar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <Container disableGutters>
      <AppBar/>
      <Sidebar/>

      <Outlet />
    </Container>
  )
};

export default Layout;