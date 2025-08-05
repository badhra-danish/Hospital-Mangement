import React from "react";
import "../../../assets/css/client/Home/home.css";
import choose1img from "../../../assets/images/client/chooseus1.jpg";
import choose2img from "../../../assets/images/client/chooseus2.jpeg";
import { Clock5 } from "lucide-react";
function Whychooseus() {
  return (
    <>
      <div className="chooseus-main-container">
        <div className="chooseus-left-div">
          <div className="left-coloum">
            <div className="left-img-card">
              <img src={choose1img} />
            </div>
            <div className="left-card-info">
              <h3>
                <Clock5 className="support-clock" />
                24/7 Support
              </h3>
              <p>
                Curabitur cursus, erat eu laoreet tincidunt, urna nisi
                scelerisque tellus.
              </p>
            </div>
          </div>

          <div className="right-coloum">
            <div className="right-card-info">
              <h2>98%</h2>
              <p>Positive Feedback</p>
            </div>

            <div className="right-img-card">
              <img src={choose2img} />
            </div>
          </div>
        </div>
        <div className="chooseus-right-div-main">
          <div className="chooseus-right">
            <h6 className="section-heading"> WHY CHOOSE US</h6>
            <h3>Why Patients Trust Romedic</h3>
            <p className="right-div-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              Curabitur cursus, erat eu laoreet tincidunt.
            </p>
            <div className="info-list">
              <ul>
                <li>Highly Experienced & Certified Doctors</li>
                <li>State-of-the-Art Medical Facilities</li>
                <li>Comprehensive & Personalized Treatment</li>
                <li>Commitment to Safety, Quality, and Innovation</li>
                <li>Multilingual, Patient-Friendly Staff</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whychooseus;
