import React from "react";
import "../../../assets/css/client/BlogsPage/blogs.css";
import BlogCard from "../utils/BlogCard";

import BlogImg1 from "../../../assets/images/client/Blogimg.jpg";
import BlogImg2 from "../../../assets/images/client/Blogimg1.jpg";
import BlogImg3 from "../../../assets/images/client/Blogimg3.jpg";
import BlogImg4 from "../../../assets/images/client/Blogimg4.jpg";
import BlogImg5 from "../../../assets/images/client/Blogimg5.jpg";
import BlogImg6 from "../../../assets/images/client/Blogimg6.jpg";
function Blogs() {
  const Blogs = [
    {
      img: BlogImg1,
      title: "How to Prepare for Your First Telemedicine Consultation",
      date: "June 20, 2025",
      info: "Aenean ornare pretium sagittis. Cras pretium mauris nisl, eget sagittis…",
    },
    {
      img: BlogImg2,
      title: "Pediatric Health Checklist: What Every Parent Should Know",
      date: "June 20, 2025",
      info: "Aenean ornare pretium sagittis. Cras pretium mauris nisl, eget sagittis…",
    },
    {
      img: BlogImg3,
      title: "The Importance of Regular Health Checkups for Adults Over 30",
      date: "June 20, 2025",
      info: "Aenean ornare pretium sagittis. Cras pretium mauris nisl, eget sagittis…",
    },
    {
      img: BlogImg4,
      title: "Women’s Health 101: What to Expect During a Gynecology Visit",
      date: "June 20, 2025",
      info: "Aenean ornare pretium sagittis. Cras pretium mauris nisl, eget sagittis…",
    },
    {
      img: BlogImg5,
      title: "Understanding Common Diagnostic Tests and What They Reveal",
      date: "June 20, 2025",
      info: "Aenean ornare pretium sagittis. Cras pretium mauris nisl, eget sagittis…",
    },
    {
      img: BlogImg6,
      title: "Emergency Room vs. Urgent Care: Where Should You Go?",
      date: "June 20, 2025",
      info: "Aenean ornare pretium sagittis. Cras pretium mauris nisl, eget sagittis…",
    },
  ];
  return (
    <>
      <div className="blogs-container">
        {Blogs?.map((blog) => (
          <BlogCard
            img={blog.img}
            title={blog.title}
            date={blog.date}
            info={blog.info}
          />
        ))}
      </div>
    </>
  );
}

export default Blogs;
