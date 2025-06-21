import React, { useState } from "react";

const faqs = [
  {
    question: "How do I book a tattoo session?",
    answer:
      "You can book directly through our website by visiting the 'Booking' page and filling out the form. You’ll receive a confirmation via email shortly after.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "Yes, but availability depends on the artist’s schedule. We recommend booking in advance to guarantee your spot.",
  },
  {
    question: "Is it painful to get a tattoo?",
    answer:
      "Pain varies depending on the area and your tolerance, but we aim to make you as comfortable as possible during your session.",
  },
  {
    question: "How should I prepare for my tattoo appointment?",
    answer:
      "Get plenty of rest, eat well, and stay hydrated. Avoid alcohol or blood-thinning meds before your session.",
  },
  {
    question: "Do you offer custom tattoo designs?",
    answer:
      "Absolutely. Joker Tattoo specializes in personalized artwork tailored to your story and vision.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#2d2d2d] via-[#3c1e1e] to-[#7b1e1e] text-white"
      style={{ fontFamily: '"Cormorant Garamond", serif' }}
    >
      {/* Title */}
      <h1
        className="text-5xl md:text-6xl font-[Cinzel_Decorative] uppercase tracking-widest text-center mb-16"
        style={{
          background: "linear-gradient(90deg, #ff4444, #ffffff, #ff4444)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: '"Cinzel Decorative", cursive',
        }}
      >
        Frequently Asked Questions
      </h1>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-red-600 rounded-lg overflow-hidden bg-zinc-900"
          >
            <button
              className="w-full text-left px-6 py-4 text-xl font-semibold flex justify-between items-center hover:bg-zinc-800 transition"
              onClick={() => toggle(index)}
            >
              {faq.question}
              <span className="text-red-400">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-300 transition duration-300 ease-in-out">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
