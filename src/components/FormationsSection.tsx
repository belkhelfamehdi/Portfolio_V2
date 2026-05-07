import React from "react";
import { motion } from "framer-motion";

interface Formation {
  id: string;
  school: string;
  degree: string;
  field: string;
  type: "MASTER" | "LICENCE" | "BTS" | "DUT" | "BUT" | "INGENIEUR" | "CERTIFICATION";
  period: string;
  current: boolean;
  location: string;
  highlights: string[];
  skills: string[];
}

const formations: Formation[] = [
  {
    id: "ynov-master",
    school: "YNOV Campus Lille",
    degree: "Master Informatique",
    field: "Expert en développement Fullstack",
    type: "MASTER",
    period: "10/2024 — EN COURS",
    current: true,
    location: "Lille",
    highlights: [
      "Formation en cours — spécialisation fullstack, architecture logicielle et technologies numériques.",
    ],
    skills: ["Fullstack", "Architecture", "Cloud", "DevOps", "Technologies Numériques"],
  },
  {
    id: "bejaia-master",
    school: "Université de Béjaïa",
    degree: "Master Informatique",
    field: "Génie Logiciel",
    type: "MASTER",
    period: "09/2022 — 2024",
    current: false,
    location: "Béjaïa, Algérie",
    highlights: [
      "Diplômé — architecture logicielle, qualité du code, méthodes agiles, DevOps et sécurité.",
    ],
    skills: ["Architecture", "Agile", "DevOps", "Sécurité", "Qualité logicielle"],
  },
  {
    id: "bejaia-licence",
    school: "Université de Béjaïa",
    degree: "Licence Informatique",
    field: "Systèmes Informatiques",
    type: "LICENCE",
    period: "09/2019 — 2022",
    current: false,
    location: "Béjaïa, Algérie",
    highlights: [
      "Diplômé — programmation, algorithmique, réseaux, bases de données et systèmes.",
    ],
    skills: ["Algorithmique", "Réseaux", "BDD", "Systèmes", "Linux"],
  },
];

const TYPE_STYLES: Record<Formation["type"], { border: string; text: string }> = {
  MASTER:       { border: "border-neon-green",   text: "text-neon-green" },
  INGENIEUR:    { border: "border-neon-green",   text: "text-neon-green" },
  LICENCE:      { border: "border-gray-500",     text: "text-gray-400" },
  BTS:          { border: "border-gray-500",     text: "text-gray-400" },
  DUT:          { border: "border-gray-500",     text: "text-gray-400" },
  BUT:          { border: "border-gray-500",     text: "text-gray-400" },
  CERTIFICATION:{ border: "border-neon-green/60",text: "text-neon-green/70" },
};

/* ─── Formation Card ─────────────────────────────────── */
const FormationCard: React.FC<{ item: Formation; index: number }> = ({ item, index }) => {
  const badge = TYPE_STYLES[item.type];

  return (
    <motion.div
      className="relative border border-neon-green/30 rounded-lg bg-black/70 p-5 flex flex-col gap-4
                 hover:border-neon-green/60 hover:shadow-[0_0_20px_rgba(0,255,179,0.1)]
                 transition-[border-color,box-shadow] duration-400 group"
      initial={{ opacity: 0, x: 35 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65, delay: index * 0.12 + 0.15, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left animated border accent */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-0.5 bg-neon-green rounded-l-lg"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: index * 0.12 + 0.3 }}
        style={{ transformOrigin: "top", boxShadow: "0 0 6px #00FFB3" }}
        viewport={{ once: true }}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className={`text-[10px] font-mono tracking-widest px-2 py-0.5 rounded border ${badge.border} ${badge.text}`}>
              {item.type}
            </span>
            {item.current && (
              <span className="text-[10px] font-mono text-neon-green/70 animate-flicker tracking-wider">
                [ NOW ]
              </span>
            )}
          </div>
          <h3 className="text-xl font-orbitron font-bold text-white tracking-wider">
            {item.degree}
          </h3>
          <p className="text-sm text-neon-green/70 font-mono mt-0.5">{item.field}</p>
          <p className="text-xs text-gray-500 font-mono mt-0.5 tracking-wide">
            {item.school} — {item.location}
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-xs font-mono text-neon-green/40 tracking-widest whitespace-nowrap">
            {item.period.split(" — ")[0]}
          </p>
          <p className="text-xs font-mono text-neon-green/40 tracking-widest">
            {item.period.split(" — ")[1]}
          </p>
        </div>
      </div>

      {/* Separator */}
      <motion.div
        className="h-px bg-neon-green/15 group-hover:bg-neon-green/30 transition-colors duration-400"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: index * 0.12 + 0.4 }}
        style={{ transformOrigin: "left" }}
        viewport={{ once: true }}
      />

      {/* Highlights */}
      <ul className="space-y-2">
        {item.highlights.map((point, pi) => (
          <li key={pi} className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed">
            <span className="text-neon-green/60 mt-1 shrink-0 text-xs">▸</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {item.skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-0.5 text-xs font-mono border border-neon-green/20 rounded
                       text-neon-green/60 hover:border-neon-green/50 hover:text-neon-green/90
                       transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

/* ─── Formations Section ─────────────────────────────── */
const FormationsSection: React.FC = () => {
  return (
    <section
      id="formations"
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
              [ EDUCATION.LOG ]
            </span>
            <div className="h-px flex-1 bg-neon-green/20" />
          </div>
          <p className="text-xs text-neon-green/40 tracking-widest">
            SYSTEM.LOG &gt;&gt; formations.load() — {formations.length} DIPLÔMES CHARGÉS
          </p>
        </motion.div>

        {/* ── Desktop: two-column grid ── */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 relative">
          {/* Vertical separator */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 overflow-hidden">
            <motion.div
              className="w-full bg-neon-green/15"
              style={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          {formations.map((item, i) => (
            <div key={item.id} className={i % 2 === 0 ? "pr-8" : "pl-8 mt-16"}>
              <FormationCard item={item} index={i} />
            </div>
          ))}
        </div>

        {/* ── Mobile: single column with left line ── */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-2.5 top-0 bottom-0 w-px overflow-hidden">
            <motion.div
              className="w-full bg-neon-green/25"
              style={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          {formations.map((item, i) => (
            <div key={item.id} className="relative mb-8">
              {/* Dot */}
              <motion.div
                className="absolute -left-5 top-5 z-10 w-3 h-3 rounded-full bg-neon-green"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.12, ease: "backOut" }}
                viewport={{ once: true }}
                style={{ boxShadow: item.current ? "0 0 12px #00FFB3, 0 0 24px rgba(0,255,179,0.4)" : "0 0 6px #00FFB3" }}
              />
              <FormationCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormationsSection;
