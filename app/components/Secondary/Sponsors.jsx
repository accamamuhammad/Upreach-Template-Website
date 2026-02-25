"use client";

import React from "react";
import Image from "next/image";

import Logo1 from "../../assets/Hero-Logo-1.png";
import Logo2 from "../../assets/Hero-Logo-2.png";
import Logo3 from "../../assets/Hero-Logo-3.png";

const Sponsors = () => {
  const sponsorsList = [
    { name: "logoipsum", URL: Logo1 },
    { name: "logoipsum", URL: Logo2 },
    { name: "logoipsum", URL: Logo3 },
  ];

  const extendedList = [...sponsorsList, ...sponsorsList];

  return (
    <section className="w-full overflow-hidden relative">
      <div className="flex gap-20 animate-scroll whitespace-nowrap">
        {extendedList.map((item, index) => (
          <div key={index} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition">
            <Image width={40} height={40} src={item.URL} alt="sponsor logo" />
            <span className="font-semibold text-gray-400 text-lg">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;