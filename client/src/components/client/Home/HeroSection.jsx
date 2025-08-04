import React from "react";
import "../../../assets/css/client/Home/home.css";
import HeroDoctorImg from "../../../assets/images/client/herodoctor.jpg";
import pt1 from "../../../assets/images/client/pt1.jpeg";
import pt2 from "../../../assets/images/client/pt2.jpeg";
import pt3 from "../../../assets/images/client/pt3.jpeg";
import pt4 from "../../../assets/images/client/pt4.jpeg";
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

        <div className="exprience-section">
          <div className="exprience-left-div">
            <h1>15+</h1>
            <h6>Years of Exprience</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
              voluptatum!
            </p>
          </div>
          <div className="exprience-right-div">
            <div className="left-description">
              <h5>Join a thriving health and wellness community</h5>
              <p>Over 1 million users trust Romedic for their medical needs.</p>
            </div>
            <div className="right-description">
              <div>
                <h2>20+</h2>
                <p>Medical Specialist</p>
              </div>
              <div>
                <h2>35+</h2>
                <p>Hospital Rooms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
