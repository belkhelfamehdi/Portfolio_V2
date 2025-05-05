import React from "react";
import { motion } from "framer-motion";

const contacts = [
  { name: "LinkedIn", link: "https://linkedin.com/in/your-username", size: "w-40 h-40", top: "top-10", left: "left-1/2" },
  { name: "Instagram", link: "https://instagram.com/your-username", size: "w-48 h-48", top: "top-48", left: "left-16" },
  { name: "Twitter", link: "https://twitter.com/your-username", size: "w-36 h-36", top: "top-80", left: "left-1/3" },
  { name: "Gmail", link: "mailto:your@email.com", size: "w-44 h-44", top: "top-40", left: "left-3/4" }
];

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full text-neon-green font-mono flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
    >



      <h2 className="text-4xl font-orbitron mb-24 text-white z-10 relative">
        &lt;Connect with me/&gt;
      </h2>

      <div className="relative w-full max-w-6xl h-[500px] z-10">
        {contacts.map(({ name, link, size, top, left }) => (
          <motion.a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`absolute ${size} ${top} ${left} transform -translate-x-1/2 flex flex-col items-center justify-center border-2 border-neon-green rounded-full text-white shadow-[0_0_15px_#00FFB3] hover:shadow-[0_0_30px_#00FFB3] transition-all duration-300`}
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