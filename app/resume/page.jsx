"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus.",
  info: [
    {
      fieldName: "Name",
      description: "John Doe",
    },
    {
      fieldName: "Phone",
      description: "",
    },
    {
      fieldName: "Email",
      description: "",
    },
    ,
    {
      fieldName: "Experience",
      description: "2+ years",
    },
    {
      fieldName: "Nationality",
      description: "Czech Republic",
    },
    ,
    {
      fieldName: "Freelance",
      description: "Available",
    },
    {
      fieldName: "Languages",
      description: "Czech C2 (native), English C1, Russian A2, Slovak",
    },
  ],
};
const skills = {
  title: "Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus.",
  skillList: [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
  ],
};

const experience = {
  icon: "assets/resume/badge.svg",
  title: "Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus.",
  items: [
    {
      company: "Company Name",
      position: "Position",
      duration: "2020 - 2022",
    },
    {
      company: "Company Name",
      position: "Position",
      duration: "2020 - 2022",
    },
    {
      company: "Company Name",
      position: "Position",
      duration: "2020 - 2022",
    },
    {
      company: "Company Name",
      position: "Position",
      duration: "2020 - 2022",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2023",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 overflow-visible">
            <TabsTrigger value="experience" className="w-full">
              {experience.title}
            </TabsTrigger>
            <TabsTrigger value="education" className="w-full">
              {education.title}
            </TabsTrigger>
            <TabsTrigger value="skill" className="w-full">
              {skills.title}
            </TabsTrigger>
            <TabsTrigger value="about" className="w-full">
              {about.title}
            </TabsTrigger>
          </TabsList>
          <div className="">Content</div>

          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">{about.title}</h2>
              <p>{about.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {about.info.map((item, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <span className="font-semibold">{item.fieldName}</span>
                    <span>{item.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="skills">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">{skills.title}</h2>
              <p>{skills.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {skills.skillList.map((skill, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer">
                          {skill.icon}
                          <span className="mt-2 text-sm font-semibold">{skill.name}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>{skill.name}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
