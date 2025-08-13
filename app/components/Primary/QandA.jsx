"use client";

import { useState } from "react";
import Image from "next/image";
import Plus from "../../assets/plus.png";
import Close from "../../assets/close.png";

const faqs = [
  {
    question: "How does your marketing approach stand out from competitors?",
    answer:
      "SaaS is subscription-based and centrally hosted. Users pay a recurring fee to access the software over the internet, eliminating the need for upfront costs and ongoing maintenance.",
  },
  {
    question: "What makes your lead generation strategies effective?",
    answer: "",
  },
  {
    question: "How do you accurately measure the success of a campaign?",
    answer: "",
  },
  {
    question: "How can I easily get started with your services today?",
    answer: "",
  },
  {
    question: "What platforms do you specialize in for digital marketing?",
    answer: "",
  },
  {
    question: "Do you offer tailored solutions for different industries?",
    answer: "",
  },
];

const QandA = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-white pt-16 space-y-12 flex flex-col items-center justify-center">
      <section className="space-y-4 text-center">
        <h1 className="px-5 text-5xl font-bold text-[rgb(10,10,10)]">
          Common Questions & Answers
        </h1>
        <p className="px-3 opacity-80 text-[rgb(10,10,10)]">
          Find quick answers to common questions about our services and how we
          <br className="hidden md:block" /> can help you achieve your goals.
        </p>
      </section>
      <div className="max-w-3xl mx-auto p-6 w-full space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[rgb(245,245,245)] rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-4 text-left"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <Image
                src={openIndex === index ? Close : Plus}
                alt={openIndex === index ? "Close" : "Plus"}
                width={15}
                height={15}
              />
            </button>
            {openIndex === index && faq.answer && (
              <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default QandA;
