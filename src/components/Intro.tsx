import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/MehdiBel_nobg.png"; // your logo path

const Intro: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 2500); // duration before main content

    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-neon-green font-mono"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Pulsing Glitchy Logo */}
          <motion.img
  src={Logo}
  alt="Logo"
  className="w-96 h-auto"
  initial={{ opacity: 0 }}
  animate={{
    opacity: [0, 1, 0.95],
    filter: [
      "drop-shadow(0 0 2px #00FFB3)",
      "drop-shadow(0 0 8px #00FFB3)",
      "drop-shadow(0 0 4px #00FFB3)"
    ]
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>

          {/* Terminal-style System Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-sm tracking-wider"
          >
            {'[ SYSTEM.BOOT >> PORTFOLIO.LAUNCH ]'}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
