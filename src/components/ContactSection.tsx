import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaGoogle } from "react-icons/fa";
import { contacts } from "../constants/content";

const iconMap: Record<string, React.ReactElement> = {
  linkedin: React.createElement(FaLinkedinIn, { className: "w-5 h-5" }),
  github:   React.createElement(FaGithub,     { className: "w-5 h-5" }),
  gmail:    React.createElement(FaGoogle,     { className: "w-5 h-5" }),
};

const platformColor: Record<string, string> = {
  linkedin: "hover:border-blue-400 hover:text-blue-400 hover:shadow-[0_0_14px_rgba(96,165,250,0.4)]",
  github:   "hover:border-white hover:text-white hover:shadow-[0_0_14px_rgba(255,255,255,0.2)]",
  gmail:    "hover:border-red-400 hover:text-red-400 hover:shadow-[0_0_14px_rgba(248,113,113,0.4)]",
};

/* ─── Radar Animation ───────────────────────────────── */
const Radar: React.FC = () => (
  <div className="relative w-56 h-56 flex items-center justify-center">
    {/* Static rings */}
    {[1, 0.72, 0.46, 0.22].map((scale, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-neon-green/20"
        style={{ width: `${scale * 100}%`, height: `${scale * 100}%` }}
        animate={{ borderColor: ["rgba(0,255,179,0.1)", "rgba(0,255,179,0.35)", "rgba(0,255,179,0.1)"] }}
        transition={{ duration: 2.5, delay: i * 0.6, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}

    {/* Expanding ping rings */}
    {[0, 0.9, 1.8].map((delay, i) => (
      <motion.div
        key={`ping-${i}`}
        className="absolute rounded-full border border-neon-green/50"
        initial={{ width: "18%", height: "18%", opacity: 0.7 }}
        animate={{ width: "104%", height: "104%", opacity: 0 }}
        transition={{
          duration: 2.8,
          delay,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    ))}

    {/* Rotating sweep */}
    <motion.div
      className="absolute inset-0 rounded-full overflow-hidden"
      animate={{ rotate: 360 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      style={{
        background:
          "conic-gradient(from 0deg, transparent 0deg, rgba(0,255,179,0.22) 55deg, rgba(0,255,179,0.06) 90deg, transparent 115deg)",
      }}
    />

    {/* Cross-hairs */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-full h-px bg-neon-green/10" />
    </div>
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="h-full w-px bg-neon-green/10" />
    </div>

    {/* Blip dots */}
    {[
      { top: "22%", left: "68%", delay: 0.4 },
      { top: "65%", left: "18%", delay: 1.1 },
      { top: "78%", left: "60%", delay: 2 },
    ].map((blip, i) => (
      <motion.div
        key={`blip-${i}`}
        className="absolute w-1.5 h-1.5 rounded-full bg-neon-green"
        style={{ top: blip.top, left: blip.left }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.5, 1, 0.5] }}
        transition={{
          duration: 2.5,
          delay: blip.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}

    {/* Center dot */}
    <div
      className="absolute w-3 h-3 rounded-full bg-neon-green z-10"
      style={{ boxShadow: "0 0 10px #00FFB3, 0 0 20px rgba(0,255,179,0.5)" }}
    />
  </div>
);

/* ─── Contact Section ───────────────────────────────── */
const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[85vh] w-full text-neon-green font-mono flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
    >
      {/* Section header */}
      <motion.div
        className="mb-12 flex flex-col items-center gap-3 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 w-full max-w-xs">
          <div className="h-px flex-1 bg-neon-green/20" />
          <span className="text-xs tracking-[0.3em] text-neon-green border border-neon-green/30 px-3 py-1 rounded whitespace-nowrap">
            [ CONTACT.MODULE ]
          </span>
          <div className="h-px flex-1 bg-neon-green/20" />
        </div>
      </motion.div>

      {/* Main panel */}
      <motion.div
        className="relative z-10 w-full max-w-3xl border border-neon-green/30 rounded-lg bg-black/80 overflow-hidden"
        style={{ boxShadow: "0 0 50px rgba(0,255,179,0.1), 0 0 100px rgba(0,255,179,0.04)" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        {/* Animated top border */}
        <motion.div
          className="h-px bg-neon-green w-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left", boxShadow: "0 0 8px #00FFB3" }}
          viewport={{ once: true }}
        />

        <div className="flex flex-col md:flex-row">
          {/* Left — Radar */}
          <div className="flex items-center justify-center p-10 md:border-r border-neon-green/20">
            <Radar />
          </div>

          {/* Right — Content */}
          <div className="flex-1 flex flex-col justify-center p-8 gap-7">
            {/* Big headline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.3em] text-neon-green/40 mb-2">
                TRANSMISSION OPEN
              </p>
              <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-white leading-tight">
                LET'S BUILD
                <br />
                <span
                  className="text-neon-green"
                  style={{ textShadow: "0 0 20px rgba(0,255,179,0.5)" }}
                >
                  SOMETHING.
                </span>
              </h2>
            </motion.div>

            <motion.p
              className="text-gray-400 text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
            >
              Got a project in mind? I'm open to new opportunities, freelance missions, and collaborations.
            </motion.p>

            {/* Email CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="mailto:mehdibelkhelfa6@gmail.com?subject=Let's%20work%20together&body=Hi%20Mehdi,%0A%0AI'd%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ABest,"
                className="relative inline-flex items-center gap-3 px-6 py-3 border border-neon-green
                           font-mono text-sm text-neon-green bg-black/60 rounded overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                style={{ boxShadow: "0 0 12px rgba(0,255,179,0.2)" }}
              >
                {/* Fill animation on hover */}
                <span className="absolute inset-0 bg-neon-green scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  &gt; SEND MESSAGE
                </span>
                <motion.span
                  className="relative z-10 group-hover:text-black transition-colors duration-300"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4 pt-4 border-t border-neon-green/15"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              viewport={{ once: true }}
            >
              <span className="text-xs text-neon-green/30 tracking-widest">FIND ME</span>
              <div className="flex items-center gap-3">
                {contacts.map(({ name, link, iconKey }) => (
                  <motion.a
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={name}
                    className={`w-10 h-10 flex items-center justify-center
                               border border-neon-green/30 rounded-full text-neon-green/60
                               transition-all duration-300 ${platformColor[iconKey]}`}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.93 }}
                  >
                    {iconMap[iconKey]}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated bottom status bar */}
        <div className="border-t border-neon-green/10 px-6 py-2 flex items-center justify-between text-xs text-neon-green/30 tracking-widest">
          <span className="flex items-center gap-2">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-neon-green inline-block"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            ONLINE — AVAILABLE NOW
          </span>
          <span>LILLE, FRANCE</span>
          <span>mehdibelkhelfa6@gmail.com</span>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.p
        className="relative z-10 mt-12 text-xs text-gray-700 tracking-[0.3em] font-mono"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        BELKHELFA.MEHDI — {new Date().getFullYear()} — ALL RIGHTS RESERVED
      </motion.p>
    </section>
  );
};

export default ContactSection;
