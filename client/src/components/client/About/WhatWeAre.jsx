import React from "react";
import "../../../assets/css/client/About/about.css";
import MainImg from "../../../assets/images/client/aboutdoctor1.webp";
import overLapImg from "../../../assets/images/client/aboutdoctor2.jpeg";
import doctorsTeams from "../../../assets/images/client/doctorsteams.png";
import { Check } from "lucide-react";

const impactData = [
  { value: "35+", label: "Medical Specialties" },
  { value: "250+", label: "Hospital Rooms" },
  { value: "98%", label: "Positive Feedback" },
  { value: "15+", label: "Years of Experience" },
];
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
      <div className="core-value-main">
        <div className="img">
          <img src={doctorsTeams} />
        </div>
        <div className="core-value-info">
          <h5>Core Value</h5>
          <p>
            Aenean ornare pretium sagittis. Cras pretium mauris nisl, eget
            sagittis dolor aliquet vel. Donec rhoncus sapien sed dui pulvinar,
            sed dignissim ex tempus. Integer porttitor euismod dolor, ut tempor
            nisl ultrices ac. Donec consequat sapien est. Donec vulputate.
          </p>
          <div className="core-value-btn">
            <div className="btn">Compassionate Care</div>
            <div className="btn">Clinical Excellence</div>
            <div className="btn">Patient Safety</div>
            <div className="btn">Innovation & Technology</div>
            <div className="btn">Respect & Integrity</div>
          </div>
        </div>
      </div>

      <div className="impact-section">
        <div className="impact-header">
          <h2>Our Impact in Numbers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="impact-card">
          {impactData.map((item, index) => (
            <div key={index} className="impact-item">
              <span className="impact-number">{item.value}</span>
              <p className="impact-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatWeAre;
