import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project1Img from "../assets/projects/mps.png";
import Project2Img from "../assets/projects/mockup.png";
import Project3Img from "../assets/projects/hardspace.png";
import Project4Img from "../assets/projects/anchatty.png";
import Project5Img from "../assets/projects/yalla_interview.png";
import GlitchText from "./GlitchText";

const projects = [
    {
    title: "AnChatty – Realtime Messaging Platform",
    description:
      "A sleek messaging web app inspired by WhatsApp. Built with Next.js and TypeScript, featuring real-time chat, user presence, and emoji support. Uses Stream for infrastructure and Clerk for authentication.",
    stack: "TypeScript, Next.js, TailwindCSS, Clerk Auth, Stream",
    image: Project4Img,
    role: "FullStack Developer",
    link: "https://anchatty-git-master-belkhelfamehdis-projects.vercel.app/",
  },
  {
    title: "Yalla Interview – AI Interview Prep App",
    description:
      "This app allows users to generate personalized interview questions and answers based on their role and experience, take notes, and review topics using AI-generated explanations. Includes role-based sessions, concept breakdowns, and a clean accordion UI for focused learning.",
    stack: "React, Node.js, TailwindCSS, MongoDB, Gemini API",
    image: Project5Img,
    role: "FullStack Developer",
    link: "https://yalla-interview-frontend-git-master-belkhelfamehdis-projects.vercel.app/",
  },
    {
    title: "MySkilledCV – Resume Screening Platform",
    description:
      "An intelligent recruitment platform that analyzes uploaded resumes and ranks candidates using AI. Offers a modern dashboard with drag-and-drop functionality, real-time updates, and efficient applicant management.",
    stack: "Spring Boot, Angular, TailwindCSS, PostgreSQL",
    image: Project2Img,
    role: "FullStack Developer",
    link: "https://github.com/belkhelfamehdi/MySkilledCV_Frontend",
  },
  {
    title: "ERP Module - Production Planning",
    description:
      "Developed a customized production planning solution for ISATIS, fully integrated into the Odoo ERP system. The module introduces a dynamic matrix interface to manage and forecast manufacturing operations across multiple time periods. Built with Python using the Odoo framework, OWL for interactive frontend, and PostgreSQL for data persistence.",
    stack: "Odoo Framework (Python), OWL (JavaScript), PostgreSQL",
    image: Project1Img,
    role: "FullStack Developer & Analyst",
    link: "https://github.com/belkhelfamehdi/Plan-directeur-de-production",
  },
  {
    title: "HardSpace – E-Commerce Platform",
    description:
      "A web-based platform for selling computer hardware. Features include real-time product and order management, user dashboards, and admin tools. Built with Laravel 10, Tailwind CSS, and MySQL.",
    stack: "Laravel, TailwindCSS, MySQL",
    image: Project3Img,
    role: "FullStack Developer",
    link: "https://github.com/belkhelfamehdi/E-commerce-HardSpace",
  },
];


const ProjectsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((i) => (i + 1) % projects.length);
  const prev = () => setCurrent((i) => (i - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      className="min-h-screen text-neon-green font-mono flex flex-col items-center justify-center px-4 py-16 relative"
    >
      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-8">
        {/* Image Section */}
        <div className="relative w-full md:w-2/5 h-[400px] border border-neon-green shadow-[0_0_30px_#00FFB3] rounded-lg bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              <img
                src={projects[current].image}
                alt="project"
                className="w-full h-full object-fill rounded-lg"
              />
            </motion.div>
          </AnimatePresence>

          {/* Mobile arrows beside image */}
          <div className="absolute inset-0 flex items-center justify-between px-3 md:hidden">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-neon-green bg-black/30 hover:bg-neon-green/10 flex items-center justify-center transition"
            >
              <svg className="w-5 h-5 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-neon-green bg-black/30 hover:bg-neon-green/10 flex items-center justify-center transition"
            >
              <svg className="w-5 h-5 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-start justify-center w-full md:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <p className="text-gray-500 text-xl mb-2">&lt;p&gt;</p>
              <div className="flex flex-col gap-6">
                <h1 className="text-2xl md:text-4xl font-bold font-orbitron text-neon-green relative">
                  <span className="relative z-10">
                    <GlitchText text={projects[current].title} delay={-10} />
                  </span>
                  <span className="absolute inset-0 blur-md opacity-40 text-white z-0">
                    <GlitchText text={projects[current].title} delay={-10} />
                  </span>
                </h1>

                {/* Stack */}
                <div className="flex flex-wrap items-center justify-center md:w-fit gap-2 px-2 py-2 bg-black/50 border border-neon-green rounded-lg shadow-[0_0_10px_#00FFB3]">
                  {projects[current].stack.split(", ").map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 border border-neon-green text-xs rounded bg-black text-neon-green font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-md leading-relaxed">
                  {projects[current].description}
                </p>

                {/* Role */}
                <h2 className="text-lg font-bold font-orbitron text-neon-green">
                  <GlitchText text={projects[current].role} delay={-10} />
                </h2>

                {/* Link */}
                {projects[current].link !== "#" && (
                  <a
                    href={projects[current].link}
                    target="_blank"
                    className="px-4 py-2 md:w-fit text-center border border-neon-green rounded font-mono text-xs text-neon-green hover:bg-neon-green/20 transition"
                  >
                    View Project →
                  </a>
                )}
              </div>
              <div className="flex items-start mt-2 text-xl text-gray-500 font-mono">
                <span>&lt;/p&gt;</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between w-3/5 mt-14">
        <button
          onClick={prev}
          className="w-14 h-14 rounded-full border border-neon-green bg-black/30 hover:bg-neon-green/10 flex items-center justify-center transition"
        >
          <svg className="w-6 h-6 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex flex-col items-center gap-1 w-full max-w-lg">
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden relative">
            <div
              className="absolute left-0 top-0 h-full bg-neon-green transition-all duration-500"
              style={{ width: `${((current + 1) / projects.length) * 100}%` }}
            />
          </div>
          <span className="text-xs text-gray-400 font-mono">
            [{current + 1}/{projects.length}]
          </span>
        </div>

        <button
          onClick={next}
          className="w-20 h-20 rounded-full border border-neon-green bg-black/30 hover:bg-neon-green/10 flex items-center justify-center transition"
        >
          <svg className="w-6 h-6 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
