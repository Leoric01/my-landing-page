"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Backend development",
    description: "Java, Springboot, Maven, Gradle, SQL",
    href: "",
    icon: (
      <BsArrowDownRight className="text-primary text-3xl transition-transform duration-500 group-hover:-rotate-45" />
    ),
  },
  {
    num: "02",
    title: "Frontend development",
    description: "React, Typescript, Angular",
    href: "",
    icon: (
      <BsArrowDownRight className="text-primary text-3xl transition-transform duration-500 group-hover:-rotate-45" />
    ),
  },
  {
    num: "03",
    title: "DevOps",
    description: "Git, Jenkins, ELK, Docker",
    href: "",
    icon: (
      <BsArrowDownRight className="text-primary text-3xl transition-transform duration-500 group-hover:-rotate-45" />
    ),
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col gap-6 justify-center group cursor-pointer transition-all duration-200 hover:bg-white/5 p-4 rounded-lg"
              >
                <div className="w-full flex items-center justify-between">
                  <div className="text-3xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center"
                  >
                    {service.icon}
                  </Link>
                </div>
                <h2 className="text-[34px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/80">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
