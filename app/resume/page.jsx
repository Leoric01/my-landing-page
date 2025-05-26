"use client";
const calculateExperienceYears = () => {
  const startDate = new Date("2023-04-01");
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  const monthDiff = now.getMonth() - startDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < startDate.getDate())) {
    years--;
  }

  return `${years}+ years`;
};
const experienceDuration = calculateExperienceYears();

const experience = {
  icon: "assets/resume/badge.svg",
  title: "Experience",
  description:
    "An overview of my professional experience, including my transition into IT development, with a background in entrepreneurship.",
  items: [
    {
      company: "TRASK Solutions a.s.",
      position: "Java Developer",
      duration: "Mar 2025 – Present",
    },
    {
      company: "Komerční banka",
      position: "Junior Java Developer",
      duration: "Apr 2023 – Dec 2024",
    },
    {
      company: "Green Fox Academy",
      position: "Junior DevOps Engineer (Bootcamp Project Role)",
      duration: "Apr 2023 – Aug 2023",
    },
    {
      company: "JASS A.S.",
      position: "CNC Technologist (Laser Cutting)",
      duration: "Jan 2022 – Apr 2022",
    },
    {
      company: "AD FIN A.S.",
      position: "Tax Assistant",
      duration: "Jan 2015 – Jan 2017",
    },
    {
      company: "Daily Menu s.r.o.",
      position: "Owner / Managing Director (Gastro)",
      duration: "Jan 2013 – Jan 2022",
    },
  ],
};
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description:
    "Overview of my educational background, including formal studies and intensive in-person and online programming courses.",
  items: [
    {
      institution: "Codecademy",
      degree: "Spring Boot Basics",
      duration: "2024",
    },
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
    {
      institution: "Green Fox Academy",
      degree: "Java Backend Developer, Intensive (on-site) Bootcamp",
      duration: "Apr 1 - Aug 31, 2023",
    },
    {
      institution: "University of Pardubice, Faculty of Information Technology",
      degree: "Bachelor's Program (Incomplete)",
      duration: "2013 - 2015",
    },
    {
      institution: "Christian Doppler Mathematical-Physical Gymnasium",
      degree: "High School Diploma (Graduated with Matura)",
      duration: "Graduated 2012",
    },
  ],
};
const skills = {
  title: "Skills",
  description:
    "A curated list of technologies I've worked with, mainly focused on Backend development and some experience with DevOps. While some of them I use daily, others I’ve explored in specific projects or training environments. My main strengths lie in Java and related technologies. List for conveniece instead of icons is at the bottom",
  skillList: [
    // === BACKEND / CORE ===
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Maven", icon: <SiApachemaven /> },
    { name: "Gradle", icon: <SiGradle /> },
    { name: "JUnit", icon: <VscBeaker /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "Swagger", icon: <SiSwagger /> },

    // === CI/CD + MONITORING ===
    { name: "Jenkins", icon: <FaJenkins /> },
    { name: "Grafana", icon: <SiGrafana /> },
    { name: "ELK Stack", icon: <SiElastic /> },

    // === DATABASES ===
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },

    // === VERSION CONTROL ===
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "GitLab", icon: <FaGitlab /> },
    { name: "Bitbucket", icon: <FaBitbucket /> },

    // === PROJECT MGMT / TOOLS ===
    { name: "Jira", icon: <SiJira /> },
    { name: "Confluence", icon: <SiConfluence /> },
    { name: "Postman", icon: <SiPostman /> },

    // === METHODOLOGIES ===
    { name: "Scrum", icon: <SiDebian /> },
    { name: "Agile", icon: <FaSortUp /> },

    // === FRONTEND ===
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "HTML", icon: <FaHtml5 /> },

    // === OPTIONAL ===
    { name: "Node.js", icon: <FaNodeJs /> },
  ],
};
const about = {
  title: "About Me",
  description:
    "Motivated Java developer with hands-on backend and DevOps experience, strong work ethic, and a drive for continuous learning and improvement. I thrive in collaborative environments and am eager to contribute to innovative projects.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jiří Urban",
    },
    {
      fieldName: "Phone",
      fieldValue: "phone", // marker
    },
    {
      fieldName: "Email",
      fieldValue: "email", // marker
    },
    {
      fieldName: "Experience",
      fieldValue: experienceDuration,
    },
    {
      fieldName: "Nationality",
      fieldValue: "Czech Republic",
    },
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
  FaSortUp,
} from "react-icons/fa";
import {
  SiApachemaven,
  SiGradle,
  SiNextdotjs,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSwagger,
  SiTerraform,
  SiGrafana,
  SiElastic,
  SiPostman,
  SiJira,
  SiConfluence,
  SiDebian,
} from "react-icons/si";
import { VscBeaker } from "react-icons/vsc";
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
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[500px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[220px] py-8 px-10 rounded-2xl flex flex-col items-center justify-center gap-2"
                      >
                        <span className="text-accent text-sm">{item.duration}</span>
                        <h3 className="text-xl max-w-[320px] min-h-[70px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 text-sm">{item.institution}</p>
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
              <div className="mt-10 space-y-6 text-left text-white/80">
                <div>
                  <h4 className="text-accent font-semibold mb-1">Backend & Core</h4>
                  <p>Java, Spring Boot, Gradle, Maven, JUnit, Swagger</p>
                </div>
                <div>
                  <h4 className="text-accent font-semibold mb-1">CI/CD & Monitoring</h4>
                  <p>Jenkins, Grafana, ELK Stack</p>
                </div>
                <div>
                  <h4 className="text-accent font-semibold mb-1">Databases</h4>
                  <p>MySQL, PostgreSQL, MongoDB</p>
                </div>
                <div>
                  <h4 className="text-accent font-semibold mb-1">Version Control</h4>
                  <p>Git, GitHub, GitLab, Bitbucket</p>
                </div>
                <div>
                  <h4 className="text-accent font-semibold mb-1">DevOps</h4>
                  <p>Docker, Terraform,</p>
                </div>
                <div>
                  <h4 className="text-accent font-semibold mb-1">Project Tools</h4>
                  <p>Jira, Confluence, Postman</p>
                </div>
                <div>
                  <h4 className="text-accent font-semibold mb-1">Methodologies</h4>
                  <p>Scrum, Agile</p>
                </div>
                <div>
                  <h4 className="text-accent font-semibold mb-1">Frontend</h4>
                  <p>React, Next.js, Tailwind CSS, JavaScript, CSS, HTML</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  const renderValue = () => {
                    if (item.fieldValue === "email") {
                      const user = "urbjir01";
                      const domain = "gmail.com";
                      const email = `${user}@${domain}`;
                      return (
                        <a href={`mailto:${email}`} className="text-xl text-accent hover:underline">
                          {email}
                        </a>
                      );
                    } else if (item.fieldValue === "phone") {
                      const phoneParts = ["+420", "728", "504", "470"];
                      const fullPhone = phoneParts.join(" ");
                      const telHref = phoneParts.join("");
                      return (
                        <a href={`tel:${telHref}`} className="text-xl text-accent hover:underline">
                          {fullPhone}
                        </a>
                      );
                    } else {
                      return <span className="text-xl">{item.fieldValue}</span>;
                    }
                  };

                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}:</span>
                      {renderValue()}
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
