import React from "react";
import Image from "next/image";
import HeroImageMobile from "../../assets/Hero-main-Mobile.png";
import HappyIcon from "../../assets/Happy.png";
import TrophyICon from "../../assets/trophy.png";
import LightIcon from "../../assets/lightning.png";
import TrendIcon from "../../assets/trend.png";

const HeroIllustration = () => {
  return (
    <main className="w-full h-fit relative px-5 lg:pr-0 flex items-center justify-center lg:justify-end ">
      <Image
        width={380}
        height={50}
        alt="hero-image"
        src={HeroImageMobile}
        className="relative rounded-lg bg-gray-300 lg:hidden"
      />
      <Image
        width={580}
        height={50}
        alt="hero-image"
        src={HeroImageMobile}
        className="relative rounded-lg bg-gray-300 hidden lg:block xl:hidden"
      />
      <Image
        width={480}
        height={50}
        alt="hero-image"
        src={HeroImageMobile}
        className="relative rounded-lg bg-gray-300 hidden xl:block"
      />
      {/* Testimonials */}
      <section className="absolute bottom-4 left-1/2 -translate-x-1/2 space-y-2 flex items-center justify-center flex-col">
        <div className="w-fit h-12 gap-2 px-3 rounded-xl bg-white bg-opacity-20 backdrop-blur-md flex flex-row items-center justify-center">
          <Image
            width={50}
            height={50}
            alt="happy-icon"
            src={TrophyICon}
            className="w-4 mb-0.5"
          />
          <p className="text-[0.8rem] text-white opacity-80">
            2K+ Success Stories
          </p>
        </div>
        <div className="w-60 h-fit py-4 gap-2 rounded-xl bg-white bg-opacity-20 backdrop-blur-md flex flex-row items-center justify-center">
          <div className="border-[1.5px] border-opacity-25 border-white w-10 h-10 aspect-square rounded-full flex items-center justify-center">
            <Image
              width={50}
              height={50}
              alt="lightning-icon"
              src={LightIcon}
              className="w-5 mb-0.5"
            />
          </div>
          <div className="space-y-2">
            <p className="w-fit text-[0.8rem] text-white opacity-80">
              Your Growth, Our Mission
            </p>
            <div className="flex gap-1.5 flex-row items-center justify-start">
              <Image
                width={50}
                height={50}
                alt="lightning-icon"
                src={TrendIcon}
                className="w-4 mb-0.5"
              />
              <div className="text-xs">
                <span className="font-medium opacity-90">+65%</span>{" "}
                <span className="opacity-45">ROI Boost</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroIllustration;
