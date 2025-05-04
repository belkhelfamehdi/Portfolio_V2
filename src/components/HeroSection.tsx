import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Logo from "../assets/MehdiBel_nobg.png";
import GlitchText from "./GlitchText";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#00FFB3_1px,transparent_1px)] [background-size:20px_20px] opacity-10 " />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.02) 1px, transparent 1px, transparent 2px)`,
        }}
      />

      <nav className="relative z-20 flex justify-between items-center px-8 py-6 text-sm tracking-widest">
        <div className="flex flex-col space-y-2">
          {["//01. <Home/>", "//02. <Portfolio/>"].map((item, index) => (
            <span
              key={index}
              className="relative group px-4 py-2 font-mono text-sm text-white hover:text-neon-green cursor-pointer transition-colors duration-500"
            >
              <span className="invisible block">{item}</span>
              <span className="absolute inset-0 flex items-center transition-transform duration-500 ease-in-out group-hover:translate-x-5">
                <span>
                  <GlitchText text={item} />
                </span>
              </span>
              <span className="absolute inset-0 border border-neon-green scale-x-0 group-hover:scale-x-100 origin-center opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-out pointer-events-none group-hover:shadow-[0_0_10px_#00FFB3]" />
            </span>
          ))}
        </div>

        <div className="w-44 h-auto">
          <img
            src={Logo}
            alt="Logo MehdiBel"
            className="w-full object-contain"
          />
        </div>

        <div className="flex flex-col space-y-2">
          {["//03. <Press/>", "//04. <Contact/>"].map((item, index) => (
            <span
              key={index}
              className="relative group px-4 py-2 font-mono text-sm text-white hover:text-neon-green cursor-pointer transition-colors duration-500"
            >
              <span className="invisible block">{item}</span>
              <span className="absolute inset-0 flex items-center transition-transform duration-500 ease-in-out group-hover:translate-x-5">
                <span>
                  <GlitchText text={item} />
                </span>
              </span>
              <span className="absolute inset-0 border border-neon-green scale-x-0 group-hover:scale-x-100 origin-center opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-out pointer-events-none group-hover:shadow-[0_0_10px_#00FFB3]" />
            </span>
          ))}
        </div>
      </nav>

      <div className="relative z-20 flex items-center justify-between px-6 md:px-24">
        <section className="my-20">
          <p className="text-gray-500 font-mono text-xl mb-6">
            &lt;p&gt;<span className="text-neon-green">This is</span>&lt;/p&gt;
          </p>

          <p className="text-gray-500 font-mono text-md ml-10">&lt;h1&gt;</p>

          <h1
            className="text-5xl md:text-7xl font-bold font-orbitron text-white leading-tight ml-14 relative"
            data-text="BELKHELFA MEHDI"
          >
            <span className="relative z-10 whitespace-pre-line">
              <GlitchText
                text={"BELKHELFA\nMEHDI"}
                delay={10}
                className="inline-block"
              />
            </span>
            <span className="absolute inset-0 blur-lg opacity-50 text-neon-green z-0 whitespace-pre-line">
              <GlitchText text={"BELKHELFA\nMEHDI"} delay={10} />
            </span>
          </h1>

          <p className="text-gray-500 font-mono text-md ml-10 mt-1">
            &lt;/h1&gt;
          </p>

          <div className="flex items-start gap-2 mt-6 text-xl text-gray-500 font-mono">
            <span>&lt;p&gt;</span>
            <span className="text-neon-green">
              <Typewriter
                words={[
                  "Entrepreneur",
                  "FullStack Developer",
                  "Creator of Interfaces",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <span>&lt;/p&gt;</span>
          </div>

          <div className="w-48 h-1 bg-neon-green mt-4 animate-pulse blur-sm shadow-[0_0_10px_#00FFB3]" />
        </section>

        <section className="relative w-80 h-80 mr-16 hidden md:flex items-center justify-center group">
          {[80, 72, 64, 56].map((size, i) => (
            <motion.div
              key={i}
              className={`
                absolute rounded-full border-2 border-white
                ${i === 0 ? "w-80 h-80 border-b-transparent border-l-transparent" : ""}
                ${i === 1 ? "w-72 h-72 border-b-transparent border-r-transparent" : ""}
                ${i === 2 ? "w-64 h-64 border-t-transparent border-r-transparent" : ""}
                ${i === 3 ? "w-56 h-56 z-0 overflow-hidden" : ""}
              `}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.8 + i * 0.1,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {i === 3 && (
                <div className="absolute inset-0 p-2 bg-neon-green scale-0 group-hover:scale-100 transition-all duration-500 rounded-full pointer-events-auto cursor-pointer" />
              )}
            </motion.div>
          ))}

          <div className="z-10 text-center cursor-pointer group-hover:scale-110 transition-transform duration-500">
            <p className="text-neon-green group-hover:text-black font-mono text-lg tracking-wide transition-all duration-500">
              <GlitchText text="&lt;Download CV/&gt;" delay={5} />
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
