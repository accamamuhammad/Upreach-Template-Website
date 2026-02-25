"use client";

import React from "react";
import { motion } from "framer-motion";

import PrimaryBtn from "../Secondary/PrimaryBtn";
import SecondaryBtn from "../Secondary/SecondaryBtn";
import HeroIllustration from "../Secondary/HeroIllustration";
import Sponsors from "../Secondary/Sponsors";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
  return (
    <main className="relative px-6 lg:px-16 pt-16 pb-20 flex flex-col lg:flex-row items-center justify-between text-white bg-primary overflow-hidden">
      
      {/* TEXT SIDE */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full lg:w-1/2 text-center lg:text-left"
      >
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl lg:text-[4rem] leading-tight font-semibold tracking-tight"
        >
          Grow your business,{" "}
          <span className="text-green-400">
            master every move.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-[1rem] lg:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
        >
          Helping businesses thrive with innovative digital strategies,
          creative solutions, and measurable outcomes.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-4"
        >
          <a
            href="https://tidycal.com/protusweb/15-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PrimaryBtn title="Book a call" />
          </a>

          <SecondaryBtn title="Learn more" />
        </motion.div>

        {/* SPONSORS */}
        <motion.div variants={item} className="mt-14">
          <Sponsors />
        </motion.div>
      </motion.section>

      {/* IMAGE SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 mt-14 lg:mt-0"
      >
        <HeroIllustration />
      </motion.div>
    </main>
  );
};

export default Hero;