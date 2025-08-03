import React from "react";
import "../../assets/css/client/Home/home.css";
import HeroDoctorImg from "../../assets/images/client/herodoctor.jpg";
import pt1 from "../../assets/images/client/pt1.jpeg";
import pt2 from "../../assets/images/client/pt2.jpeg";
import pt3 from "../../assets/images/client/pt3.jpeg";
import pt4 from "../../assets/images/client/pt4.jpeg";
function HeroSection() {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-container">
          <div className="hero-left-content">
            <div className="content-title">
              <h1>Professional Medical Care for Your Optimal Health</h1>
              <p>
                We are committed to providing top-quality healthcare with a team
                of highly skilled medical professionals and advanced medical
                technology.
              </p>
            </div>

            <div className="hero-buttons">
              <button className="btn btn-primary">Book an Appointment</button>
              <button className="btn btn-secondary">View Services</button>
            </div>
            <div className="patient-stats">
              <div className="patient-avatars">
                {/* Using placeholder images for avatars */}
                <img className="avatar" src={pt1} alt="Patient 1" />
                <img className="avatar" src={pt2} alt="Patient 2" />
                <img className="avatar" src={pt3} alt="Patient 3" />
                <img className="avatar" src={pt4} alt="Patient 4" />
              </div>
              <div className="stats-text">
                <p className="count">150K+ Patients</p>
                <p className="label">Recover</p>
              </div>
            </div>
          </div>

          <div className="hero-image-container">
            <img src={HeroDoctorImg} alt="Professional Doctor" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
