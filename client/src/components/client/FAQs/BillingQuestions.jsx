import React from "react";
import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";
import "../../../assets/css/client/FAQs/faqs.css";

const faqData = [
  {
    question: "Which insurance providers do you accept?",
    answer:
      "Romedic accepts most major national and international health insurance providers. Please contact our reception or visit our website for the complete list.",
  },
  {
    question: "Can I pay out-of-pocket if I don’t have insurance?",
    answer:
      "Yes, you can choose to pay directly without insurance. We accept cash, credit/debit cards, and digital payments.",
  },
  {
    question: "Do you offer payment plans for large procedures?",
    answer:
      "Yes, we offer flexible payment plans for eligible large procedures to make treatment more affordable.",
  },
  {
    question: "Will I get a cost estimate before treatment?",
    answer:
      "Yes, we provide a detailed cost estimate before starting any treatment so you can make an informed decision.",
  },
  {
    question: "Is telemedicine covered by insurance?",
    answer:
      "Many insurance providers now cover telemedicine services. Coverage depends on your specific plan, so we recommend checking with your insurer.",
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

function BillingQuestions() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    // If the clicked item is already active, close it. Otherwise, open it.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-intro">
        <h6 className="section-heading">FAQs</h6>
        <h1>Billing, Insurance & Payments</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Right Side - Accordion */}
      <div className="faq-accordion">
        {faqData.map((item, index) => (
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

export default BillingQuestions;
