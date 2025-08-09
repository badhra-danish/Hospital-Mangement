import React from "react";
import HeroSection from "../../components/client/Home/HeroSection";
import WhatOffer from "../../components/client/Home/WhatOffer";
import Whychooseus from "../../components/client/Home/Whychooseus";
import HowItWorks from "../../components/client/Home/HowIisWork";
import BookAppointment from "../../components/client/Home/Appointment";
import DoctorDetail from "../../components/client/Home/DoctorDetail";
import Testimonial from "../../components/client/Home/Testimonial";
import TripsandArticle from "../../components/client/Home/TripsandArticle";
function Home() {
  return (
    <>
      <HeroSection />
      <WhatOffer />
      <Whychooseus />
      <HowItWorks />
      <BookAppointment />
      <DoctorDetail />
      <Testimonial />
      <TripsandArticle />
    </>
  );
}

export default Home;
