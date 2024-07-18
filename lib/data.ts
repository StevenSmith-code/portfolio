import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import rmtdevImg from "@/public/freelance.png";
import corpcommentImg from "@/public/LMS-app.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Customer Representative",
    location: "Remote",
    description:
      "I worked as a CSR at Verizon helping users navigate and solve whatever problems that are needed.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2021",
  },
  {
    title: "Graduated bootcamp",
    location: "Remote",
    description:
      "I graduated after 10 months of studying. Learning Full-Stack software development.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and SQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Software Engineer @ WeVote",
    location: "Remote",
    description:
      "Doing volunteer work for WeVote has given me experience on how to use React, Javascript, and Django in a professional environment as well as using JIRA and SCRUM.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Learning Management System",
    description:
      "This is an Google Classroom like project where users can purchase/sell courses via stripe",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Prisma", "Rails"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Lashes Appointment Booking App",
    description:
      "App I worked on for a client where users can book an appointment to get their eyelashes done.",
    tags: ["React", "Tailwind", "NextJS", "Prisma", "Node.js", "SQL"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "PostgreSQL",
  "Framer Motion",
  "Ruby",
  "Ruby on Rails",
  "Sinatra",
] as const;
