import React from "react";
import "../../../assets/css/client/ConatactUs/ConatactUs.css";
import { Phone, Mail, MapPin } from "lucide-react";
const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <p className="section-heading">GET IN TOUCH</p>
        <h2>Have Questions? Reach out to us</h2>
        <p className="info-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>

        <div className="info-item">
          <div className="icon-wrapper">
            <Phone className="icon" />
          </div>
          <div className="info-text">
            <h3>Phone Number</h3>
            <p>+123 456 789</p>
          </div>
        </div>

        <div className="info-item">
          <div className="icon-wrapper">
            <Mail className="icon" />
          </div>
          <div className="info-text">
            <h3>Email Address</h3>
            <p>hello@sehat.com</p>
          </div>
        </div>

        <div className="info-item">
          <div className="icon-wrapper">
            <MapPin className="icon" />
          </div>
          <div className="info-text">
            <h3>Address</h3>
            <p>28 Jumps St, PNM, India</p>
          </div>
        </div>
      </div>

      <div className="contact-form-wrapper">
        <form className="contact-form">
          <h3>Send us a message</h3>
          <input type="text" placeholder="Full Name" name="fullName" required />
          <div className="form-row">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              required
            />
          </div>
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea
            placeholder="Message"
            name="message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
