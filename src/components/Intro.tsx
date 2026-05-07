import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/MehdiBel_nobg.png";

const BOOT_LINES = [
  { text: "> SYS.INIT ............. [OK]", dim: true },
  { text: "> LOADING MODULES ...... [OK]", dim: true },
  { text: "> PORTFOLIO.SYS ........ [OK]", dim: true },
  { text: "> SECURING CHANNEL ..... [OK]", dim: true },
  { text: "> ACCESS GRANTED", dim: false },
];

const LINE_INTERVAL = 290; // ms between each line
const HOLD_AFTER_LOGO = 900; // ms to hold before exit

const Intro: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [show, setShow] = useState(true);
  const [visibleCount, setVisibleCount] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleCount(i + 1);
          if (i === BOOT_LINES.length - 1) {
            timers.push(setTimeout(() => setShowLogo(true), 250));
            timers.push(
              setTimeout(() => {
                setShow(false);
                onFinish();
              }, 250 + HOLD_AFTER_LOGO)
            );
          }
        }, i * LINE_INTERVAL)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  const totalLineDuration = BOOT_LINES.length * LINE_INTERVAL;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center font-mono overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ clipPath: "inset(100% 0 0 0)" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* CRT scanlines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "repeating-linear-gradient(to bottom, rgba(255,255,255,0.018), rgba(255,255,255,0.018) 1px, transparent 1px, transparent 3px)",
            }}
          />

          {/* Dot grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#00FFB3_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06]" />

          <div className="w-full max-w-sm px-8 flex flex-col gap-8">
            {/* Boot lines */}
            <div className="space-y-1.5">
              {BOOT_LINES.slice(0, visibleCount).map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`text-xs tracking-widest ${
                    line.dim ? "text-gray-600" : "text-neon-green font-bold"
                  }`}
                >
                  {line.text}
                </motion.p>
              ))}
              {visibleCount < BOOT_LINES.length && (
                <span className="text-neon-green text-xs animate-blink">_</span>
              )}
            </div>

            {/* Logo */}
            <AnimatePresence>
              {showLogo && (
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, scale: 0.88, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.img
                    src={Logo}
                    alt="MB Logo"
                    className="w-64 h-auto"
                    animate={{
                      filter: [
                        "drop-shadow(0 0 6px #00FFB3)",
                        "drop-shadow(0 0 22px #00FFB3) drop-shadow(0 0 40px rgba(0,255,179,0.5))",
                        "drop-shadow(0 0 8px #00FFB3)",
                      ],
                    }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress bar */}
            <div className="w-full">
              <div className="relative h-px bg-gray-900 overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-neon-green"
                  style={{ boxShadow: "0 0 8px #00FFB3" }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: (totalLineDuration + 250) / 1000,
                    ease: "linear",
                  }}
                />
              </div>
              <p className="text-[10px] text-gray-700 mt-2 tracking-[0.3em] text-center">
                PORTFOLIO.SYS v2.0
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
