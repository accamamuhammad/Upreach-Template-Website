import React from "react";
import Image from "next/image";
import Logo from "../../assets/Logo-with-text.png";

const Footer = () => {
  return (
    <footer className="w-full h-fit py-10 px-14 bg-primary text-white">
      <section className="flex flex-col sm:flex-row space-y-7 sm:space-y-0 items-start justify-between">
        <Image
          width={110}
          height={110}
          src={Logo}
          alt="Logo"
          className="relative"
        />
        <div className="flex flex-col sm:flex-row pl-2.5 items-center justify-center gap-8">
          <ul className="flex flex-col items-start justify-center gap-3.5">
            <h3 className="">Sections</h3>
            <li className="opacity-80 text-[0.95rem] font-thin">Services</li>
            <li className="opacity-80 text-[0.95rem] font-thin">Team</li>
            <li className="opacity-80 text-[0.95rem] font-thin">
              Testimonials
            </li>
          </ul>
          <ul className="flex flex-col items-start justify-center gap-3.5">
            <h3 className="">Information</h3>
            <li className="opacity-80 text-[0.95rem] font-thin">FAQ's</li>
            <li className="opacity-80 text-[0.95rem] font-thin">404</li>
            <li className="opacity-80 text-[0.95rem] font-thin">Contact</li>
          </ul>
        </div>
      </section>
      <p className="text-xs pl-2.5 opacity-85 mt-10 sm:mt-5 sm:opacity-65">
        © 2023 protusweb. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
{
  /* <p className="text-sm">© 2023 Your Company. All rights reserved.</p> */
}
