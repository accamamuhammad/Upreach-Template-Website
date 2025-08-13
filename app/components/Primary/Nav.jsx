// Convert to client side component
"use client";

// Import all Assets
import React from "react";
import { useState } from "react";
import Image from "next/image";
import PrimaryBtn from "../Secondary/PrimaryBtn";
import Logo from "../../assets/Logo-with-text.png";
import Hamburger from "../../assets/menu-icon.png";
import Close from "../../assets/close-icon.png";

const Nav = () => {
  const [toggle, SetToggle] = useState(false);

  const handleToggleNav = () => {
    SetToggle(!toggle);
  };

  const links = [
    { title: "Services", link: "/services" },
    { title: "Work", link: "/work" },
    { title: "Testimonials", link: "/testimonials" },
    { title: "About", link: "/about" },
    { title: "Blog", link: "/blog" },
  ];

  return (
    <nav className="bg-primary sticky top-0 z-50 py-5 px-8 lg:px-14 w-screen h-fit flex flex-row items-center justify-between">
      {/* Logo Section */}
      <Image
        width={115}
        height={115}
        src={Logo}
        alt="Logo"
        className="relative"
      ></Image>
      {/* Links Section */}
      <ul
        className={
          toggle
            ? "w-full text-center pb-6 py-2 gap-7 absolute top-16 left-1/2 -translate-x-1/2 bg-primary flex flex-col items-center justify-center"
            : "hidden lg:flex text-lg font-bold flex-row items-center justify-center gap-14 bg-primary"
        }
      >
        {links.map((link, index) => (
          <li
            key={index}
            className="opacity-80 hover:opacity-100 cursor-pointer text-white text-[0.95rem] font-thin"
          >
            {link.title}
          </li>
        ))}
        <div className="lg:hidden">
          <PrimaryBtn title="Contact Us" />
        </div>
      </ul>
      {/* Menu Toggle Section */}
      <Image
        width={25}
        height={50}
        src={toggle ? Close : Hamburger}
        alt="Toggle"
        onClick={handleToggleNav}
        className="cursor-pointer lg:hidden"
      ></Image>
      {/* Button */}
      <button className="bg-green-400 hover:bg-green-500 text-green-950 py-2 px-5 text-[0.9rem] hidden lg:block rounded-full">
        Contact Us
      </button>
    </nav>
  );
};

export default Nav;
