import React from "react";
import "../../assets/css/client/navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo-name">
          <h5>Sehat Clinic</h5>
        </div>
        <div className="navbar-navlist">
          <NavLink to="/" className="li">
            Home
          </NavLink>
          <NavLink to="/about" className="li">
            About
          </NavLink>
          <NavLink to="/" className="li">
            Services
          </NavLink>
          <div className="dropdown li">
            Pages
            <div class="dropdown-menu">
              <NavLink to="/" className="list">
                Doctors
              </NavLink>
              <NavLink to="/" className="list">
                Appointment
              </NavLink>
              <NavLink to="/" className="list">
                Blogs
              </NavLink>
              <NavLink to="/" className="list">
                FAQs
              </NavLink>
            </div>
          </div>
          <NavLink to="/" className="li">
            Contacts
          </NavLink>
        </div>
        <div className="navbar-button">
          <div>Book An Appiontment</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
