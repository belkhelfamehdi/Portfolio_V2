import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Project } from "../constants/projects";
import GlitchText from "./GlitchText";

interface ProjectModalProps {
  projects: Project[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  projects,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null;
  const project = isOpen ? projects[currentIndex] : null;
  const total = projects.length;

  /* keyboard nav + scroll lock */
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(((currentIndex as number) + 1) % total);
      if (e.key === "ArrowLeft")  onNavigate(((currentIndex as number) - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, currentIndex, onClose, onNavigate, total]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/92"
            style={{
              backdropFilter: "blur(4px)",
              background: "repeating-linear-gradient(to bottom, rgba(255,255,255,0.012), rgba(255,255,255,0.012) 1px, transparent 1px, transparent 3px)",
            }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key={project.id}
            className="relative z-10 w-full max-w-5xl max-h-[92vh] border border-neon-green/50 rounded-lg bg-black overflow-hidden flex flex-col font-mono"
            style={{ boxShadow: "0 0 50px rgba(0,255,179,0.18), 0 0 100px rgba(0,255,179,0.06)" }}
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-neon-green/20 text-xs shrink-0">
              <span className="text-neon-green/40 tracking-widest">[ PROJECT.DETAIL ]</span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onNavigate(((currentIndex as number) - 1 + total) % total)}
                  className="w-7 h-7 flex items-center justify-center border border-neon-green/25
                             hover:border-neon-green/70 hover:text-neon-green text-neon-green/50
                             rounded transition-all duration-200"
                  title="Previous (←)"
                >
                  ←
                </button>

                <span className="text-neon-green/70 min-w-[3.5rem] text-center">
                  {String((currentIndex as number) + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>

                <button
                  onClick={() => onNavigate(((currentIndex as number) + 1) % total)}
                  className="w-7 h-7 flex items-center justify-center border border-neon-green/25
                             hover:border-neon-green/70 hover:text-neon-green text-neon-green/50
                             rounded transition-all duration-200"
                  title="Next (→)"
                >
                  →
                </button>

                <button
                  onClick={onClose}
                  className="ml-2 w-7 h-7 flex items-center justify-center border border-neon-green/25
                             hover:border-red-400/70 hover:text-red-400 text-neon-green/50
                             rounded transition-all duration-200 text-base leading-none"
                  title="Close (Esc)"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
              {/* Left — image */}
              <div className="md:w-5/12 relative border-b md:border-b-0 md:border-r border-neon-green/15 overflow-hidden shrink-0 bg-black">
                <motion.img
                  key={project.id + "-img"}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 md:h-full object-cover"
                  initial={{ scale: 1.06, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />

                {/* Status badge */}
                <div className="absolute top-3 left-3 font-mono">
                  <span
                    className={`text-[10px] tracking-widest px-2 py-1 rounded border ${
                      project.link !== "#"
                        ? "border-neon-green text-neon-green"
                        : "border-gray-700 text-gray-500"
                    }`}
                  >
                    {project.link !== "#" ? "● LIVE" : "● PRIVATE"}
                  </span>
                </div>

                {/* ESC hint */}
                <div className="absolute bottom-3 right-3 text-[9px] text-gray-700 font-mono tracking-widest hidden md:block">
                  ESC to close
                </div>
              </div>

              {/* Right — details */}
              <div className="md:w-7/12 flex flex-col gap-5 p-6 md:p-8 overflow-y-auto">
                {/* Project number */}
                <p className="text-neon-green/30 text-[10px] tracking-[0.3em]">
                  // PROJECT {String((currentIndex as number) + 1).padStart(2, "0")}
                </p>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white leading-tight">
                  <GlitchText text={project.title} delay={-13} />
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Role */}
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-neon-green/50 shrink-0 mt-0.5">&gt;</span>
                  <span className="text-gray-300">{project.role}</span>
                </div>

                {/* Stack */}
                <div>
                  <p className="text-[10px] text-neon-green/35 tracking-[0.25em] mb-3">
                    TECH.STACK ──────
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.split(", ").map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 border border-neon-green/35 text-xs rounded
                                   text-neon-green font-mono
                                   hover:border-neon-green hover:shadow-[0_0_8px_rgba(0,255,179,0.3)]
                                   transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                {project.link !== "#" ? (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 self-start mt-auto px-5 py-2.5
                               border border-neon-green rounded text-sm text-neon-green
                               relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="absolute inset-0 bg-neon-green scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                      VIEW PROJECT
                    </span>
                    <motion.span
                      className="relative z-10 group-hover:text-black transition-colors duration-300"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                ) : (
                  <p className="mt-auto text-xs text-gray-600 font-mono tracking-wider">
                    // SOURCE IS PRIVATE
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
