"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Play from "../../assets/play.png";
import MainImage from "../../assets/about-us-main.png";

const Video = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl">
      
      {/* IMAGE PREVIEW */}
      {!showVideo && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full h-full group cursor-pointer"
            onClick={() => setShowVideo(true)}
          >
            <Image
              src={MainImage}
              alt="Inside our process"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500" />

            {/* PLAY BUTTON */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative flex items-center gap-4 bg-green-400 text-black px-6 py-4 rounded-full font-medium shadow-xl">

                {/* Pulse Ring */}
                <span className="absolute w-full h-full rounded-full bg-green-400 animate-ping opacity-30"></span>

                <span className="relative bg-black rounded-full p-3 flex items-center justify-center">
                  <Image src={Play} alt="play video" width={14} height={14} />
                </span>

                <span className="relative text-sm md:text-base">
                  Inside our process
                </span>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}

      {/* YOUTUBE VIDEO */}
      {showVideo && (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/xnOwOBYaA3w?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default Video;