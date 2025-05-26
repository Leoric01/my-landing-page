"use client";

import React from "react";
import CountUp from "react-countup";
import projects from "@/app/data/projects";

const stats = [
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: projects.length,
    text: "Free time projects",
  },
  {
    num: 5,
    text: "Real life projects participation",
  },
  {
    num: 4,
    text: "Available programming languages",
  },
  {
    num: 800,
    text: "Free time projects commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div>
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={`${item.text}-${index}`}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                <p
                  className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
