import React from "react";
import "../../../assets/css/client/Home/home.css";
import DoctorCard from "../utils/DoctorCard";
import doctor from "../../../assets/images/client/doctorimg1.jpeg";
function DoctorDetail() {
  const Doctor = [
    {
      img: doctor,
      name: "Dr. James Whitman",
      specilization: "Pediatric Specialist",
    },
    {
      img: doctor,
      name: "Dr. James Whitman",
      specilization: "Pediatric Specialist",
    },
    {
      img: doctor,
      name: "Dr. James Whitman",
      specilization: "Pediatric Specialist",
    },
    {
      img: doctor,
      name: "Dr. James Whitman",
      specilization: "Pediatric Specialist",
    },
  ];
  return (
    <>
      <div className="Doctor-detail-main">
        <div className="doctor-detail-head">
          <h6 className="section-heading">Our Medical Experts</h6>
          <p>Your Health in the Hands of Trusted Experts</p>
        </div>
        <div className="Doctor-collection">
          {Doctor?.map((doctor) => (
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
