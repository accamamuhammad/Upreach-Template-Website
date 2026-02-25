"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
    <section
      id="team"
      className="py-24 scroll-mt-24 flex flex-col items-center"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto px-6"
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
          Meet Our <span className="text-green-500">Leadership</span>
        </h2>

        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          A team of strategists, creatives, and innovators building scalable
          brand systems.
        </p>
      </motion.div>

      {/* TEAM ROW */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="mt-16 w-full overflow-x-auto px-6 scrollbar-hide"
      >
        <div className="flex gap-8 w-max">
          {data.map((person, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
              whileHover={{ y: -10 }}
              className="relative w-[18rem] h-[24rem] rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <Image
                src={person.image}
                alt={person.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Info */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center w-[85%] backdrop-blur-md bg-white/10 rounded-2xl py-4 px-3 border border-white/20">
                <h4 className="font-semibold text-lg text-white">
                  {person.title}
                </h4>
                <p className="text-sm text-gray-300">
                  {person.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Team;