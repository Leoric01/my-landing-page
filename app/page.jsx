"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { useEffect, useState } from "react";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  const [experience, setExperience] = useState({ years: 0, months: 0, days: 0 });
  useEffect(() => {
    const startDate = new Date("2023-04-01");

    const updateExperience = () => {
      const now = new Date();
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setExperience({ years, months, days });
    };

    updateExperience();
    const interval = setInterval(updateExperience, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="h1 mb-6">
              Hello, I'm <br /> <span className="text-accent">Jiří Urban</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at backend using java as my main, but i have also some basics in frontend with react, typescript,
              even created one project using angular but design is my weakpoint. <br />
              Other techstack experience: springboot, maven, gradle, git, sql, jira, confluence, swagger, hibernate,
              junit, ELK, jenkins.
            </p>
            <p className="mb-4 text-white/80">
              Current experience as an active programmer:{" "}
              <span className="font-semibold">
                {experience.years}y / {experience.months}m / {experience.days}d
              </span>
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button asChild variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <a href="/assets/work/urban-resume-eng-2025.pdf" download>
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </motion.section>
  );
}

