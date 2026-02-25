'use client'

import React from "react";
import { motion } from "framer-motion"; // Modern animation library
import PrimaryBtn from "../Secondary/PrimaryBtn";

const CTA = () => {
  return (
    <main className="bg-white py-24 flex flex-col items-center justify-center overflow-hidden">
      <motion.section 
        // 1. Entrance Animation
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        
        // 2. Subtle "Float" interaction
        whileHover={{ y: -5 }}
        
        className="relative w-[92%] md:w-[850px] py-16 px-6 rounded-[2.5rem] space-y-8 text-center bg-primary text-white shadow-2xl shadow-primary/20"
      >
        {/* Decorative Background Element for "Modern" feel */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[2.5rem] pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Ready to elevate your brand <br className="hidden md:block" />
            and <span className="text-white/90 italic">unlock new growth?</span>
          </h1>
          
          <p className="max-w-xl mx-auto opacity-90 font-light text-lg leading-relaxed">
            With years of experience, we've helped businesses generate
            millions in revenue. Partner with us to scale confidently.
          </p>

          <div className="pt-4 inline-block">
             <PrimaryBtn title="Get Started" />
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default CTA;