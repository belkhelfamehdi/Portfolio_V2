import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Logo from "../assets/MehdiBel_nobg.png";
import GlitchText from "./GlitchText";
import CV from "../assets/CV.pdf";
import {
  leftNavigation,
  rightNavigation,
  typewriterWords,
} from "../constants/navigation";

/* ─── Floating ambient particles ──────────────────── */
const PARTICLES = [
  { id: 0, x: "8%",  y: "18%", text: "{}",    delay: 0,   dur: 7 },
  { id: 1, x: "88%", y: "12%", text: "</>",   delay: 1.2, dur: 6 },
  { id: 2, x: "78%", y: "72%", text: "01",    delay: 0.5, dur: 8 },
  { id: 3, x: "15%", y: "78%", text: "//",    delay: 1.8, dur: 5.5 },
  { id: 4, x: "50%", y: "8%",  text: "( )",   delay: 0.8, dur: 7.5 },
  { id: 5, x: "92%", y: "45%", text: "=>",    delay: 2.2, dur: 6 },
  { id: 6, x: "4%",  y: "50%", text: "[ ]",   delay: 1.5, dur: 8.5 },
  { id: 7, x: "60%", y: "90%", text: "&&",    delay: 0.3, dur: 7 },
  { id: 8, x: "35%", y: "5%",  text: ">>>",   delay: 2.5, dur: 6.5 },
  { id: 9, x: "72%", y: "30%", text: "null",  delay: 1.1, dur: 9 },
];

/* ─── Nav item ────────────────────────────────────── */
interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => (
  <a
    href={href}
    className="relative group px-4 py-2 font-mono text-sm text-white hover:text-neon-green transition-colors duration-300"
  >
    <span className="invisible block">{label}</span>
    <span className="absolute inset-0 flex items-center transition-transform duration-400 ease-out group-hover:translate-x-2">
      <GlitchText text={label} />
    </span>
    <motion.span
      className="absolute bottom-0 left-0 h-px bg-neon-green w-0 group-hover:w-full transition-all duration-300 shadow-[0_0_6px_#00FFB3]"
    />
  </a>
);

/* ─── Radar CV Button ─────────────────────────────── */
const CVCircle: React.FC = () => (
  <a
    href={CV}
    download
    className="relative w-full h-full flex items-center justify-center group"
  >
    {/* Rotating rings */}
    {[
      { size: "w-full h-full",   speed: 2.5, gaps: "border-t-transparent border-l-transparent" },
      { size: "w-[85%] h-[85%]", speed: 3.2, gaps: "border-b-transparent border-r-transparent" },
      { size: "w-[70%] h-[70%]", speed: 4,   gaps: "border-t-transparent border-r-transparent" },
    ].map(({ size, speed, gaps }, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full border border-neon-green ${size} ${gaps}`}
        style={{ boxShadow: "0 0 8px rgba(0,255,179,0.3)" }}
        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      />
    ))}

    {/* Radar sweep */}
    <motion.div
      className="absolute inset-0 rounded-full overflow-hidden"
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      style={{
        background:
          "conic-gradient(from 0deg, transparent 0deg, rgba(0,255,179,0.18) 60deg, rgba(0,255,179,0.04) 100deg, transparent 130deg)",
      }}
    />

    {/* Ping rings on hover */}
    <motion.div
      className="absolute inset-0 rounded-full border border-neon-green/40 opacity-0 group-hover:opacity-100"
      animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
    />

    {/* Center */}
    <div
      className="relative z-10 w-24 h-24 rounded-full border border-neon-green flex flex-col items-center justify-center gap-1 transition-all duration-500 group-hover:bg-neon-green"
      style={{
        boxShadow:
          "0 0 20px rgba(0,255,179,0.4), inset 0 0 15px rgba(0,255,179,0.08)",
      }}
    >
      <span className="font-orbitron text-neon-green text-xs tracking-widest group-hover:text-black transition-colors duration-300">
        CV
      </span>
      <span className="font-mono text-[9px] text-neon-green/60 group-hover:text-black/60 transition-colors duration-300 tracking-wider">
        DOWNLOAD
      </span>
    </div>
  </a>
);

/* ─── Hero Section ────────────────────────────────── */
const HeroSection: React.FC = () => {
  return (
    <div className="min-h-[90vh] text-white overflow-hidden relative flex flex-col">
      {/* Floating ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="absolute font-mono text-xs text-neon-green/10 select-none"
            style={{ left: p.x, top: p.y }}
            animate={{
              y: [0, -14, 0],
              opacity: [0.08, 0.18, 0.08],
            }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {p.text}
          </motion.span>
        ))}
      </div>

      {/* ─── Navigation ─── */}
      <nav className="relative z-20 flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-8 py-6 tracking-widest gap-4">
        <motion.div
          className="flex flex-col space-y-1 items-center md:items-start w-full md:w-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {leftNavigation.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </motion.div>

        <motion.div
          className="w-24 md:w-40 h-auto mx-auto md:mx-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={Logo}
            alt="Logo MehdiBel"
            className="w-full object-contain"
            style={{ filter: "drop-shadow(0 0 10px rgba(0,255,179,0.4))" }}
          />
        </motion.div>

        <motion.div
          className="flex flex-col space-y-1 items-center md:items-end w-full md:w-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {rightNavigation.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </motion.div>
      </nav>

      {/* ─── Hero Body ─── */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between px-4 md:px-24 flex-1">
        {/* Left: Name & Typewriter */}
        <section className="my-10 md:my-0 text-center md:text-left max-w-xl">
          {/* Subtitle tag */}
          <motion.p
            className="text-gray-500 font-mono text-lg mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            &lt;p&gt;<span className="text-neon-green">This is</span>&lt;/p&gt;
          </motion.p>

          <motion.p
            className="text-gray-500 font-mono text-md md:ml-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.55 }}
          >
            &lt;h1&gt;
          </motion.p>

          {/* Name — word by word stagger */}
          <div className="md:ml-14 overflow-hidden">
            {["BELKHELFA", "MEHDI"].map((word, wi) => (
              <motion.div
                key={wi}
                className="overflow-hidden"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.65 + wi * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h1
                  className="text-[clamp(2.8rem,6vw,5rem)] font-bold font-orbitron text-white leading-tight relative inline-block"
                  data-text={word}
                >
                  <span className="relative z-10">
                    <GlitchText text={word} delay={10} />
                  </span>
                  <span className="absolute inset-0 blur-xl opacity-40 text-neon-green z-0 select-none">
                    {word}
                  </span>
                </h1>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-gray-500 font-mono text-md md:ml-10 mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.95 }}
          >
            &lt;/h1&gt;
          </motion.p>

          {/* Typewriter */}
          <motion.div
            className="flex flex-wrap items-start gap-2 mt-6 text-lg md:text-xl text-gray-500 font-mono justify-center md:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
          >
            <span>&lt;p&gt;</span>
            <span className="text-neon-green" style={{ textShadow: "0 0 12px rgba(0,255,179,0.5)" }}>
              <Typewriter
                words={typewriterWords}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={65}
                deleteSpeed={40}
                delaySpeed={1200}
              />
            </span>
            <span>&lt;/p&gt;</span>
          </motion.div>

          {/* Neon underline */}
          <motion.div
            className="h-px bg-neon-green mt-5 shadow-[0_0_12px_#00FFB3]"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            style={{ margin: "1.25rem auto 0 auto" }}
          />
          <style>{`@media (min-width:768px){.neon-line{margin-left:0!important}}`}</style>
        </section>

        {/* Right: CV Circle */}
        <motion.section
          className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <CVCircle />
        </motion.section>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        className="relative z-20 flex justify-center pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-neon-green/40 font-mono text-[10px] tracking-widest"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>SCROLL</span>
          <span className="text-base">↓</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
