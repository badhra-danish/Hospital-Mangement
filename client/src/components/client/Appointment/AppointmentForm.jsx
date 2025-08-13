import React from "react";
import "../../../assets/css/client/AppointmentForm/AppointmentForm.css";
function AppointmentForm() {
  return (
    <>
      <div className="appointment-form-container">
        <div className="appointment-form-info">
          <div className="top-info">
            <span className="section-heading">APPOINTMENT FORM</span>
            <h2>Book Your Appointment Easily and Securely</h2>
            <p>
              Choose your doctor, select a service, and pick a time that works
              best for you — all in just a few clicks.
            </p>
          </div>

          <div className="immediate-info">
            <h6>Need Immediate Assistance?</h6>
            <p>
              Visit Us : <span>28 Jumps St, PNM, Indonesia</span>
            </p>
            <p>
              Call Us : <span>+123 456 789</span>
            </p>
            <p>
              Email Us : <span>support@sehat.com</span>
            </p>
          </div>
        </div>

        <div className="appointment-form-main">
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
    </>
  );
}

export default AppointmentForm;
