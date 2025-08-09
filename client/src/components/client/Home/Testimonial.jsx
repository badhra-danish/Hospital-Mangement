import React from "react";
import pitimg from "../../../assets/images/client/pt2.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
function Testimonial() {
  const Testimonial = [
    {
      img: pitimg,
      name: "Badhra ",
      description:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis rerum et doloribus? Quidem dolor exercitationem impedit totam",
    },
    {
      img: pitimg,
      name: "patel ",
      description:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis rerum et doloribus? Quidem dolor exercitationem impedit totam",
    },
    {
      img: pitimg,
      name: "Jhon Deo",
      description:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis rerum et doloribus? Quidem dolor exercitationem impedit totam",
    },
    {
      img: pitimg,
      name: "Alice",
      description:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis rerum et doloribus? Quidem dolor exercitationem impedit totam",
    },
    {
      img: pitimg,
      name: "Mark",
      description:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis rerum et doloribus? Quidem dolor exercitationem impedit totam",
    },
    {
      img: pitimg,
      name: "Jeo ",
      description:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis rerum et doloribus? Quidem dolor exercitationem impedit totam",
    },
    {
      img: pitimg,
      name: "Smith",
      description:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis rerum et doloribus? Quidem dolor exercitationem impedit totam",
    },
  ];

  return (
    <>
      <div className="testimonial-main-container">
        <div className="testimonial-head">
          <h6 className="section-heading">WHAT OUR PATIENTS SAYS</h6>
          <p>Patient Experiences That Speak for Themselves</p>
        </div>
        <div className="testimonial-detail">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30} // space between slides
            slidesPerView={3} // number of slides visible at once
            // navigation // show next/prev arrows
            // pagination={{ clickable: true }} // show dots
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            loop={true} // infinite loop
          >
            {Testimonial.map((test) => (
              <SwiperSlide>
                <div className="testimonial-card">
                  <div class="quote-icon">
                    <span class="quote-mark">”</span>
                  </div>
                  <img src={test.img} />
                  <h4>{test.name}</h4>
                  <p>{test.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
