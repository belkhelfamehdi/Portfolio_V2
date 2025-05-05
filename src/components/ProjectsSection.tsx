import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project1Img from "../assets/MehdiBelkhelfa.png";
import Project2Img from "../assets/MehdiBel_nobg.png";
import Project3Img from "../assets/projects/hardspace.png";
import GlitchText from "./GlitchText";
import { Typewriter } from "react-simple-typewriter";

const projects = [
  {
    title: "CV Parser UI",
    description:
      "A streamlined frontend interface for parsing and reviewing CVs. Integrated with parsing APIs and built with React + Tailwind.",
    stack: "React, Tailwind, Framer Motion",
    image: Project1Img,
    role: "Frontend Developer",
    link: "#",
  },
  {
    title: "ERP Module - Production Planning",
    description:
      "Custom Odoo module for optimizing production workflows at CHU. Backend logic and interface co-developed.",
    stack: "Odoo, Python, PostgreSQL",
    image: Project2Img,
    role: "FullStack Dev",
    link: "#",
  },
  {
    title: "Portfolio V2",
    description:
      "This portfolio — built with Vite, styled like a cyberpunk HUD terminal. Focused on motion, theme, and interactivity.",
    stack: "Vite, React, Tailwind",
    image: Project3Img,
    role: "Designer & Engineer",
    link: "#",
  },
];

const ProjectsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((index) => (index + 1) % projects.length);

  const prev = () =>
    setCurrent((index) => (index - 1 + projects.length) % projects.length);

  return (
    <section className="min-h-screen text-neon-green font-mono flex flex-col items-center justify-center px-4 py-16">
      {/* Projects */}
      <div className="flex items-center justify-center space-x-5 w-full">
        {/* Left side (image) */}
        <div className="relative w-lg h-lg aspect-square rounded-full overflow-hidden">
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
                alt=""
                className="w-full h-full object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right side (text) */}
        <div className="flex flex-col items-start justify-center w-full max-w-2xl">
          <p className="text-gray-500 font-mono text-xl mb-2">&lt;p&gt;</p>
          <div className="flex flex-col items-start gap-7 max-w-full">
            <h1 className="text-2xl md:text-4xl font-bold font-orbitron text-neon-green leading-tight ml-10 relative">
              <span className="relative z-10"><GlitchText text={projects[current].title} delay={-10}/></span>
              <span className="absolute inset-0 blur-lg opacity-50 text-white z-0">
                <GlitchText text={projects[current].title} delay={-10} />
              </span>
            </h1>
            <p className="text-gray-400 font-mono text-md ml-10 mt-1">
              {projects[current].description}
            </p>
            <h2 className="text-xl font-bold font-orbitron text-neon-green leading-tight ml-10">
              {projects[current].role}
            </h2>
          </div>
          <div className="flex items-start mt-2 text-xl text-gray-500 font-mono">
            <span>&lt;/p&gt;</span>
          </div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="flex items-center justify-between w-3/5 mt-14 space-x-0">
        {/* Prev */}
        <button
          onClick={prev}
          className="w-14 h-14 rounded-full border border-white flex items-center justify-center group transition hover:border-neon-green relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-neon-green group-hover:scale-110 transition"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="w-xl h-2 bg-gray-800 rounded-full overflow-hidden relative">
          <div
            className="absolute left-0 top-0 h-full bg-neon-green transition-all duration-500"
            style={{ width: `${((current + 1) / projects.length) * 100}%` }}
          />
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="w-20 h-20 rounded-full border border-white flex items-center justify-center group transition hover:border-neon-green relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-neon-green group-hover:scale-110 transition"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="absolute w-2 h-2 bg-white rounded-full right-1 top-1 blur-sm animate-ping" />
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
