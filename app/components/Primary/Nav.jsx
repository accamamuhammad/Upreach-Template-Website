// Convert to client side component
"use client";

// Import all Assets
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/Logo-with-text.png";
import Hamburger from "../../assets/menu-icon.png";
import Close from "../../assets/close-icon.png";

const Nav = () => {
  const [toggle, SetToggle] = useState(false);

  const handleToggleNav = () => {
    SetToggle(!toggle);
  };

  return (
    <nav className="bg-primary p-5 w-screen h-fit relative flex flex-row items-center justify-between">
      {/* Logo Section */}
      <Image width={115} height={115} src={Logo} alt="Logo"></Image>
      {/* Links Section */}
      <ul
        className={
          toggle
            ? "w-full text-center pb-6 py-2 gap-7 absolute top-16 left-1/2 -translate-x-1/2 bg-primary flex flex-col items-center justify-center"
            : "hidden md:flex text-lg font-bold flex-row items-center justify-center gap-14"
        }
      >
        <li className="hover:text-opacity-80 cursor-pointer text-white text-sm text-opacity-65">
          Services
        </li>
        <li className="hover:text-opacity-80 cursor-pointer text-white text-sm text-opacity-65">
          Work
        </li>
        <li className="hover:text-opacity-80 cursor-pointer text-white text-sm text-opacity-65">
          Testimonials
        </li>
        <li className="hover:text-opacity-80 cursor-pointer text-white text-sm text-opacity-65">
          About
        </li>
        <li className="hover:text-opacity-80 cursor-pointer text-white text-sm text-opacity-65">
          Blog
        </li>
        <button className="bg-green-400 hover:bg-green-500 text-green-950 py-2.5 px-5 md:hidden rounded-full">
          Contact Us
        </button>
      </ul>
      {/* Menu Toggle Section */}
      <Image
        width={25}
        height={50}
        src={toggle ? Close : Hamburger}
        alt="Toggle"
        onClick={handleToggleNav}
        className="cursor-pointer md:hidden"
      ></Image>
      {/* Button */}
      <button className="bg-green-400 hover:bg-green-500 text-green-950 py-2.5 px-5 hidden md:block rounded-full">
        Contact Us
      </button>
    </nav>
  );
};

export default Nav;
