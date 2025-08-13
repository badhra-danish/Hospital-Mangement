import React from "react";
import "../../../assets/css/client/Home/home.css";
import checkup from "../../../assets/images/client/checkup.jpeg";
import heart from "../../../assets/images/client/heart.jpeg";
import emc from "../../../assets/images/client/emc.jpeg";
import doctorcheckup from "../../../assets/images/client/doctorcheckup.jpeg";
import emccheckup from "../../../assets/images/client/emccheckup.jpeg";
import cardiocheckup from "../../../assets/images/client/cardiocheckup.jpeg";
import servIconFamily from "../../../assets/images/client/serIconfamily.png";
import servImgfamily from "../../../assets/images/client/serImgfamily.jpg";
import servIconOrtho from "../../../assets/images/client/serIconorthopadic.png";
import servImgortho from "../../../assets/images/client/servimgorthopadic.jpg";
import servIconlab from "../../../assets/images/client/serIconlab.png";
import servImglab from "../../../assets/images/client/servimglab.jpg";
import Servicecard from "../utils/Servicecard";
import { CircleArrowRight } from "lucide-react";

function WhatOffer({ services, limit }) {
  const displayServises = limit ? services.slice(0, limit) : services;

  return (
    <>
      <div className="what-offer-wrapper">
        <div className="offer-head">
          <div className="offer-head-left">
            <p className="section-heading">WHAT WE OFFER</p>
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
          {displayServises?.map((service) => (
            <Servicecard
              serIcon={service.sericon}
              serType={service.sertype}
              serImg={service.serimg}
              serInfo={service.serinfo}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default WhatOffer;
