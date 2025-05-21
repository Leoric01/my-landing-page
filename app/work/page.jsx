"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    category: "Frontend",
    title: "Personal Portfolio",
    description:
      "This is the site you're currently viewing — a fully responsive personal portfolio built using modern frontend technologies. It includes animations, sliders, and dynamic content such as skills, experience, and project previews.",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Framer Motion" }],
    image: "/assets/work/thumb-1.png",
    live: "https://vercelli.com",
    github: "https://github.com/Leoric01/my-landing-page",
  },
  {
    category: "frontend",
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at quae quaerat quo, accusantium qui!",
    stack: [{ name: "JavaScript" }, { name: "NextJs" }, { name: "React" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/",
  },
  {
    category: "devops",
    title: "Project 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione laudantium esse harum autem temporibus labore libero vel expedita. Mollitia assumenda blanditiis delectus maiores iusto eveniet ad illum nobis laborum enim!",
    stack: [{ name: "Java" }, { name: "Spring Boot" }, { name: "Docker" }, { name: "Kubernetes" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/",
  },
  {
    category: "portfolio page",
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat architecto aperiam repellat nihil ipsa dicta doloribus molestias. Officiis illo rerum odit reprehenderit laboriosam facere quas tenetur sit ea, aliquid numquam ipsam velit accusamus, vero sapiente quia, error quaerat modi eveniet ad placeat harum iste nulla hic! Harum numquam iure corporis.",
    stack: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/",
  },
  {
    category: "game",
    title: "Snake Game",
    description:
      "A simple version of the classic Snake game implemented in Java using Swing (JPanel). The game runs as a desktop application and was created to explore basic graphics, game loop timing, and collision logic in Java.",
    stack: [{ name: "Java" }, { name: "Swing / JPanel" }],
    image: "/assets/work/snake-g.png",
    live: "",
    github: "https://github.com/Leoric01/SnakeGame",
  },
  {
    category: "terminal app",
    title: "TTCExercise",
    description:
      "A small command-line application written as part of a coding challenge for job interview. The app reads a sequence of numbers either from a file or from standard input. Based on the count of numbers (even or odd), it filters and prints only even or odd numbers respectively. Input/output behavior is configurable via command-line arguments.",
    stack: [{ name: "Java" }, { name: "File I/O" }],
    image: "/assets/work/consoleapp.jpg",
    live: "",
    github: "https://github.com/Leoric01/TTCExercise",
  },
];

const Work = () => {
  const [current, setCurrent] = useState({ project: projects[0], index: 0 });
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setCurrent({ project: projects[currentIndex], index: currentIndex });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {String(current.index + 1).padStart(2, "0")}
              </div>
              {/* category */}
              <p className="text-white/50 text-lg capitalize">{current.project.category}</p>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {current.project.title}
              </h2>
              {/* description */}
              <p className="text-white/60">{current.project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
                {current.project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== current.project.stack.length - 1 && <span className="text-white/60">,</span>}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons for links */}
              <div className="flex items-center gap-4">
                {/* live project url */}
                {current.project.live ? (
                  <Link href={current.project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-40 cursor-not-allowed">
                        <BsArrowUpRight className="text-white text-3xl" />
                      </div>
                      <TooltipContent>
                        <p>Not deployed</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
                {/* github project repo */}
                <Link href={current.project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              className="xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
