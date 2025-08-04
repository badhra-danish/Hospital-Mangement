import React from "react";
import "../../../assets/css/client/Home/home.css";
import checkup from "../../../assets/images/client/checkup.jpeg";
import heart from "../../../assets/images/client/heart.jpeg";
import emc from "../../../assets/images/client/emc.jpeg";
import doctorcheckup from "../../../assets/images/client/doctorcheckup.jpeg";
import emccheckup from "../../../assets/images/client/emccheckup.jpeg";
import cardiocheckup from "../../../assets/images/client/cardiocheckup.jpeg";
function WhatOffer() {
  return (
    <>
      <div className="what-offer-wrapper">
        <div className="offer-head">
          <div className="offer-head-left">
            <h6 className="section-heading">WHAT WE OFFER</h6>
            <h2>Comprehensive Medical Services for Every Stage of Life</h2>
          </div>
          <div className="offer-head-right">
            <p>
              We are committed to delivering world-class healthcare that is
              accessible, efficient, and patient-centered.{" "}
            </p>
            <button className="head-btn">View More</button>
          </div>
        </div>
        <div className="offer-types-main">
          <div className="offer-type">
            <div className="type-head">
              <img src={checkup} />
              <p>General Health Checkups</p>
            </div>
            <div className="type-img">
              <img src={doctorcheckup} />
            </div>
            <div className="type-description">
              <p>
                Regular health assessments for early disease detection. Lorem
                ipsum dolor sit amet.
              </p>
              <button className="type-btn">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatOffer;
