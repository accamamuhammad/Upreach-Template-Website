import React from "react";
import Image from "next/image";
import Play from "../../assets/play.png";

const Video = () => {
  return (
    <section className="w-[75%] lg:w-[60%] relative md:h-96 lg:h-fit aspect-square sm:aspect-video md:aspect-auto lg:aspect-video rounded-[2rem] border-[10px] border-[rgb(40,61,66)]">
      {/* Button */}
      <button className="z-50 w-[12.5rem] md:w-[13rem] md:text-[1.1rem] absolute bottom-5 left-1/2 -translate-x-1/2 py-3 gap-2 text-[rgb(10,10,10)] flex items-center justify-center bg-[rgb(107,230,129)] rounded-[2rem] font-medium hover:bg-[#5CF28E] transition-colors duration-300">
        <span className="bg-[rgb(10,10,10)]  rounded-full px-2 py-2 aspect-square flex items-center justify-center">
          <Image width={10} height={10} src={Play} alt="play video" />
        </span>
        Inside our process
      </button>
    </section>
  );
};

export default Video;
