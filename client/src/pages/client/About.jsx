import React from "react";
import PageHead from "../../components/client/utils/PageHead";
import WhatWeAre from "../../components/client/About/WhatWeAre";
import DoctorDetail from "../../components/client/Home/DoctorDetail";
import WhyTrustUs from "../../components/client/About/WhyTrustUs";
import Testimonial from "../../components/client/Home/Testimonial";
import doctor from "../../assets/images/client/doctorimg1.jpeg";

function About() {
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
        pagename={"ABOUT US"}
        pageheadline={"Trusted Care, Modern Medicine"}
        pageinfo={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
      />
      <WhatWeAre />
      <WhyTrustUs />
      <DoctorDetail doctors={Doctor} limit={4} />
      <Testimonial />
    </>
  );
}

export default About;
