import React from "react";
import "../../../assets/css/client/About/about.css";
import MainImg from "../../../assets/images/client/aboutdoctor1.webp";
import overLapImg from "../../../assets/images/client/aboutdoctor2.jpeg";
import { Check } from "lucide-react";
function WhatWeAre() {
  const [openMission, setOpenMission] = React.useState(true);
  const handleClickMission = () => {
    setOpenMission((prev) => !prev);
  };
  return (
    <div className="who-we-are-main-container">
      <div className="who-we-are-main">
        <div className="who-we-are-left-part">
          <div className="left-head-info">
            <h6 className="section-heading">WHAT WE ARE</h6>
            <h2>Committed to Excellence in Healthcare</h2>
            <p>
              At Romedic, we believe that quality healthcare should be
              accessible, efficient, and patient-centered. Our team of
              experienced medical professionals and cutting-edge facilities
              ensure that every patient.
            </p>
          </div>
          <div className="left-list-div">
            <li>
              <Check className="check-icon" />
              Expert Medical Team
            </li>
            <li>
              <Check className="check-icon" />
              Comprehensive Care
            </li>
            <li>
              <Check className="check-icon" />
              Advanced Medical Technology
            </li>
            <li>
              <Check className="check-icon" />
              Patient-Centered Approach
            </li>
          </div>
          <div className="commitment-wrapper">
            <p>
              With a commitment to innovation and excellence, we combine
              advanced medical technology with a personalized approach to care.
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="who-we-are-right-part">
          <div className="team-stats-container">
            {/* The large background image */}
            <img
              alt="Group of medical professionals"
              src={MainImg}
              className="main-image"
            />

            {/* The bottom overlapping image */}
            <img
              src={overLapImg}
              alt="Medical team with a young patient"
              className="overlap-image bottom"
            />

            {/* The statistics box */}
            <div className="stats-box">
              <h2 className="stats-number">200+</h2>
              <p className="stats-text">
                Consultation Each
                <br />
                Month
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="our-mission-section">
        <div className="our-mission-card">
          <div className="mission-head" onClick={handleClickMission}>
            Our Mission
          </div>
          {openMission && (
            <div className="mission-info">
              <p>
                {" "}
                To deliver accessible, high-quality medical care focused on
                empathy, innovation, and long-term health outcomes. Donec
                sodales vulputate lorem eu lacinia. Aenean ultricies lacus nec
                urna lobortis lobortis.
              </p>
            </div>
          )}
        </div>
        <div className="our-mission-card">
          <div className="mission-head" onClick={handleClickMission}>
            Our Mission
          </div>

          {openMission && (
            <div className="mission-info">
              <p>
                {" "}
                To be the leading patient-centered healthcare provider, trusted
                by families and communities across the region. Donec sodales
                vulputate lorem eu lacinia. Aenean ultricies lacus nec urna
                lobortis lobortis.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WhatWeAre;
