import React from "react";
import { motion } from "framer-motion";
import { contacts } from "../constants/content";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full text-neon-green font-mono flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
    >
      <h2 className="text-3xl sm:text-4xl font-orbitron mb-16 text-white z-10 relative text-center">
        &lt;Connect with me/&gt;
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 place-items-center w-full max-w-5xl z-10">
        {contacts.map(({ name, link }) => (
          <motion.a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 flex flex-col items-center justify-center border-2 border-neon-green rounded-full text-white shadow-[0_0_15px_#00FFB3] hover:shadow-[0_0_30px_#00FFB3] transition-all duration-300"
          >
            <span className="text-sm text-gray-400">&lt;&gt;</span>
            <span className="mt-1 font-bold text-md">{name}</span>
            <span className="text-sm text-gray-400 mt-1">&lt;/&gt;</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
