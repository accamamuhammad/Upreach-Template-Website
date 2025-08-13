import React from "react";
import Image from "next/image";
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
        "Their system improved our client engagement and lead conversions. The easy-to-use tools streamlined our entire sales process",
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
    <main className="w-screen h-fit bg-white pt-14 pb-10 flex flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="px-5  text-5xl font-bold text-[rgb(10,10,10)]">
          What Our Clients Say
        </h1>
        <p className="text-lg opacity-80 text-[rgb(10,10,10)]">
          Our clients words reflect our commitment to excellence.
        </p>
      </div>
      <div className="w-full px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {data.map((service, index) => (
          <div
            key={index}
            className="bg-[rgb(245,245,245)] px-6 py-5 rounded-3xl w-full h-fit space-y-5"
          >
            <p className="mt-2 text-sm leading-6 opacity-80 text-[0.9rem] ">
              {service.description}
            </p>
            <div className="flex gap-2.5 flex-row items-center justify-start">
              <Image
                src={service.icon}
                alt={service.title}
                width={40}
                height={40}
                className="rounded-full aspect-square"
              />
              <div>
                <h1>{service.title}</h1>
                <p className="opacity-65 text-sm">{service.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Testimonials;
