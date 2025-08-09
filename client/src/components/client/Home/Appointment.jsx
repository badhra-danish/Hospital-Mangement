// src/App.js

import React from "react";
import "../../../assets/css/client/Home/home.css";
import medicalImage from "../../../assets/images/client/Appointmentimg.jpg"; // Import the image

function BookAppointment() {
  return (
    <div className="main-container">
      {/* --- Left Side: Info Card --- */}
      <div className="info-card">
        <img
          src={medicalImage}
          alt="Doctor with patient"
          className="info-image"
        />
        <div className="details-overlay">
          <div className="hours-section">
            <div className="hours-row">
              <span>Monday - Friday</span>
              <span>9AM - 10PM</span>
            </div>
            <div className="hours-row">
              <span>Saturday</span>
              <span>9AM - 10PM</span>
            </div>
            <div className="hours-row">
              <span>Sunday</span>
              <span>10AM - 4PM</span>
            </div>
          </div>
          <a href="tel:+12345678900" className="phone-button">
            +123 456 789 00
          </a>
        </div>
      </div>

      {/* --- Right Side: Appointment Form --- */}
      <div className="form-container">
        <p className="form-subtitle">BOOK AN APPOINTMENT</p>
        <h2 className="form-title">
          Easy, Fast, and Hassle-Free Medical Appointments
        </h2>

        <form className="appointment-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-row">
            <input type="tel" placeholder="Phone Number" required />
            {/* This input cleverly changes type to 'date' on focus for a better user experience */}
            <input
              type="text"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              placeholder="Select Date"
              required
            />
          </div>

          <select required>
            <option value="" disabled selected>
              Select Services
            </option>
            <option value="consultation">General Consultation</option>
            <option value="checkup">Annual Check-up</option>
            <option value="dental">Dental</option>
            <option value="specialist">Specialist Visit</option>
          </select>

          <textarea placeholder="Message" rows="5"></textarea>

          <button type="submit" className="submit-button">
            Make Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;
