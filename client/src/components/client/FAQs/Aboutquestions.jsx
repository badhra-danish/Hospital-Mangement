import React from "react";
import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";
import "../../../assets/css/client/FAQs/faqs.css";

const FaqData = [
  {
    question: "What medical services does Romedic provide?",
    answer:
      "Romedic offers a wide range of medical services including general medicine, specialist consultations, preventive health checkups, diagnostic tests, telemedicine, and minor procedures.",
  },
  {
    question: "Do you offer emergency services?",
    answer:
      "Yes, Romedic provides 24/7 emergency medical services for urgent health situations.",
  },
  {
    question: "Can I request a female doctor for specific services?",
    answer:
      "Yes, you can request a female doctor when booking your appointment, and we will do our best to accommodate your preference.",
  },
  {
    question: "Are telemedicine consultations available for all departments?",
    answer:
      "Telemedicine consultations are available for most departments, though certain procedures may still require in-person visits.",
  },
  {
    question: "Can children and seniors get checkups at your clinic?",
    answer:
      "Yes, our clinic offers comprehensive health checkups for all age groups, including children and senior citizens.",
  },
];

const FaqItem = ({ item, index, activeIndex, onToggle }) => {
  const isActive = index === activeIndex;

  return (
    <div className={`faq-item ${isActive ? "active" : ""}`}>
      <button className="faq-question" onClick={() => onToggle(index)}>
        {item.question}
        <span className="faq-icon">
          {isActive ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
      <div className="faq-answer">
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

function AboutQuestions() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    // If the clicked item is already active, close it. Otherwise, open it.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-intro">
        <h6 className="section-heading">FAQs</h6>
        <h1>About Our Services</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Right Side - Accordion */}
      <div className="faq-accordion">
        {FaqData.map((item, index) => (
          <FaqItem
            key={index}
            item={item}
            index={index}
            activeIndex={activeIndex}
            onToggle={handleToggle}
          />
        ))}
      </div>

      {/* Left Side */}
    </div>
  );
}

export default AboutQuestions;
