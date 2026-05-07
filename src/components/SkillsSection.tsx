import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiPhp, SiReact, SiAngular, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiSpringboot, SiLaravel, SiPostgresql,
  SiExpress, SiGit, SiGitlab, SiDocker, SiFirebase,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillIcons: Record<string, React.ReactElement> = {
  JavaScript:     <SiJavascript />,
  TypeScript:     <SiTypescript />,
  Java:           <FaJava />,
  PHP:            <SiPhp />,
  React:          <SiReact />,
  Angular:        <SiAngular />,
  "Next.js":      <SiNextdotjs />,
  TailwindCSS:    <SiTailwindcss />,
  "Node.js":      <SiNodedotjs />,
  "Spring Boot":  <SiSpringboot />,
  Laravel:        <SiLaravel />,
  PostgreSQL:     <SiPostgresql />,
  Express:        <SiExpress />,
  Git:            <SiGit />,
  "GitLab CI/CD": <SiGitlab />,
  Docker:         <SiDocker />,
  Firebase:       <SiFirebase />,
};

const skills: Record<string, string[]> = {
  Languages: ["JavaScript", "TypeScript", "Java", "PHP"],
  Frontend:  ["React", "Angular", "Next.js", "TailwindCSS"],
  Backend:   ["Node.js", "Spring Boot", "Laravel", "PostgreSQL", "Express"],
  Tools:     ["Git", "GitLab CI/CD", "Docker", "Firebase"],
};

const categoryIcons: Record<string, string> = {
  Languages: "{ }",
  Frontend:  "< >",
  Backend:   "[ ]",
  Tools:     "( )",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1 },
};

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="min-h-[70vh] w-full text-neon-green font-mono px-4 py-20 flex flex-col items-center justify-center relative"
    >
      <div className="relative z-10 w-full max-w-5xl">
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
              [ SKILL.MODULE ]
            </span>
            <div className="h-px flex-1 bg-neon-green/20" />
          </div>
          <p className="text-xs text-neon-green/40 tracking-widest">
            SYSTEM.LOG &gt;&gt; skills.init() — ARSENAL LOADED
          </p>
        </motion.div>

        {/* Skill categories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              variants={cardVariants}
              className="relative p-5 border border-neon-green/30 rounded-md bg-black/60 group
                         hover:border-neon-green/70 transition-[border-color,box-shadow] duration-400
                         hover:shadow-[0_0_20px_rgba(0,255,179,0.12)]"
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-neon-green/40 text-sm font-orbitron">
                  {categoryIcons[category]}
                </span>
                <div>
                  <p className="text-xs text-neon-green/40 tracking-[0.2em] mb-0.5">
                    // CATEGORY {String(catIndex + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-xs font-bold tracking-widest text-neon-green font-orbitron">
                    {category.toUpperCase()}
                  </h3>
                </div>
                {/* Animated top-right corner dot */}
                <motion.div
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-neon-green"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, delay: catIndex * 0.3, repeat: Infinity }}
                />
              </div>

              {/* Border draw on left */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-px bg-neon-green"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
                viewport={{ once: true }}
              />

              {/* Skills */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              >
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={pillVariants}
                    transition={{ duration: 0.3, ease: "backOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1.5
                               border border-neon-green/25 rounded-full text-xs font-mono
                               text-neon-green/80 bg-black/80
                               hover:bg-neon-green/10 hover:border-neon-green hover:text-neon-green
                               hover:shadow-[0_0_10px_rgba(0,255,179,0.2)]
                               cursor-default transition-all duration-250 group/pill"
                  >
                    <span className="text-sm text-neon-green/60 group-hover/pill:text-neon-green transition-colors duration-200">
                      {skillIcons[skill]}
                    </span>
                    <span>{skill}</span>
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
