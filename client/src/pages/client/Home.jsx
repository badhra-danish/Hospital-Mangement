import React from "react";

import HeroSection from "../../components/client/Home/HeroSection";
import WhatOffer from "../../components/client/Home/WhatOffer";
import Whychooseus from "../../components/client/Home/Whychooseus";
import HowItWorks from "../../components/client/Home/HowIisWork";
import BookAppointment from "../../components/client/Home/Appointment";
import DoctorDetail from "../../components/client/Home/DoctorDetail";
import Testimonial from "../../components/client/Home/Testimonial";
import TripsandArticle from "../../components/client/Home/TripsandArticle";
//  services Icon Image
import serIconcheckup from "../../assets/images/client/checkup.jpeg";
import serImgcheckup from "../../assets/images/client/doctorcheckup.jpeg";
import serIconheart from "../../assets/images/client/heart.jpeg";
import serImageheart from "../../assets/images/client/cardiocheckup.jpeg";
import serIconemc from "../../assets/images/client/emc.jpeg";
import serImgemc from "../../assets/images/client/emccheckup.jpeg";
import servIconFamily from "../../assets/images/client/serIconfamily.png";
import servImgfamily from "../../assets/images/client/serImgfamily.jpg";
import servIconOrtho from "../../assets/images/client/serIconorthopadic.png";
import servImgortho from "../../assets/images/client/servimgorthopadic.jpg";
import servIconlab from "../../assets/images/client/serIconlab.png";
import servImglab from "../../assets/images/client/servimglab.jpg";
import doctor from "../../assets/images/client/doctorimg1.jpeg";
function Home() {
  const servises = [
    {
      sericon: serIconcheckup,
      sertype: "General Health Checkups",
      serimg: serImgcheckup,
      serinfo:
        "Regular health assessments for early disease detection. Loremipsum dolor sit amet.",
    },

    {
      sericon: serIconemc,
      sertype: "General Health Checkups",
      serimg: serImgemc,
      serinfo:
        "Regular health assessments for early disease detection. Loremipsum dolor sit amet.",
    },
    {
      sericon: serIconheart,
      sertype: "General Health Checkups",
      serimg: serImageheart,
      serinfo:
        "Regular health assessments for early disease detection. Loremipsum dolor sit amet.",
    },
    {
      sericon: servIconFamily,
      sertype: "General Health Checkups",
      serimg: servImgfamily,
      serinfo:
        "Regular health assessments for early disease detection. Loremipsum dolor sit amet.",
    },
    {
      sericon: servIconOrtho,
      sertype: "General Health Checkups",
      serimg: servImgortho,
      serinfo:
        "Regular health assessments for early disease detection. Loremipsum dolor sit amet.",
    },
    {
      sericon: servIconlab,
      sertype: "General Health Checkups",
      serimg: servImglab,
      serinfo:
        "Regular health assessments for early disease detection. Loremipsum dolor sit amet.",
    },
  ];

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
      <HeroSection />
      <WhatOffer services={servises} limit={3} />
      <Whychooseus />
      <HowItWorks />
      <BookAppointment />
      <DoctorDetail doctors={Doctor} limit={4} />
      <Testimonial />
      <TripsandArticle />
    </>
  );
}

export default Home;
