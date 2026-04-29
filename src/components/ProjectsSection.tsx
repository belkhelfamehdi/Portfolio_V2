import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants/projects";
import GlitchText from "./GlitchText";

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-[70vh] text-neon-green font-mono flex flex-col items-center justify-center px-4 py-16 relative"
    >
      {/* Background HUD Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#00FFB3_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />

      {/* HUD Panel Container */}
      <div className="relative z-10 w-full max-w-6xl border border-neon-green rounded-lg shadow-[0_0_60px_#00FFB3] bg-black/80 p-8">
        {/* Top HUD Label */}
        <div className="absolute -top-4 left-6 px-3 text-xs font-mono text-neon-green bg-black border border-neon-green rounded">
          [ PROJECT.MODULE / ACTIVE ]
        </div>

        <div className="mb-10 text-center text-md text-neon-green opacity-80">
          <span className="tracking-wide">[ SYSTEM.LOG &gt;&gt; projects.init() ]</span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group border border-neon-green rounded-lg bg-black/60 overflow-hidden shadow-[0_0_15px_#00FFB3] hover:shadow-[0_0_30px_#00FFB3] transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden border-b border-neon-green">
                <img
                  loading="lazy"
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-5 flex flex-col gap-4">
                <h3 className="text-lg font-bold font-orbitron text-neon-green">
                  <GlitchText text={project.title} delay={-10} />
                </h3>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.split(", ").map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 border border-neon-green text-[10px] rounded bg-black text-neon-green font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Role */}
                <div className="text-xs text-gray-500 font-mono">
                  <span className="text-neon-green">&gt;</span> {project.role}
                </div>

                {/* Link */}
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="self-start px-4 py-2 border border-neon-green rounded font-mono text-xs text-neon-green hover:bg-neon-green/20 transition"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;