"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub, BsGrid3X3Gap } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    category: "Frontend",
    title: "Personal Portfolio",
    description:
      "This is the site you're currently viewing — a fully responsive personal portfolio built using modern frontend technologies. It includes animations, sliders, and dynamic content such as skills, experience, and project previews.",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Framer Motion" }],
    thumbnail: "/assets/work/thumb-1.png",
    images: [
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748252222/dqwkulwsogn3v69mnzih.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748252223/spohod7kh2v0vaqqttjq.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748252222/lfjagpueygqd21twfefd.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748252222/u4848hugzcoqck1oeg1s.jpg",
      "/assets/work/thumb-1.png",
    ],
    live: "https://vercelli.com",
    github: "https://github.com/Leoric01/my-landing-page",
  },
  {
    category: "devops",
    title: "Project 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione laudantium esse harum autem temporibus labore libero vel expedita. Mollitia assumenda blanditiis delectus maiores iusto eveniet ad illum nobis laborum enim!",
    stack: [{ name: "Java" }, { name: "Spring Boot" }, { name: "Docker" }, { name: "Kubernetes" }],
    thumbnail: "/assets/work/thumb3.png",
    images: [,],
    live: "",
    github: "https://github.com/",
  },
  {
    category: "full stack / backend and frontend",
    title: "Book Network BACKEND",
    description:
      "Was supposed to be a social network for book users. Features were - registering book, scoring, reviews, ranking, adding visible books to wishlist, borrowing books, and more. The project was abandoned due to lack of time and i was struggling with angular frontend. Backend is in java springboot and is working fine, frontend deffinitely has some issues even tho its usable. Started that to test angular, i liked it but implementing features and fixing bugs was too time consuming for me. I will probably not return to this project in the future.",
    stack: [
      { name: "JavaScript" },
      { name: "Angular" },
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "MySQL" },
      { name: "REST API" },
      { name: "JPA / Hibernate" },
      { name: "JWT security" },
    ],
    thumbnail: "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/r5rdkjxzeg3qzfnjnpaz.jpg",
    images: [
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/k8xpxuutcktyhmlez7us.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/ogphtifxowiz4c57ilzg.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/oyfq6rgfkcsfrc3p8viy.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/r5rdkjxzeg3qzfnjnpaz.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/vqppsvxnea3bvloodenc.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/kq3vhyuc0emavk7vcpty.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/o1d4pflul7jyelqwnuzv.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/rfcjayjvtlm1qn9dxg8p.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/g24y0im2ptv2ez4miwu3.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/knydhvq0m5sfhmdlgcag.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/r3oljyl6f6wkgt1rzuje.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/m8kadweokyqu4rem0pq4.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/cgkvaiemmmih1lmpice1.jpg",
    ],
    live: "https://book-network-be-production.up.railway.app/api/v1/auth",
    github: "https://github.com/Leoric01/Book-Network-BE",
  },
  {
    category: "full stack / backend and frontend",
    title: "Book Network FRONT END",
    description:
      "Was supposed to be a social network for book users. Features were - registering book, scoring, reviews, ranking, adding visible books to wishlist, borrowing books, and more. The project was abandoned due to lack of time and i was struggling with angular frontend. Backend is in java springboot and is working fine, frontend deffinitely has some issues even tho its usable. Started that to test angular, i liked it but implementing features and fixing bugs was too time consuming for me. I will probably not return to this project in the future.",
    stack: [
      { name: "JavaScript" },
      { name: "Angular" },
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "MySQL" },
      { name: "REST API" },
      { name: "JPA / Hibernate" },
      { name: "JWT security" },
    ],
    thumbnail: "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/r5rdkjxzeg3qzfnjnpaz.jpg",
    images: [
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/k8xpxuutcktyhmlez7us.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/ogphtifxowiz4c57ilzg.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/oyfq6rgfkcsfrc3p8viy.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/r5rdkjxzeg3qzfnjnpaz.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248001/vqppsvxnea3bvloodenc.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/kq3vhyuc0emavk7vcpty.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/o1d4pflul7jyelqwnuzv.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/rfcjayjvtlm1qn9dxg8p.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/g24y0im2ptv2ez4miwu3.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/knydhvq0m5sfhmdlgcag.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/r3oljyl6f6wkgt1rzuje.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/m8kadweokyqu4rem0pq4.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748248000/cgkvaiemmmih1lmpice1.jpg",
    ],
    live: "",
    github: "https://github.com/Leoric01/Book-Network-FE",
  },
  {
    category: "Backend / Fullstack",
    title: "Bank Interview REST Service",
    description:
      "A REST API implemented in Java and Spring Boot for a bank interview task. The service includes three functionalities: text transformation that reverses input text with vowel capitalization and whitespace normalization; numeric processing involving digit shifting, multiplication, deletion, and division based on specified rules; and a simple ticketing system with endpoints to generate, retrieve, and delete tickets. A quick frontend prototype was built using Thymeleaf.",
    stack: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Thymeleaf" },
      { name: "REST API" },
      { name: "H2 Database" },
    ],
    thumbnail: "/assets/work/moneta.png",
    images: [],
    live: "https://successive-veronica-urb92-5cb11d87.koyeb.app/ui",
    github: "https://github.com/Leoric01/moneta-entry-exam",
  },
  {
    category: "game",
    title: "Snake Game",
    description:
      "A simple version of the classic Snake game implemented in Java using Swing (JPanel). The game runs as a desktop application and was created to explore basic graphics, game loop timing, and collision logic in Java.",
    stack: [{ name: "Java" }, { name: "Swing / JPanel" }],
    thumbnail: "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748251246/cmsrrqp1mh0itsfvh1c3.png",
    images: [
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748251247/dltfmlazy3sudr0h5gqe.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748251247/sl9jgdpggfqk0jdona0m.jpg",
      "https://res.cloudinary.com/dz7uwudvw/image/upload/v1748251246/cmsrrqp1mh0itsfvh1c3.png",
    ],
    live: "",
    github: "https://github.com/Leoric01/SnakeGame",
  },
  {
    category: "terminal app",
    title: "TTCExercise",
    description:
      "A small command-line application written as part of a coding challenge for job interview. The app reads a sequence of numbers either from a file or from standard input. Based on the count of numbers (even or odd), it filters and prints only even or odd numbers respectively. Input/output behavior is configurable via command-line arguments.",
    stack: [{ name: "Java" }, { name: "File I/O" }],
    thumbnail: "/assets/work/consoleapp.jpg",
    images: [],
    live: "",
    github: "https://github.com/Leoric01/TTCExercise",
  },
];

const Work = () => {
  const [current, setCurrent] = useState({ project: projects[0], index: 0 });
  const [galleryImages, setGalleryImages] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setCurrent({ project: projects[currentIndex], index: currentIndex });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        {galleryImages ? (
          <>
            <button
              onClick={() => {
                const swiperIndex = current.index;
                setGalleryImages(null);
                setTimeout(() => {
                  document
                    .querySelectorAll(".swiper-slide")
                    [swiperIndex]?.scrollIntoView({ behavior: "instant", block: "nearest" });
                }, 100);
              }}
              className="mb-4 px-6 py-2 bg-accent text-[#232329] rounded-lg hover:bg-accent-hover"
            >
              ← Back to project view
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="relative group cursor-pointer" onClick={() => setModalImage(img)}>
                  <Image src={img} alt="Gallery" width={600} height={400} className="object-cover rounded-xl" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {String(current.index + 1).padStart(2, "0")}
                </div>
                <p className="text-white/50 text-lg capitalize">{current.project.category}</p>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {current.project.title}
                </h2>
                <p className="text-white/60">{current.project.description}</p>
                <ul className="flex gap-4 flex-wrap">
                  {current.project.stack.map((item, index) => (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== current.project.stack.length - 1 && <span className="text-white/60">,</span>}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
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
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        onClick={() => setGalleryImages(current.project.images)}
                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                      >
                        <BsGrid3X3Gap className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View gallery</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
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
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.thumbnail} fill className="object-cover" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
          </div>
        )}

        {modalImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center"
            onClick={() => setModalImage(null)}
          >
            <Image
              src={modalImage}
              alt="Full"
              width={1200}
              height={800}
              className="rounded-lg max-h-[80vh] object-contain"
            />
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Work;
