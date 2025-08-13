import React from "react";
import "../../../assets/css/client/Home/home.css";
import DoctorCard from "../utils/DoctorCard";

function DoctorDetail({ doctors, limit }) {
  const displayDoctor = limit ? doctors.slice(0, limit) : doctors;

  return (
    <>
      <div className="Doctor-detail-main">
        <div className="doctor-detail-head">
          <h6 className="section-heading">Our Medical Experts</h6>
          <p>Your Health in the Hands of Trusted Experts</p>
        </div>
        <div className="Doctor-collection">
          {displayDoctor?.map((doctor) => (
            <DoctorCard
              img={doctor.img}
              doctorName={doctor.name}
              specialist={doctor.specilization}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DoctorDetail;
