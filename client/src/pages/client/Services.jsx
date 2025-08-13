import React from "react";
import PageHead from "../../components/client/utils/PageHead";
import WhatOffer from "../../components/client/Home/WhatOffer";
import BookAppointment from "../../components/client/Home/Appointment";
import HowItWorks from "../../components/client/Home/HowIisWork";
import Whychooseus from "../../components/client/Home/Whychooseus";
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
function Services() {
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
  return (
    <>
      <PageHead
        pagename={"OUR SERVICES"}
        pageheadline={"Trusted Medical Services"}
        pageinfo={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
      />
      <WhatOffer services={servises} />
      <BookAppointment />
      <HowItWorks />
      <Whychooseus />
    </>
  );
}

export default Services;
