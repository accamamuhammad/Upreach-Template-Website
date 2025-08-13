import React from "react";
import Image from "next/image";
import DocumentIcon from "../../assets/document.png";
import PercentIcon from "../../assets/percent.png";
import HandShakeIcon from "../../assets/hand-shake.png";
import Route from "../../assets/route.png";

const Services = () => {
  const data = [
    {
      title: "Brand Strategy",
      icon: DocumentIcon,
      description:
        "Building a powerful, data-driven brand identity that resonates, inspires, and drives long-term success.",
    },
    {
      title: "Lead Generation",
      icon: PercentIcon,
      description:
        "Optimize advanced funnels, automate processes, and boost customer conversions to generate leads.",
    },
    {
      title: "Digital Marketing",
      icon: HandShakeIcon,
      description:
        "Maximize online visibility with paid ads, social media, and strategic SEO to drive targeted traffic and higher conversions.",
    },
    {
      title: "Strategic Planning",
      icon: Route,
      description:
        "Generate high-quality leads through targeted campaigns and optimized funnels for maximum conversions.",
    },
  ];

  return (
    <main className="bg-[rgb(250,250,250)] pt-14 pb-10 flex flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-5xl font-bold">What we Offer</h1>
        <p className="text-[1.1rem] opacity-80">
          Comprehensive solutions for business success.
        </p>
      </div>
      <div className="w-full px-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {data.map((service, index) => (
          <div
            key={index}
            className="bg-[rgb(245,245,245)] p-6 rounded-3xl w-full h-fit space-y-5"
          >
            <div className="w-12 h-12 aspect-square bg-white rounded-full flex items-center justify-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={20}
                height={20}
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl">{service.title}</h2>
              <p className="mt-2 text-sm leading-6 opacity-80 text-[0.9rem] ">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services;
