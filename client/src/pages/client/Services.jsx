import React from "react";
import PageHead from "../../components/client/utils/PageHead";
import WhatOffer from "../../components/client/Home/WhatOffer";
import BookAppointment from "../../components/client/Home/Appointment";
import HowItWorks from "../../components/client/Home/HowIisWork";
import Whychooseus from "../../components/client/Home/Whychooseus";
function Services() {
  return (
    <>
      <PageHead
        pagename={"OUR SERVICES"}
        pageheadline={"Trusted Medical Services"}
        pageinfo={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
      />
      <WhatOffer />
      <BookAppointment />
      <HowItWorks />
      <Whychooseus />
    </>
  );
}

export default Services;
