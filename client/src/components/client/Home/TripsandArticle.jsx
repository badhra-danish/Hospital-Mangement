import React from "react";
import BlogCard from "../utils/BlogCard";
import BlogImg1 from "../../../assets/images/client/Blogimg.jpg";
function TripsandArticle() {
  return (
    <>
      <div className="TipsArtical-main-container">
        <div className="tripsArtical-left-parts">
          <h6 className="section-heading">Health Tips & Articles</h6>
          <h3>Latest News from Romedic</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="tripsArtical-right-parts">
          <BlogCard
            img={BlogImg1}
            title={"How to Prepare for Your First Telemedicine Consultation"}
            date={"June 20, 2025"}
            info={
              "Aenean ornare pretium sagittis. Cras pretium mauris nisl, eget sagittis…"
            }
          />
          <BlogCard
            img={BlogImg1}
            title={"How to Prepare for Your First Telemedicine Consultation"}
            date={"June 20, 2025"}
            info={
              "Aenean ornare pretium sagittis. Cras pretium mauris nisl, eget sagittis…"
            }
          />
        </div>
      </div>
    </>
  );
}

export default TripsandArticle;
