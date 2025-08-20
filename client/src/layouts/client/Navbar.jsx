// import React from "react";
// import "../../assets/css/client/navbar.css";
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-logo-name">
//           <h5>Sehat Clinic</h5>
//         </div>
//         <div className="navbar-navlist">
//           <NavLink to="/" className="li">
//             Home
//           </NavLink>
//           <NavLink to="/about" className="li">
//             About
//           </NavLink>
//           <NavLink to="/services" className="li">
//             Services
//           </NavLink>
//           <div className="dropdown li">
//             Pages
//             <div class="dropdown-menu">
//               <NavLink to="/doctors" className="list">
//                 Doctors
//               </NavLink>
//               <NavLink to="/appointments" className="list">
//                 Appointment
//               </NavLink>
//               <NavLink to="/blogs" className="list">
//                 Blogs
//               </NavLink>
//               <NavLink to="/faqs" className="list">
//                 FAQs
//               </NavLink>
//             </div>
//           </div>
//           <NavLink to="/contacts" className="li">
//             Contacts
//           </NavLink>
//         </div>
//         <div className="navbar-button">
//           <div>Book An Appiontment</div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import "../../assets/css/client/navbar.css";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false); // close dropdown when toggling main menu
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-name">
        <h5>Sehat Clinic</h5>
      </div>

      {/* Mobile Menu Icon */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {isOpen ? <X /> : <Menu />}
      </div>

      {/* Nav Links */}
      <div className={`navbar-navlist ${isOpen ? "active" : ""}`}>
        <NavLink to="/" className="li" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" className="li" onClick={() => setIsOpen(false)}>
          About
        </NavLink>
        <NavLink to="/services" className="li" onClick={() => setIsOpen(false)}>
          Services
        </NavLink>

        {/* Dropdown Menu */}
        <div
          className={`dropdown li ${isDropdownOpen ? "open" : ""}`}
          onClick={() => {
            if (window.innerWidth <= 768) toggleDropdown();
          }}
        >
          Pages {<ChevronDown className="icon" />}
          <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
            <NavLink
              to="/doctors"
              className="list"
              onClick={() => setIsOpen(false)}
            >
              Doctors
            </NavLink>
            <NavLink
              to="/appointments"
              className="list"
              onClick={() => setIsOpen(false)}
            >
              Appointment
            </NavLink>
            <NavLink
              to="/blogs"
              className="list"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/faqs"
              className="list"
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </NavLink>
          </div>
        </div>

        <NavLink to="/contacts" className="li" onClick={() => setIsOpen(false)}>
          Contacts
        </NavLink>
      </div>
      <div className="navbar-button">
        <div>Book An Appointment</div>
      </div>
    </nav>
  );
}

export default Navbar;
