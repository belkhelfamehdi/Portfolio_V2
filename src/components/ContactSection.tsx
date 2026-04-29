import React from "react";
import { motion } from "framer-motion";
import { contacts } from "../constants/content";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[60vh] w-full text-neon-green font-mono flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
    >
      {/* Background HUD Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#00FFB3_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />

      {/* HUD Panel Container */}
      <div className="relative z-10 w-full max-w-3xl border border-neon-green rounded-lg shadow-[0_0_60px_#00FFB3] bg-black/80 p-8 flex flex-col items-center gap-8">
        {/* Top HUD Label */}
        <div className="absolute -top-4 left-6 px-3 text-xs font-mono text-neon-green bg-black border border-neon-green rounded">
          [ CONTACT.MODULE / ACTIVE ]
        </div>

        <h2 className="text-2xl sm:text-3xl font-orbitron text-neon-green text-center">
          [ Let's work together ]
        </h2>

        <p className="text-gray-400 text-center text-sm leading-relaxed max-w-lg">
          Got a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
        </p>

        {/* Mailto Button */}
        <motion.a
          href="mailto:mehdibelkhelfa6@gmail.com?subject=Let's%20work%20together&body=Hi%20Mehdi,%0A%0AI'd%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ABest,"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 border-2 border-neon-green rounded-lg font-mono text-sm text-neon-green bg-black/60 hover:bg-neon-green/20 shadow-[0_0_15px_#00FFB3] hover:shadow-[0_0_30px_#00FFB3] transition-all duration-300"
        >
          &gt; Send Message →
        </motion.a>

        {/* Social Links */}
        <div className="grid grid-cols-3 gap-6 place-items-center w-full max-w-lg pt-4 border-t border-neon-green/30">
          {contacts.map(({ name, link }) => (
            <motion.a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 text-white hover:text-neon-green transition-colors duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center border-2 border-neon-green rounded-full shadow-[0_0_10px_#00FFB3] hover:shadow-[0_0_20px_#00FFB3] transition-all duration-300">
                <span className="text-xs font-bold">{name.charAt(0)}</span>
              </div>
              <span className="text-xs font-mono">{name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
