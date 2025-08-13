import React from "react";
import "../../../assets/css/client/About/about.css";
import doctorsTeams from "../../../assets/images/client/doctorsteams.png";
import { ArrowUpRight } from "lucide-react";
// You can replace this with your actual image URL

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const WhyTrustUs = () => {
  return (
    <section className="trust-section">
      <div className="trust-header">
        <h6 className="section-heading">WHY CHOOSE US</h6>
        <h2>Why Patients Trust Romedic</h2>
      </div>

      <div className="trust-grid">
        {/* Card 1 */}
        <div className="trust-card card-white">
          <div className="card-icon">
            <ArrowUpRight />
          </div>
          <h3>Highly Experienced & Certified Doctors</h3>
          <p>
            Our team consists of board-certified specialists with years of
            experience in various medical fields.
          </p>
        </div>

        {/* Card 2 */}
        <div className="trust-card card-teal">
          <div className="card-icon">
            <ArrowUpRight />
          </div>
          <h3>State-of-the-Art Medical Facilities</h3>
          <p>
            We use advanced medical technology, ensuring accurate diagnoses and
            effective treatments.
          </p>
        </div>

        {/* Card 3 */}
        <div className="trust-card card-teal1">
          <div className="card-icon">
            <ArrowUpRight />
          </div>
          <h3>Comprehensive & Personalized Treatment</h3>
          <p>
            Every patient receives tailored care, designed to fit their specific
            needs. Lorem ipsum dolor sit, Maecenas sit amet maximus.
          </p>
        </div>

        {/* Card 4 - Image Card */}
        <div
          className="trust-card card-image"
          style={{ backgroundImage: `url(${doctorsTeams})` }}
        >
          <div className="card-content">
            <h3>Multilingual, Patient-Friendly Staff</h3>
            <li>Our team consists of board-certified</li>
            <li>specialists with years of experience</li>
            <li>in various medical fields. Maecenas</li>
            <li>sit amet maximus nisl.</li>
          </div>
        </div>

        {/* Card 5 */}
        <div className="trust-card card-teal">
          <div className="card-icon">
            <ArrowUpRight />
          </div>
          <h3>Commitment to Safety, Quality, and Innovation</h3>
          <p>
            Our team consists of board-certified specialists with years of
            experience in various, Maecenas sit amet maximus nisl.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;
