"use client";

import React from "react";
import { motion } from "framer-motion";
import Video from "../Secondary/Video";

const AboutUs = () => {
  const data = [
    { title: "98%", subTitle: "Client Success Rate" },
    { title: "200+", subTitle: "Campaigns Launched" },
    { title: "$250K+", subTitle: "Revenue Generated" },
  ];

  return (
    <section
      id="about"
      className="bg-primary text-white py-24 px-6 lg:px-16 scroll-mt-24"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          Why we’re the <span className="text-green-400">right choice</span>
        </h2>

        <p className="mt-6 text-lg text-white/70 leading-relaxed">
          We create impactful strategies, refine brand positioning, and drive
          real results through intelligent content and scalable campaigns.
        </p>
      </motion.div>

      {/* VIDEO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 flex justify-center"
      >
        <Video />
      </motion.div>

      {/* STATS */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto"
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            whileHover={{ y: -6 }}
            className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-400/40 transition-all duration-300"
          >
            <h3 className="text-4xl md:text-5xl font-semibold text-green-400">
              {item.title}
            </h3>
            <p className="mt-3 text-white/70 font-light tracking-wide">
              {item.subTitle}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AboutUs;