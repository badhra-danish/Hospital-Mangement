import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";
import "../../assets/css/admin/outlet.css";
function Layout() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="outlet">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="outlet-child">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
