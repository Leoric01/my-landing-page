"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaBitbucket,
  FaJenkins,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiSwagger,
  SiTerraform,
  SiGrafana,
  SiPostman,
  SiJira,
  SiConfluence,
  SiElastic,
  SiSpringboot,
  SiMongodb,
} from "react-icons/si";
import { VscBeaker } from "react-icons/vsc";
const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "John Doe",
    },
    {
      fieldName: "Phone",
      fieldValue: "",
    },
    {
      fieldName: "Email",
      fieldValue: "",
    },
    ,
    {
      fieldName: "Experience",
      fieldValue: "2+ years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Czech Republic",
    },
    ,
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Czech C2 (native), English C1, Russian A2, Slovak",
    },
  ],
};
const skills = {
  title: "Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus.",
  skillList: [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "JUnit", icon: <VscBeaker /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "GitLab", icon: <FaGitlab /> },
    { name: "Bitbucket", icon: <FaBitbucket /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Swagger", icon: <SiSwagger /> },
    { name: "Jenkins", icon: <FaJenkins /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "Grafana", icon: <SiGrafana /> },
    { name: "ELK Stack", icon: <SiElastic /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Jira", icon: <SiJira /> },
    { name: "Confluence", icon: <SiConfluence /> },
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
import { Scroll } from "lucide-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";

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
            <TabsTrigger value="skills" className="w-full">
              {skills.title}
            </TabsTrigger>
            <TabsTrigger value="about" className="w-full">
              {about.title}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="nax-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px] ">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className=" flex items-center gap-3">
                          {/* just a dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="nax-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[400px] ">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className=" flex items-center gap-3">
                          {/* just a dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="flex items-center gap-2">
                              <p className="capitalize">{skill.name}</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}:</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
