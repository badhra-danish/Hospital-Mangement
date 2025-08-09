import React from "react";
import "../../../assets/css/client/utils/blogcard.css";
import { Calendar } from "lucide-react";
import BlogImg1 from "../../../assets/images/client/Blogimg.jpg";
function BlogCard({ img, title, date, description }) {
  return (
    <>
      <div className="blog-card-main">
        <img src={BlogImg1} />
        <div className="blog-info">
          <h5>How to Prepare for Your First Telemedicine Consultation</h5>
          <span>
            <Calendar className="calender" />
            June 20, 2025
          </span>
          <p>
            Aenean ornare pretium sagittis. Cras pretium mauris nisl, eget
            sagittis…
          </p>

          <button>Read More</button>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
