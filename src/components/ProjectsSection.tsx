import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project1Img from "../assets/projects/mps.png";
import Project2Img from "../assets/projects/mockup.png";
import Project3Img from "../assets/projects/hardspace.png";
import Project4Img from "../assets/projects/anchatty.png";
import GlitchText from "./GlitchText";

const projects = [
  {
    title: "ERP Module - Production Planning",
    description:
      "Developed a customized production planning solution for ISATIS, fully integrated into the Odoo ERP system. The module introduces a dynamic matrix interface to manage and forecast manufacturing operations across multiple time periods, while maintaining alignment with Odoo's inventory, sales, MRP, and procurement features. Built using Python within the Odoo framework, with interactive frontend components crafted using OWL (Odoo Web Library) and PostgreSQL for data persistence, the system supports automation, improves visibility, and enhances supply chain decision-making. Delivered through Agile development cycles.",
    stack: "Odoo Framework (Python), OWL (JavaScript), PostgreSQL",
    image: Project1Img,
    role: "FullStack Developer & Analyst",
    link: "https://github.com/belkhelfamehdi/Plan-directeur-de-production",
  },
  {
    title: "MySkilledCV – Resume Screening Platform",
    description:
      "MySkilledCV is an intelligent recruitment platform that simplifies the hiring process for companies. It allows employers to upload resumes and instantly receive ranked candidate insights powered by AI. The platform offers a smooth user experience, real-time updates, and intuitive tools to manage job postings and applicants more effectively. It’s designed to enhance decision-making, reduce manual screening effort, and accelerate the hiring workflow.",
    stack: "Spring Boot, Angular, TailwindCSS, PostgreSQL",
    image: Project2Img,
    role: "FullStack Developer",
    link: "https://github.com/belkhelfamehdi/MySkilledCV_Frontend",
  },
  {
    title: "HardSpace – E-Commerce Platform",
    description:
      "HardSpace is a web-based e-commerce platform designed for the sale and distribution of computer hardware. The platform offers a complete interface for customers, suppliers, and administrators, enabling real-time product management, order processing, and user interaction. Built with Laravel 10 for robust backend logic, Tailwind CSS for a responsive and modern UI, and MySQL for reliable data management, the system delivers a scalable and efficient shopping experience tailored for tech enthusiasts and vendors alike.",
    stack: "Laravel, TailwindCSS, MySQL",
    image: Project3Img,
    role: "FullStack Developer",
    link: "https://github.com/belkhelfamehdi/E-commerce-HardSpace",
  },
  {
    title: "AnChatty – Realtime Messaging Platform",
    description: "AnChatty is a sleek, modern messaging web application inspired by WhatsApp. It features real-time communication, user presence detection, and responsive chat UI with emoji support. Built with Next.js and TypeScript, it leverages Stream for chat infrastructure and Clerk for secure authentication. The app focuses on seamless interaction, intuitive design, and fast performance, delivering a smooth and engaging user experience.",
    stack: "TypeScript, Next.js, TailwindCSS, Clerk Auth, Stream",
    image: Project4Img,
    role: "FullStack Developer",
    link: "https://github.com/belkhelfamehdi/anchatty",
  }
  
];

const ProjectsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((i) => (i + 1) % projects.length);
  const prev = () => setCurrent((i) => (i - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="min-h-screen text-neon-green font-mono flex flex-col items-center justify-center px-4 py-16 relative">
      {/* HUD Label */}

      <div className="flex flex-col md:flex-row items-center justify-between space-x-0 space-y-5 w-full max-w-7xl">
        {/* Image */}
        <div className="relative w-full md:w-2/5 h-[400px] border border-neon-green shadow-[0_0_30px_#00FFB3] rounded-lg bg-black/60 backdrop-blur-sm">
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
        </div>

        {/* Text */}
        <div className="flex flex-col items-start justify-center w-full md:w-1/2 mt-10 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              <p className="text-gray-500 font-mono text-xl mb-2">&lt;p&gt;</p>
              <div className="flex flex-col items-start gap-7">
                <h1 className="text-2xl md:text-4xl font-bold font-orbitron text-neon-green leading-tight relative">
                  <span className="relative z-10">
                    <GlitchText text={projects[current].title} delay={-10} />
                  </span>
                  <span className="absolute inset-0 blur-md opacity-40 text-white z-0">
                    <GlitchText text={projects[current].title} delay={-10} />
                  </span>
                </h1>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 px-2 py-2 bg-black/50 border border-neon-green rounded shadow-[0_0_10px_#00FFB3]">
                  {projects[current].stack.split(", ").map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 border border-neon-green text-xs rounded bg-black text-neon-green font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 font-mono text-md leading-normal">
                  {projects[current].description}
                </p>

                <h2 className="text-lg font-bold font-orbitron text-neon-green">
                  <GlitchText text={projects[current].role} delay={-10} />
                </h2>

                {projects[current].link !== "#" && (
                  <a
                    href={projects[current].link}
                    target="_blank"
                    className=" px-4 py-2 border border-neon-green rounded font-mono text-xs text-neon-green hover:bg-neon-green/20 transition"
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

      {/* Navigation */}
      <div className="flex items-center justify-between w-3/5 mt-14">
        <button
          onClick={prev}
          className="w-14 h-14 rounded-full border border-neon-green bg-black/30 hover:bg-neon-green/10 flex items-center justify-center group transition relative"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          className="w-20 h-20 rounded-full border border-neon-green bg-black/30 hover:bg-neon-green/10 flex items-center justify-center group transition relative"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="absolute w-2 h-2 bg-white rounded-full right-1 top-1 blur-sm animate-ping" />
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
