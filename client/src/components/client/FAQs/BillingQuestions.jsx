import React from "react";
import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";
import "../../../assets/css/client/FAQs/faqs.css";

const faqData = [
  {
    question: "How do I book an appointment?",
    answer:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
  },
  {
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "Yes, you can reschedule or cancel. Please provide at least 24 hours notice to avoid a cancellation fee. You can manage your appointments through your online portal or by calling our front desk.",
  },
  {
    question: "Do I need a referral to see a specialist?",
    answer:
      "This depends on your insurance plan. Many PPO plans do not require a referral, while most HMO plans do. We recommend checking with your insurance provider directly to confirm their requirements.",
  },
  {
    question: "What happens if I'm late for my appointment?",
    answer:
      "We have a 15-minute grace period. If you arrive later than 15 minutes after your scheduled appointment time, we may need to reschedule your visit to ensure our providers stay on schedule for all patients.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For routine check-ups, we recommend booking 2-4 weeks in advance. For urgent issues, we reserve a number of same-day appointments. Please call our office as early as possible for urgent availability.",
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
