import React from "react";
import PageHead from "../../components/client/utils/PageHead";
import WhatWeAre from "../../components/client/About/WhatWeAre";
import DoctorDetail from "../../components/client/Home/DoctorDetail";
import WhyTrustUs from "../../components/client/About/WhyTrustUs";
import Testimonial from "../../components/client/Home/Testimonial";

function About() {
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
      <DoctorDetail />
      <Testimonial />
    </>
  );
}

export default About;
