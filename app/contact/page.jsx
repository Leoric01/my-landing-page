"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhone, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const info = [
  {
    icon: <FaPhone />,
    title: "Phone",
    description: "+1 234 567 890",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "em@em.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Nusle, Prague, Czech Republic",
  },
];
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm("your_service_id", "your_template_id", e.target, "your_user_id").then(
    (result) => {
      console.log(result.text);
      alert("Message sent successfully!");
    },
    (error) => {
      console.log(error.text);
      alert("Something went wrong.");
    }
  );
};
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              action="mailto:urbjir01@gmail.com"
              method="POST"
              encType="text/plain"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Whether you're looking for a long-term backend developer, help with a one-time project, or just have a
                question — feel free to reach out. I’ll get back to you as soon as possible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select collaboration type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Collaboration Type</SelectLabel>
                    <SelectItem value="full-time">Full-time cooperation</SelectItem>
                    <SelectItem value="part-time">Part-time / long-term</SelectItem>
                    <SelectItem value="one-time">One-time project / task</SelectItem>
                    <SelectItem value="question">Just a question / inquiry</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea placeholder="Type your message here..." className="h-[200px]" />
              <Button className="max-w-40">Send message</Button>
            </form>
          </div>
          {/* contact info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex gap-6 items-center">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      {item.title === "Email" ? (
                        (() => {
                          const user = "urbjir01";
                          const domain = "gmail.com";
                          const email = `${user}@${domain}`;
                          return (
                            <a href={`mailto:${email}`} className="text-xl text-accent hover:underline">
                              {email}
                            </a>
                          );
                        })()
                      ) : item.title === "Phone" ? (
                        (() => {
                          const phoneParts = ["+420", "728", "504", "470"];
                          const fullPhone = phoneParts.join(" ");
                          const telHref = phoneParts.join("");
                          return (
                            <a href={`tel:${telHref}`} className="text-xl text-accent hover:underline">
                              {fullPhone}
                            </a>
                          );
                        })()
                      ) : (
                        <h3 className="text-xl">{item.description}</h3>
                      )}{" "}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
