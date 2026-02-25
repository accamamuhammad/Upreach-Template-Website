"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Person1 from "../../assets/person1.png";
import Person2 from "../../assets/person2.png";
import Person3 from "../../assets/person3.png";
import Person4 from "../../assets/person4.png";
import Person5 from "../../assets/person5.png";
import Person6 from "../../assets/person6.png";

const Testimonials = () => {
  const data = [
    {
      title: "Jacob Williams",
      role: "Tech CEO",
      icon: Person1,
      description:
        "Their platform transformed how we approach campaigns. The intuitive tools and seamless integrations saved us a lot of time.",
    },
    {
      title: "Sydney Reynolds",
      role: "Fashion Brand",
      icon: Person2,
      description:
        "Their marketing approach brought in more foot traffic and online orders. The data-driven insights made all the difference.",
    },
    {
      title: "Nathan Carter",
      role: "Real Estate CEO",
      icon: Person3,
      description:
        "Their system improved our client engagement and lead conversions. The easy-to-use tools streamlined our entire sales process.",
    },
    {
      title: "Maya Foster",
      role: "Cafe Owner",
      icon: Person4,
      description:
        "Their system improved our client engagement and lead conversions. The easy-to-use tools streamlined our entire sales process.",
    },
    {
      title: "Mitchell Apparel",
      role: "Architect",
      icon: Person5,
      description:
        "They refined our brand's digital presence and increased customer retention. The personalized strategies made a huge impact.",
    },
    {
      title: "Amy Bennett",
      role: "Engineer",
      icon: Person6,
      description:
        "Their platform enhanced project coordination and design workflow. The advanced tools helped us meet deadlines stress-free.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-white py-24 px-6 lg:px-16 scroll-mt-24"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[rgb(10,10,10)]">
          What Our <span className="text-green-500">Clients Say</span>
        </h2>

        <p className="mt-5 text-lg text-gray-600">
          Real experiences from businesses we’ve helped scale.
        </p>
      </motion.div>

      {/* GRID */}
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
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            whileHover={{ y: -8 }}
            className="group bg-[rgb(245,245,245)] p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Quote */}
            <p className="text-gray-700 leading-relaxed text-[0.95rem]">
              “{item.description}”
            </p>

            {/* Person */}
            <div className="mt-8 flex items-center gap-4">
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;