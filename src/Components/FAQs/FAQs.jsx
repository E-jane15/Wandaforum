import React, { useState } from "react";

const FAQSection = () => {
  // FAQ data
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula sapien id hendrerit convallis.",
    },
    {
      question: "Lorem ipset, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
    },
    {
      question: "Lorem i dolor sit amet, consectetur adipisicing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt nulla ut metus.",
    },
    {
      question: "Lorem ipsum dolor sit asectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu nec nisl tincidunt.",
    },
  ];

  // State to track open questions
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" text-white py-16 px-6 mt-24">
      <div className="max-w-6xl ml-12">
        <h2 className="text-5xl font-medium text-white text-left">
          Frequently <span className="text-orange">Asked Questions</span>
        </h2>
        <div className="mt-8 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-500 pb-4">
              {/* Question */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  &#x25BC; {/* Down chevron */}
                </span>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-4 text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
