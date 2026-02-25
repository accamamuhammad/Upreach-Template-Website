"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // High-end brand words to cycle through
  const words = ["Innovation", "Strategy", "Design", "Growth", "Protusweb"];

  useEffect(() => {
    // Progress counter logic
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // Word cycling logic
    const wordInterval = setInterval(() => {
      setIndex((prev) => (prev === words.length - 1 ? prev : prev + 1));
    }, 400);

    return () => {
      clearInterval(interval);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
    >
      <div className="relative flex flex-col items-center">
        {/* Percentage Counter */}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-8xl md:text-[12rem] font-bold opacity-10 absolute -top-24 md:-top-40 tabular-nums"
        >
          {progress}%
        </motion.span>

        {/* Word Reveal */}
        <div className="flex items-center gap-3 overflow-hidden h-12 md:h-20">
          <motion.span 
             className="w-3 h-3 bg-primary rounded-full"
             animate={{ scale: [1, 1.5, 1] }}
             transition={{ repeat: Infinity, duration: 1 }}
          />
          <AnimatePresence mode="wait">
            <motion.h2
              key={words[index]}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-light tracking-tighter"
            >
              {words[index]}
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>

      {/* Modern "Curtain" Slats for the exit animation */}
      <motion.div 
        className="absolute bottom-10 left-10 flex flex-col gap-1 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
      >
        <div className="h-[1px] w-24 bg-white" />
        <p className="text-[10px] uppercase tracking-[0.3em]">Loading Experience</p>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;