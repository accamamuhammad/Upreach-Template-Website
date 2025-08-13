import React from "react";
import PrimaryBtn from "../Secondary/PrimaryBtn";

const CTA = () => {
  return (
    <main className="bg-white py-16 space-y-12 flex flex-col items-center justify-center">
      <section className="w-[88%] md:w-[800px] py-8 rounded-3xl space-y-5 text-center bg-primary text-white">
        <h1 className="px-5 text-4xl font-medium leading-[3rem]">
          Ready to elevate your brand <br className="hidden md:block" />
          and unlock new growth?
        </h1>
        <p className="px-3 opacity-80 font-thin leading-7">
          With years of experience, we've helped businesses generate
          <br className="hidden md:block" /> millions in revenue. Partner with
          us to scale confidently.
        </p>
        <PrimaryBtn title="Get Started" />
      </section>
    </main>
  );
};

export default CTA;
