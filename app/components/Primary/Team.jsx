"use client";

import Image from "next/image";
import Image1 from "../../assets/Team-1.jpg";
import Image2 from "../../assets/Team-2.jpg";
import Image3 from "../../assets/Team-3.jpg";
import Image4 from "../../assets/Team-4.jpg";
import Image5 from "../../assets/Team-5.jpg";

const Team = () => {
  const data = [
    { title: "James Carter", role: "CEO & Founder", image: Image1 },
    { title: "Anna Brown", role: "CTO", image: Image5 },
    { title: "John Smith", role: "Lead Designer", image: Image3 },
    { title: "Sarah Lee", role: "Marketing Head", image: Image2 },
    { title: "Emily Davis", role: "Product Manager", image: Image4 },
  ];

  return (
    <main className="text-white py-16 space-y-12 flex flex-col items-center justify-center">
      <section className="space-y-4 text-center">
        <h1 className="px-5 text-5xl leading-[3.35rem] font-medium">
          Meet our amazing team.
        </h1>
        <p className="text-[0.95rem] opacity-65 px-7 leading-7 font-thin">
          We are a team of strategists, creatives, and innovators dedicated to
          <br className="hidden lg:block " /> helping brands reach their full
          potential.
        </p>
      </section>
      {/* Auto-scrolling team members */}
      <section className="scrollbar-hide w-full h-fit flex flex-row overflow-x-auto gap-6 px-6 scrollbar-hide">
        {data.map((person, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative w-[17rem] h-[22rem] rounded-xl overflow-hidden"
          >
            <Image
              src={person.image}
              alt={person.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-5 text-center">
              <h1 className="font-semibold text-xl">{person.title}</h1>
              <p className="opacity-75">{person.role}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Team;
