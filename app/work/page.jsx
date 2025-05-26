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
import projects from "@/app/data/projects";

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
