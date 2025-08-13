import React from "react";
import DoctorDetail from "../../components/client/Home/DoctorDetail";
import PageHead from "../../components/client/utils/PageHead";
import BookAppointment from "../../components/client/Home/Appointment";
import doctor from "../../assets/images/client/doctorimg1.jpeg";
import HowItWorks from "../../components/client/Home/HowIisWork";
import Whychooseus from "../../components/client/Home/Whychooseus";
function Doctor() {
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
      <PageHead
        pagename={"OUR DOCTORS"}
        pageheadline={"The Professional Doctors"}
        pageinfo={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
      />
      <DoctorDetail doctors={Doctor} />
      <BookAppointment />
      <HowItWorks />
      <Whychooseus />
    </>
  );
}

export default Doctor;
