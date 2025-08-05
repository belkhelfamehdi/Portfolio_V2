import Project1Img from "../assets/projects/mps.webp";
import Project2Img from "../assets/projects/mockup.webp";
import Project3Img from "../assets/projects/hardspace.webp";
import Project4Img from "../assets/projects/anchatty.webp";
import Project5Img from "../assets/projects/yalla_interview.webp";

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string;
  image: string;
  role: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: "myskilledcv",
    title: "MySkilledCV – Resume Screening Platform",
    description:
      "An intelligent recruitment platform that analyzes uploaded resumes and ranks candidates using AI. Offers a modern dashboard with drag-and-drop functionality, real-time updates, and efficient applicant management.",
    stack: "Spring Boot, Angular, TailwindCSS, PostgreSQL",
    image: Project2Img,
    role: "FullStack Developer",
    link: "https://github.com/belkhelfamehdi/MySkilledCV_Frontend",
  },
  {
    id: "anchatty",
    title: "AnChatty – Realtime Messaging Platform",
    description:
      "A sleek messaging web app inspired by WhatsApp. Built with Next.js and TypeScript, featuring real-time chat, user presence, and emoji support. Uses Stream for infrastructure and Clerk for authentication.",
    stack: "TypeScript, Next.js, TailwindCSS, Clerk Auth, Stream",
    image: Project4Img,
    role: "FullStack Developer",
    link: "https://anchatty-git-master-belkhelfamehdis-projects.vercel.app/",
  },
  {
    id: "yalla-interview",
    title: "Yalla Interview – AI Interview Prep App",
    description:
      "This app allows users to generate personalized interview questions and answers based on their role and experience, take notes, and review topics using AI-generated explanations. Includes role-based sessions, concept breakdowns, and a clean accordion UI for focused learning.",
    stack: "React, Node.js, TailwindCSS, MongoDB, Gemini API",
    image: Project5Img,
    role: "FullStack Developer",
    link: "https://yalla-interview-frontend-git-master-belkhelfamehdis-projects.vercel.app/",
  },
  {
    id: "erp-module",
    title: "ERP Module - Production Planning",
    description:
      "Developed a customized production planning solution for ISATIS, fully integrated into the Odoo ERP system. The module introduces a dynamic matrix interface to manage and forecast manufacturing operations across multiple time periods. Built with Python using the Odoo framework, OWL for interactive frontend, and PostgreSQL for data persistence.",
    stack: "Odoo Framework (Python), OWL (JavaScript), PostgreSQL",
    image: Project1Img,
    role: "FullStack Developer & Analyst",
    link: "https://github.com/belkhelfamehdi/Plan-directeur-de-production",
  },
  {
    id: "hardspace",
    title: "HardSpace – E-Commerce Platform",
    description:
      "A web-based platform for selling computer hardware. Features include real-time product and order management, user dashboards, and admin tools. Built with Laravel 10, Tailwind CSS, and MySQL.",
    stack: "Laravel, TailwindCSS, MySQL",
    image: Project3Img,
    role: "FullStack Developer",
    link: "https://github.com/belkhelfamehdi/E-commerce-HardSpace",
  },
];
