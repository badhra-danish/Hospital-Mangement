import React from "react";
import "../../../assets/css/client/utils/blogcard.css";
import { Calendar } from "lucide-react";
import BlogImg1 from "../../../assets/images/client/Blogimg.jpg";
import BlogImg2 from "../../../assets/images/client/Blogimg1.jpg";
function BlogCard({ img, title, date, info }) {
  return (
    <>
      <div className="blog-card-main">
        <img src={img} />
        <div className="blog-info">
          <h5>{title}</h5>
          <span>
            <Calendar className="calender" />
            {date}
          </span>
          <p>{info}</p>

          <button>Read More</button>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
