"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Plus from "../../assets/plus.png";
import Close from "../../assets/close.png";

const faqs = [
  {
    question: "How does your marketing approach stand out from competitors?",
    answer:
      "Our platform transforms marketing with data-driven insights, seamless integrations, and intuitive tools, giving your campaigns a competitive edge.",
  },
  {
    question: "What makes your lead generation strategies effective?",
    answer:
      "We leverage optimized funnels, automation, and targeted outreach to maximize high-quality leads while minimizing wasted effort.",
  },
  {
    question: "How do you accurately measure the success of a campaign?",
    answer:
      "Every campaign is tracked with analytics and KPIs, so you can see ROI, engagement metrics, and conversion performance in real-time.",
  },
  {
    question: "How can I easily get started with your services today?",
    answer:
      "Simply book a consultation through our website, and our team will guide you through a customized plan to get started quickly.",
  },
  {
    question: "What platforms do you specialize in for digital marketing?",
    answer:
      "We specialize in social media, paid ads, SEO, email campaigns, and emerging channels to reach your audience effectively.",
  },
  {
    question: "Do you offer tailored solutions for different industries?",
    answer:
      "Yes! Our strategies are customized based on your industry, target audience, and business goals for maximum impact.",
  },
];

const QandA = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 px-6 scroll-mt-24">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-[rgb(10,10,10)]">
          Common <span className="text-green-500">Questions & Answers</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Find quick answers to common questions about our services and how we
          can help you achieve your goals.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            layout
            initial={{ borderRadius: 12 }}
            className="bg-[rgb(245,245,245)] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`flex justify-between items-center w-full p-5 text-left transition-colors duration-200 ${
                openIndex === index ? "bg-green-50" : ""
              }`}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <Image
                src={openIndex === index ? Close : Plus}
                alt={openIndex === index ? "Close" : "Plus"}
                width={18}
                height={18}
                className={`cursor-pointer transition-transform duration-200 transform ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
              />
            </button>

            <AnimatePresence>
              {openIndex === index && faq.answer && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-5 pb-5 text-gray-700 text-[0.95rem] leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QandA;