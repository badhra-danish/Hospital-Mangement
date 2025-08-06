import React from "react";
import "../../../assets/css/client/Home/home.css";
// Make sure to replace this with the actual path to your image
import doctorImage from "../../../assets/images/client/doctorimg.jpg";

// Data for the steps - easy to update or extend
const stepsData = [
  {
    number: "01",
    title: "Choose Your Service",
    description: "Browse our range of medical specialties",
  },
  {
    number: "02",
    title: "Book Your Appointment",
    description: "Pick a time that fits your schedule",
  },
  {
    number: "03",
    title: "Consult with Our Experts",
    description: "In-person or via telemedicine",
  },
  {
    number: "04",
    title: "Get Personalized Treatment",
    description: "Receive care that fits your unique needs",
  },
];

const HowItWorks = () => {
  return (
    <div className="how-it-works-section">
      <div className="how-its-work-main">
        <div className="how-it-works-content">
          <div className="header-text">
            <p className="section-heading">HOW IT WORKS</p>
            <h2>How It Works in 4 Easy Steps</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        <div className="how-it-works-image-wrapper">
          <img src={doctorImage} alt="Doctor consulting with a patient" />
        </div>
      </div>

      <div className="steps-container">
        {stepsData.map((step) => (
          <div className="step-card" key={step.number}>
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
