import React from "react";
import { motion } from "framer-motion";

interface Experience {
  id: string;
  company: string;
  role: string;
  type: "ALTERNANCE" | "STAGE";
  period: string;
  current: boolean;
  stack: string[];
  highlights: string[];
}

const experiences: Experience[] = [
  {
    id: "mga",
    company: "MGA",
    role: "Fullstack Developer",
    type: "ALTERNANCE",
    period: "09/2025 — 09/2026",
    current: true,
    stack: ["Spring Boot", "React", "TypeScript", "TailwindCSS", "PostgreSQL", "MySQL", "GitLab CI", "WordPress", "WooCommerce", "PHP"],
    highlights: [
      "Built a custom internal ERP centralizing order tracking, quotes, invoicing, inventory and a reporting dashboard — modular architecture designed to scale.",
      "Developed and shipped DistriResto (WooCommerce): product catalogue, order management, Stripe payments, SSL security and anti-spam protection.",
    ],
  },
  {
    id: "isatis",
    company: "ISATIS",
    role: "Fullstack Developer",
    type: "STAGE",
    period: "01/2024 — 05/2024",
    current: false,
    stack: ["Python", "JavaScript", "Odoo", "PostgreSQL"],
    highlights: [
      "Built a production planning module integrated into the client's Odoo ERP: raw material needs calculation, manufacturing order scheduling and workshop capacity management.",
      "Delivered to production — replaced a fully manual process with a tool embedded directly in the client's existing workflow.",
    ],
  },
  {
    id: "chu",
    company: "CHU Béjaïa",
    role: "Fullstack Developer",
    type: "STAGE",
    period: "01/2023 — 06/2023",
    current: false,
    stack: ["Laravel", "PHP", "Vue.js 3", "Inertia.js", "TailwindCSS", "MySQL", "Docker"],
    highlights: [
      "Full redesign of the hospital's internal management system: patient records, staff scheduling, pharmacy inventory, room assignments, blood bank and billing.",
      "Replaced a legacy procedural PHP application with a modern unified platform for medical and administrative teams.",
    ],
  },
];

/* ─── Timeline Dot ──────────────────────────────────── */
const TimelineDot: React.FC<{ current: boolean; index: number }> = ({ current, index }) => (
  <motion.div
    className="relative w-3 h-3 flex items-center justify-center"
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.4, delay: index * 0.15, ease: "backOut" }}
    viewport={{ once: true }}
  >
    <div
      className="w-3 h-3 rounded-full bg-neon-green z-10 relative"
      style={{ boxShadow: current ? "0 0 12px #00FFB3, 0 0 24px rgba(0,255,179,0.4)" : "0 0 6px #00FFB3" }}
    />
    {current && (
      <>
        <motion.div
          className="absolute inset-0 rounded-full border border-neon-green"
          animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border border-neon-green"
          animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
          transition={{ duration: 2, delay: 0.7, repeat: Infinity, ease: "easeOut" }}
        />
      </>
    )}
  </motion.div>
);

/* ─── Experience Card ───────────────────────────────── */
const ExperienceCard: React.FC<{ exp: Experience; index: number; align: "left" | "right" }> = ({
  exp,
  index,
  align,
}) => (
  <motion.div
    className="relative border border-neon-green/30 rounded-lg bg-black/70 p-5 flex flex-col gap-4
               hover:border-neon-green/60 hover:shadow-[0_0_20px_rgba(0,255,179,0.1)]
               transition-[border-color,box-shadow] duration-400 group"
    initial={{ opacity: 0, x: align === "left" ? -35 : 35 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.65, delay: index * 0.1 + 0.15, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {/* Left animated border accent */}
    <motion.div
      className="absolute left-0 top-0 bottom-0 w-0.5 bg-neon-green rounded-l-lg"
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      style={{ transformOrigin: "top", boxShadow: "0 0 6px #00FFB3" }}
      viewport={{ once: true }}
    />

    {/* Header */}
    <div className="flex items-start justify-between gap-3">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span
            className={`text-[10px] font-mono tracking-widest px-2 py-0.5 rounded border ${
              exp.type === "ALTERNANCE"
                ? "border-neon-green text-neon-green"
                : "border-gray-600 text-gray-400"
            }`}
          >
            {exp.type}
          </span>
          {exp.current && (
            <span className="text-[10px] font-mono text-neon-green/70 animate-flicker tracking-wider">
              [ NOW ]
            </span>
          )}
        </div>
        <h3 className="text-xl font-orbitron font-bold text-white tracking-wider">
          {exp.company}
        </h3>
        <p className="text-sm text-neon-green/70 font-mono mt-0.5">
          {exp.role}
        </p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-xs font-mono text-neon-green/40 tracking-widest whitespace-nowrap">
          {exp.period.split(" — ")[0]}
        </p>
        <p className="text-xs font-mono text-neon-green/40 tracking-widest">
          {exp.period.split(" — ")[1]}
        </p>
      </div>
    </div>

    {/* Separator */}
    <motion.div
      className="h-px bg-neon-green/15 group-hover:bg-neon-green/30 transition-colors duration-400"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
      style={{ transformOrigin: "left" }}
      viewport={{ once: true }}
    />

    {/* Highlights */}
    <ul className="space-y-2">
      {exp.highlights.map((point, pi) => (
        <li key={pi} className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed">
          <span className="text-neon-green/60 mt-1 shrink-0 text-xs">▸</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>

    {/* Stack */}
    <div className="flex flex-wrap gap-1.5 pt-1">
      {exp.stack.map((tech) => (
        <span
          key={tech}
          className="px-2 py-0.5 text-xs font-mono border border-neon-green/20 rounded
                     text-neon-green/60 hover:border-neon-green/50 hover:text-neon-green/90
                     transition-all duration-200"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

/* ─── Experience Section ────────────────────────────── */
const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full text-neon-green font-mono px-4 py-20 flex flex-col items-center relative"
    >
      <div className="relative z-10 w-full max-w-5xl">
        {/* Section header */}
        <motion.div
          className="mb-14 flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="h-px flex-1 bg-neon-green/20" />
            <span className="text-xs tracking-[0.3em] text-neon-green border border-neon-green/30 px-3 py-1 rounded whitespace-nowrap">
              [ CAREER.TIMELINE ]
            </span>
            <div className="h-px flex-1 bg-neon-green/20" />
          </div>
          <p className="text-xs text-neon-green/40 tracking-widest">
            SYSTEM.LOG &gt;&gt; experience.load() — {experiences.length} MISSIONS COMPLETED
          </p>
        </motion.div>

        {/* ── Desktop: alternating two-column ── */}
        <div className="hidden md:block relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-4 bottom-4 w-px overflow-hidden -translate-x-1/2">
            <motion.div
              className="w-full bg-neon-green/25"
              style={{ height: "0%", boxShadow: "0 0 4px rgba(0,255,179,0.3)" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0; // card on the left half
            return (
              <div key={exp.id} className="relative grid grid-cols-2 mb-10 min-h-[16rem]">
                {/* Left half */}
                <div className="pr-10 flex items-center justify-end">
                  {isLeft && (
                    <div className="w-full max-w-[420px]">
                      <ExperienceCard exp={exp} index={i} align="left" />
                    </div>
                  )}
                </div>

                {/* Right half */}
                <div className="pl-10 flex items-center justify-start">
                  {!isLeft && (
                    <div className="w-full max-w-[420px]">
                      <ExperienceCard exp={exp} index={i} align="right" />
                    </div>
                  )}
                </div>

                {/* Center dot + period label */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
                  <TimelineDot current={exp.current} index={i} />
                  <motion.span
                    className="text-[9px] text-neon-green/35 tracking-widest whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {exp.period.split(" — ")[0]}
                  </motion.span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile: single column with left line ── */}
        <div className="md:hidden relative pl-8">
          {/* Left vertical line */}
          <div className="absolute left-2.5 top-0 bottom-0 w-px overflow-hidden">
            <motion.div
              className="w-full bg-neon-green/25"
              style={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          {experiences.map((exp, i) => (
            <div key={exp.id} className="relative mb-8">
              {/* Dot */}
              <div className="absolute -left-5 top-5 z-10">
                <TimelineDot current={exp.current} index={i} />
              </div>
              <ExperienceCard exp={exp} index={i} align="right" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
