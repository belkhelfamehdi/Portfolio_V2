import React from 'react';
import { motion } from 'framer-motion';
import TerminalSim from './TerminalSim';
import Photo from '../assets/me.jpeg';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* Animated HUD corners that draw themselves in */
const HUDCorners: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none">
    {/* TL */}
    <motion.span
      className="absolute top-0 left-0 block w-5 h-px bg-neon-green"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ transformOrigin: "left" }}
      viewport={{ once: true }}
    />
    <motion.span
      className="absolute top-0 left-0 block w-px h-5 bg-neon-green"
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
      style={{ transformOrigin: "top" }}
      viewport={{ once: true }}
    />
    {/* TR */}
    <motion.span
      className="absolute top-0 right-0 block w-5 h-px bg-neon-green"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ transformOrigin: "right" }}
      viewport={{ once: true }}
    />
    <motion.span
      className="absolute top-0 right-0 block w-px h-5 bg-neon-green"
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
      style={{ transformOrigin: "top" }}
      viewport={{ once: true }}
    />
    {/* BL */}
    <motion.span
      className="absolute bottom-0 left-0 block w-5 h-px bg-neon-green"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ transformOrigin: "left" }}
      viewport={{ once: true }}
    />
    <motion.span
      className="absolute bottom-0 left-0 block w-px h-5 bg-neon-green"
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
      style={{ transformOrigin: "bottom" }}
      viewport={{ once: true }}
    />
    {/* BR */}
    <motion.span
      className="absolute bottom-0 right-0 block w-5 h-px bg-neon-green"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ transformOrigin: "right" }}
      viewport={{ once: true }}
    />
    <motion.span
      className="absolute bottom-0 right-0 block w-px h-5 bg-neon-green"
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
      style={{ transformOrigin: "bottom" }}
      viewport={{ once: true }}
    />
  </div>
);

const STATS = [
  { label: "PROJECTS", value: "11+" },
  { label: "EXPERIENCE", value: "2YR" },
  { label: "STATUS", value: "OPEN" },
];

const AboutSection: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="w-full bg-black text-neon-green font-mono flex items-center justify-center px-4 py-16"
    >
      <motion.div
        className="relative z-10 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Section label */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-neon-green/20" />
          <span className="text-xs tracking-[0.3em] text-neon-green border border-neon-green/30 px-3 py-1 rounded">
            [ IDENTITY.CONSOLE ]
          </span>
          <div className="h-px flex-1 bg-neon-green/20" />
        </motion.div>

        {/* Main HUD frame */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-lg border border-neon-green bg-black/90 p-2"
          style={{
            boxShadow:
              "0 0 30px rgba(0,255,179,0.15), 0 0 60px rgba(0,255,179,0.05)",
          }}
        >
          <HUDCorners />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Profile panel */}
            <motion.div
              variants={itemVariants}
              className="relative flex flex-col items-center justify-between p-5 border border-neon-green/40 rounded-md bg-black/60"
              style={{ boxShadow: "0 0 15px rgba(0,255,179,0.1)" }}
            >
              <HUDCorners />

              {/* Photo with scan-reveal overlay */}
              <div className="relative group">
                <motion.img
                  src={Photo}
                  alt="Belkhelfa Mehdi"
                  className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-sm border border-neon-green"
                  style={{ boxShadow: "0 0 20px rgba(0,255,179,0.3)" }}
                  initial={{ filter: "grayscale(100%) brightness(0.6)" }}
                  whileInView={{ filter: "grayscale(0%) brightness(1)" }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  viewport={{ once: true }}
                />
                {/* Corner bracket overlays on photo */}
                <div className="absolute top-1 left-1 w-4 h-4 border-t border-l border-neon-green" />
                <div className="absolute top-1 right-1 w-4 h-4 border-t border-r border-neon-green" />
                <div className="absolute bottom-1 left-1 w-4 h-4 border-b border-l border-neon-green" />
                <div className="absolute bottom-1 right-1 w-4 h-4 border-b border-r border-neon-green" />
              </div>

              <div className="mt-5 w-full text-center">
                <div className="text-sm font-bold tracking-widest border-t border-neon-green/30 pt-3 text-white">
                  BELKHELFA MEHDI
                </div>
                <div className="text-xs text-neon-green mt-1 animate-flicker tracking-widest">
                  [ ACTIVE ]
                </div>
              </div>

              {/* Stats row */}
              <div className="mt-4 w-full grid grid-cols-3 gap-1">
                {STATS.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center border border-neon-green/20 rounded py-1.5 hover:border-neon-green/60 transition-colors"
                  >
                    <span className="text-neon-green text-sm font-orbitron font-bold">
                      {value}
                    </span>
                    <span className="text-[8px] text-gray-600 tracking-wider mt-0.5">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Terminal panel */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 relative flex flex-col p-4 border border-neon-green/40 rounded-md bg-black/60"
              style={{ boxShadow: "0 0 15px rgba(0,255,179,0.08)" }}
            >
              <div className="text-xs mb-3 tracking-widest text-neon-green/50 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-neon-pulse inline-block" />
                USER.DATA.STREAM — LIVE
              </div>
              <TerminalSim />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
