import React from "react";
import Video from "../Secondary/Video";

const AboutUs = () => {
  const data = [
    { title: "98%", subTitle: "Client Success Rate" },
    { title: "200+", subTitle: "Campaigns Launched" },
    { title: "$250K+", subTitle: "Revenue Generated" },
  ];

  return (
    <main
      id="about"
      className="py-16 space-y-12  scroll-mt-6 flex flex-col items-center justify-center"
    >
      <section className="text-center text-white space-y-5">
        <h1 className="px-5 text-5xl leading-[3.35rem] font-medium">
          Why we're the right choice
        </h1>
        <p className="text-[0.95rem] opacity-65 px-7 leading-7 font-thin">
          We create impactful strategies, refine brand positioning, and drive
          real <br className="hidden sm:block" />
          results through smart content and scalable campaigns.
        </p>
      </section>
      <Video />
      <section className="w-full sm:w-[75%] md:w-[60%] lg:w-[55%] sm:px-5 gap-12 md:gap-16 lg:gap-14 flex flex-col md:flex-row justify-center sm:justify-between items-center text-white">
        {data.map((item, index) => {
          return (
            <div key={index} className="text-center space-y-2.5 md:space-y-1">
              <h1 className="text-4xl font-semibold">{item.title}</h1>
              <p className="opacity-65 font-thin">{item.subTitle}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default AboutUs;
