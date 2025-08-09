import React from "react";
import "../../../assets/css/client/utils/doctorcard.css";
import doctor from "../../../assets/images/client/doctorimg1.jpeg";
function DoctorCard({ img, doctorName, specialist }) {
  return (
    <>
      <div className="Doctor-crad-main">
        <div className="doctor-card">
          <img src={img} />
          <div className="doctor-info">
            <h5>{doctorName}</h5>
            <p> {specialist}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorCard;
