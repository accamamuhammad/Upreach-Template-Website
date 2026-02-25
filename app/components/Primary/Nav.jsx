"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import PrimaryBtn from "../Secondary/PrimaryBtn";

import Logo from "../../assets/Logo-with-text.png";
import Hamburger from "../../assets/menu-icon.png";
import Close from "../../assets/close-icon.png";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const links = [
    { title: "Services", link: "#service" },
    { title: "About Us", link: "#about" },
    { title: "Testimonials", link: "#testimonials" },
    { title: "Team", link: "#team" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-primary/90 backdrop-blur-md sticky top-0 z-50 w-full px-6 lg:px-16 py-5 flex items-center justify-between"
    >
      {/* Logo */}
      <Image width={115} height={115} src={Logo} alt="Logo" priority />

      {/* Desktop Links */}
      <ul className="hidden lg:flex items-center gap-12">
        {links.map((link, index) => (
          <li key={index} className="relative group">
            <Link
              href={link.link}
              className="text-white text-[0.95rem] font-light tracking-wide"
            >
              {link.title}
            </Link>

            {/* Animated underline */}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <div className="hidden lg:block">
        <a
          href="https://tidycal.com/protusweb/15-minute-meeting"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PrimaryBtn title="Free Consultation" />
        </a>
      </div>

      {/* Mobile Toggle */}
      <div className="lg:hidden cursor-pointer">
        <Image
          width={25}
          height={25}
          src={toggle ? Close : Hamburger}
          alt="Menu"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] bg-primary rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6 lg:hidden"
          >
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                onClick={() => setToggle(false)}
                className="text-white text-lg font-light hover:text-green-400 transition"
              >
                {link.title}
              </Link>
            ))}

            <PrimaryBtn title="Contact Us" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;