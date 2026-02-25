"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import DocumentIcon from "../../assets/document.png";
import PercentIcon from "../../assets/percent.png";
import HandShakeIcon from "../../assets/hand-shake.png";
import Route from "../../assets/route.png";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Services = () => {
  const data = [
    {
      title: "Brand Strategy",
      icon: DocumentIcon,
      description:
        "Building a powerful, data-driven brand identity that resonates, inspires, and drives long-term success.",
    },
    {
      title: "Lead Generation",
      icon: PercentIcon,
      description:
        "Optimize advanced funnels, automate processes, and boost customer conversions to generate leads.",
    },
    {
      title: "Digital Marketing",
      icon: HandShakeIcon,
      description:
        "Maximize online visibility with paid ads, social media, and strategic SEO to drive targeted traffic and higher conversions.",
    },
    {
      title: "Strategic Planning",
      icon: Route,
      description:
        "Generate high-quality leads through targeted campaigns and optimized funnels for maximum conversions.",
    },
  ];

  return (
    <section
      id="service"
      className="bg-[rgb(250,250,250)] scroll-mt-20 py-20 px-6 lg:px-16"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          What we <span className="text-green-500">Offer</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Comprehensive solutions designed to scale your business intelligently.
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {data.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group bg-[rgb(245,245,245)] p-8 rounded-3xl space-y-6 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* ICON */}
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition">
              <Image
                src={service.icon}
                alt={service.title}
                width={24}
                height={24}
              />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed text-[0.95rem]">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;