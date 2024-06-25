import { Outlet, Link } from "react-router-dom";
import AppBar from "../components/AppBar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <>
      <AppBar/>
      <Sidebar/>

      <Outlet />
    </>
  )
};

export default Layout;