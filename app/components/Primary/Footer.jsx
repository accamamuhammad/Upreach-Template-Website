'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "../../assets/Logo-with-text.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const linkStyles = "opacity-70 text-[0.95rem] font-light hover:opacity-100 hover:translate-x-1 transition-all duration-200 cursor-pointer";

  return (
    <footer className="w-full bg-primary text-white pt-16 pb-8 px-6 md:px-14">
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-4"
        >
          <Image
            width={120}
            height={120}
            src={Logo}
            alt="Logo"
            className="brightness-0 invert" // Ensures logo is crisp white if it has colors
          />
          <p className="text-sm opacity-60 max-w-[200px] leading-relaxed">
            Building digital experiences that scale with your ambition.
          </p>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-5">
            <h3 className="font-semibold text-lg tracking-wide">Sections</h3>
            <ul className="flex flex-col gap-3">
              <li className={linkStyles}>Services</li>
              <li className={linkStyles}>Team</li>
              <li className={linkStyles}>Testimonials</li>
            </ul>
          </div>
          
          <div className="space-y-5">
            <h3 className="font-semibold text-lg tracking-wide">Information</h3>
            <ul className="flex flex-col gap-3">
              <li className={linkStyles}>FAQ's</li>
              <li className={linkStyles}>404</li>
              <li className={linkStyles}>Contact</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs opacity-50">
          © {currentYear} Protusweb. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs opacity-50">
          <span className="hover:opacity-100 cursor-pointer">Privacy Policy</span>
          <span className="hover:opacity-100 cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;