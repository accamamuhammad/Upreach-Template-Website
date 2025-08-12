import React from "react";
import PrimaryBtn from "../Secondary/PrimaryBtn";
import SecondaryBtn from "../Secondary/SecondaryBtn";
import HeroIllustration from "../Secondary/HeroIllustration";
import Sponsors from "../Secondary/Sponsors";

const Hero = () => {
  return (
    <main className="px-2 py-12 lg:px-14 gap-11 md:gap-14 h-fit overflow-hidden flex flex-col lg:flex-row justify-center lg:justify-between text-white bg-primary">
      {/* Text & Sponsors Area */}
      <section className="w-full text-center lg:text-left">
        {/* Text */}
        <div className="h-full xl:h-fit xl:gap-20 flex flex-col justify-center items-center lg:items-start">
          <div className="h-full space-y-8 flex items-center justify-center flex-col lg:items-start lg:justify-center xl:pt-14">
            <h1 className="text-[2rem] leading-[2.65rem] sm:text-[2.25rem] sm:leading-[2.8rem] md:text-6xl lg:text-[3.8rem] ">
              Grow your business, <br className="lg:hidden xl:block" />
              master every move.
            </h1>
            <p className="text-[0.95rem] font-thin leading-7 text-[#C4C4C4] opacity-85">
              Helping businesses thrive with innovative digital strategies,{" "}
              <br className="hidden md:block" />
              creative solutions, and measurable outcomes
            </p>
            {/* Buttons */}
            <div className="w-full flex flex-col items-center justify-center gap-3 md:flex-row lg:justify-start">
              <PrimaryBtn title="Book a call" />
              <SecondaryBtn title="Learn more" />
            </div>
          </div>
          {/* Sponsors */}
          <div className="mt-16 lg:mt-7 xl:mt-0">
            <Sponsors />
          </div>
        </div>
      </section>
      {/* Image Area */}
      <HeroIllustration />
    </main>
  );
};

export default Hero;
