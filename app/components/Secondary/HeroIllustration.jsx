"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import HeroImage from "../../assets/Hero-main-Mobile.png";
import TrophyIcon from "../../assets/trophy.png";
import LightIcon from "../../assets/lightning.png";
import TrendIcon from "../../assets/trend.png";

const HeroIllustration = () => {
  return (
    <div className="relative w-full flex items-center justify-center lg:justify-end">
      
      {/* HERO IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <Image
            src={HeroImage}
            alt="Hero dashboard preview"
            className="rounded-2xl shadow-2xl w-[380px] sm:w-[480px] lg:w-[520px] xl:w-[580px]"
            priority
          />
        </motion.div>
      </motion.div>

      {/* FLOATING STATS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-10 lg:translate-x-0 space-y-4">

        {/* Small Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-2"
        >
          <Image src={TrophyIcon} alt="trophy" width={18} height={18} />
          <p className="text-sm text-white/90">
            <span className="font-semibold">2K+</span> Success Stories
          </p>
        </motion.div>

        {/* Main Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.03 }}
          className="w-[240px] p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
            <Image src={LightIcon} alt="lightning" width={20} height={20} />
          </div>

          <div>
            <p className="text-sm text-white/90">
              Your Growth, Our Mission
            </p>

            <div className="flex items-center gap-2 mt-1">
              <Image src={TrendIcon} alt="trend" width={16} height={16} />
              <p className="text-xs text-white/80">
                <span className="font-semibold text-white">+65%</span> ROI Boost
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroIllustration;