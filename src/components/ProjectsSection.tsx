import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { projects, type Project } from "../constants/projects";
import GlitchText from "./GlitchText";
import ProjectModal from "./ProjectModal";

/* ─── 3D Tilt Card ──────────────────────────────────── */
const ProjectCard: React.FC<{
  project: Project;
  index: number;
  onClick: () => void;
}> = ({ project, index, onClick }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [9, -9]), {
    stiffness: 260,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-9, 9]), {
    stiffness: 260,
    damping: 28,
  });

  const glowX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);
  const glowBg = useMotionTemplate`radial-gradient(130px circle at ${glowX} ${glowY}, rgba(0,255,179,0.08), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const staggerDir = index % 3 === 0 ? -40 : index % 3 === 2 ? 40 : 0;

  return (
    <motion.div
      className="card-3d-wrapper"
      initial={{ opacity: 0, y: 50, x: staggerDir }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className="relative group border border-neon-green/40 rounded-lg bg-black/70 overflow-hidden h-full
                   transition-[border-color,box-shadow] duration-300 cursor-pointer
                   hover:border-neon-green hover:shadow-[0_0_30px_rgba(0,255,179,0.25)]"
      >
        {/* Dynamic spotlight */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: glowBg }}
        />

        {/* Project number */}
        <div className="absolute top-3 right-4 z-20 font-mono text-xs text-neon-green/30 group-hover:text-neon-green/70 transition-colors duration-300">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Image */}
        <div className="relative h-48 overflow-hidden border-b border-neon-green/20 group-hover:border-neon-green/50 transition-colors">
          <img
            loading="lazy"
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700
                       grayscale group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* Scan line */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-neon-green/60 opacity-0 group-hover:opacity-100"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            style={{ boxShadow: "0 0 6px #00FFB3" }}
          />

          {/* "Click to expand" hint */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[10px] font-mono text-neon-green/70 tracking-widest bg-black/60 px-2 py-0.5 rounded">
              CLICK TO EXPAND
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3" style={{ transform: "translateZ(20px)" }}>
          <h3 className="text-sm font-bold font-orbitron text-neon-green leading-snug">
            <GlitchText text={project.title} delay={-10} />
          </h3>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.split(", ").map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 border border-neon-green/30 text-xs rounded
                           text-neon-green/70 font-mono hover:border-neon-green hover:text-neon-green
                           hover:shadow-[0_0_6px_rgba(0,255,179,0.3)] transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-auto pt-2 border-t border-neon-green/10">
            <div className="text-xs text-gray-500 font-mono flex items-center gap-1">
              <span className="text-neon-green/50">&gt;</span>
              <span>{project.role}</span>
            </div>
            <span className="text-xs font-mono text-neon-green/50 border border-neon-green/20 px-2.5 py-1 rounded group-hover:border-neon-green/50 transition-colors">
              OPEN →
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Projects Section ──────────────────────────────── */
const ProjectsSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <section
        id="projects"
        className="min-h-[70vh] text-neon-green font-mono flex flex-col items-center justify-center px-4 py-20 relative"
      >
        <div className="relative z-10 w-full max-w-6xl">
          {/* Section header */}
          <motion.div
            className="mb-12 flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 w-full max-w-md">
              <div className="h-px flex-1 bg-neon-green/20" />
              <span className="text-xs tracking-[0.3em] text-neon-green border border-neon-green/30 px-3 py-1 rounded whitespace-nowrap">
                [ PROJECT.MODULE ]
              </span>
              <div className="h-px flex-1 bg-neon-green/20" />
            </div>
            <p className="text-xs text-neon-green/40 tracking-widest">
              SYSTEM.LOG &gt;&gt; projects.init() — {projects.length} RECORDS FOUND
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        projects={projects}
        currentIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onNavigate={(i) => setSelectedIndex(i)}
      />
    </>
  );
};

export default ProjectsSection;
