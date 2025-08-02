import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/client/footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-left-part">
          <div className="footer-detail-parts">
            <div className="footer-name-description">
              <h4>Sehat Clinic</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur ipsam ipsa harum, sed beatae numquam?
              </p>
            </div>
            <div className="detail-contact-email">
              <div className="detail-contact">
                <p>Need more heip?</p>
                <h5>+123 654 687</h5>
              </div>
              <div className="detail-contact">
                <p>Email - suppport</p>
                <h5>sehatclinic@gmail.com</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-right-part">
          <div className="footer-services">
            <h4>Services</h4>
            <div className="footer-services-list">
              <li>General Health checkup</li>
              <li>Emergency & Urgent Care</li>
              <li>Cardiology & Heart Health</li>
              <li>pediatrics & Family medicine</li>
              <li>Orthopadic & Physiotherapy</li>
              <li>Diagnostic &Labs Test </li>
            </div>
          </div>

          <div className="footer-quik-link">
            <h4>Quik Links</h4>
            <NavLink to="/" className="li">
              Home
            </NavLink>
            <NavLink to="/" className="li">
              About
            </NavLink>
            <NavLink to="/" className="li">
              Services
            </NavLink>
            <NavLink to="/" className="li">
              Conatct
            </NavLink>
          </div>
          <div className="footer-social-link">
            <h4>Socials</h4>
            <li>Youtube</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
