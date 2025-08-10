import React from "react";
import Image from "next/image";
import Logo1 from "../../assets/Hero-Logo-1.png";
import Logo2 from "../../assets/Hero-Logo-2.png";
import Logo3 from "../../assets/Hero-Logo-3.png";

const Sponsors = () => {
  let sponsorsList = [
    { name: "logoipsum", URL: Logo1 },
    { name: "logoipsum", URL: Logo2 },
    { name: "logoipsum", URL: Logo3 },
    { name: "logoipsum", URL: Logo1 },
    { name: "logoipsum", URL: Logo2 },
    { name: "logoipsum", URL: Logo3 },
    { name: "logoipsum", URL: Logo1 },
    { name: "logoipsum", URL: Logo2 },
    { name: "logoipsum", URL: Logo3 },
  ];

  return (
    <section className="w-full lg:w-[450px] xl:w-[600px] h-fit overflow-hidden">
      <ul className="text-white flex flex-row gap-24 py-2 animate-infinite-scroll">
        {sponsorsList.map((item, index) => (
          <li key={index} className="flex flex-row items-center gap-1.5">
            <Image width={45} height={45} src={item.URL} alt="sponsor logo" />
            <span className="font-black text-gray-400 text-lg">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sponsors;
