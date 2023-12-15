import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import HunterXO from "@/public/HunterXO.png";
import Minesweeper from "@/public/Minesweeper.png";
import Notes from "@/public/Notes.png";
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
    title: "Corporate Service Engineer",
    location: "Seattle, WA",
    description:
      "I used my skills in JavaScript, HTML, and CSS to facilitate and develope department SharePoint sites.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2021",
  },
  {
    title: "Certificate of Completion",
    location: "University of Washington",
    description:
      "I completed the certificate after 7 months of studying, JavaScript, React, and Nodejs.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Software Engineer",
    location: "Seattle, WA",
    description:
      "I worked as a software engineer for 2 years, where I up-skilled with AWS, Kubernetes, Gitlab, DataDog, and more.",
    icon:  React.createElement(FaReact),
    date: "2021 - 2023",
  },
  
] as const;

export const projectsData = [
  {
    title: "Hunter XO",
    description:
      "Hunter XO is an RPG (Role Playing Game) site that allows users to create their own characters, notes, and access to rules that can be edited with elevated permissions.",
    tags: ["React", "Firebase DB", "Bootstrap"],
    imageUrl: HunterXO,
  },
  {
    title: "Minesweeper",
    description:
      "Minesweeper game to show complex logic using math and window observer.",
    tags: ["Vite", "TypeScript", "StyledComponent"],
    imageUrl: Minesweeper,
  },
  {
    title: "Note Taking App",
    description:
      "Note taking app that allows users to create, edit, and delete notes. This is a full-stack app that uses Next.js, Prisma, Zod, and PostgreSQL.",
    tags: ["Vite", "LocalStorage", "Tailwind", "TypeScript"],
    imageUrl: Notes,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vite",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Firebase",
  "PowerShell"
] as const;