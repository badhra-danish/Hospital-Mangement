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

// import React, { useState } from "react";
// import "../../assets/css/client/navbar.css";
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   // State to manage whether the mobile menu is open or closed
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Function to toggle the menu's state
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Function to close the menu (used when a link is clicked)
//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-logo-name">
//           <NavLink to="/" onClick={closeMenu}>
//             <h5>Sehat Clinic</h5>
//           </NavLink>
//         </div>

//         {/* This container holds the links and button for easy toggling */}
//         <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
//           <div className="navbar-navlist">
//             <NavLink to="/" className="li" onClick={closeMenu}>
//               Home
//             </NavLink>
//             <NavLink to="/about" className="li" onClick={closeMenu}>
//               About
//             </NavLink>
//             <NavLink to="/services" className="li" onClick={closeMenu}>
//               Services
//             </NavLink>
//             <div className="dropdown li">
//               Pages
//               <div className="dropdown-menu">
//                 <NavLink to="/doctors" className="list" onClick={closeMenu}>
//                   Doctors
//                 </NavLink>
//                 <NavLink to="/appointment" className="list" onClick={closeMenu}>
//                   Appointment
//                 </NavLink>
//                 <NavLink to="/blogs" className="list" onClick={closeMenu}>
//                   Blogs
//                 </NavLink>
//                 <NavLink to="/faqs" className="list" onClick={closeMenu}>
//                   FAQs
//                 </NavLink>
//               </div>
//             </div>
//             <NavLink to="/contact" className="li" onClick={closeMenu}>
//               Contacts
//             </NavLink>
//           </div>

//           <div className="navbar-button" onClick={closeMenu}>
//             <NavLink to="/appointment">Book An Appointment</NavLink>
//           </div>
//         </div>

//         {/* The Hamburger Toggle Button */}
//         <button
//           className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
//           onClick={toggleMenu}
//           aria-label="Toggle navigation menu"
//         >
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </button>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
