import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Logo from "../assets/MehdiBel_nobg.png";
import GlitchText from "./GlitchText";
import CV from "../assets/CV.pdf";

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      <nav className="relative z-20 flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-8 py-6 text-sm tracking-widest gap-4">
        <div className="flex flex-col space-y-2 items-center md:items-start w-full md:w-auto">
          {[
            { label: "//01. <Portfolio/>", href: "#portfolio" },
            { label: "//02. <Projects/>", href: "#projects" },
          ].map(({ label, href }, index) => (
            <a
              key={index}
              href={href}
              className="relative group px-4 py-2 font-mono text-sm text-white hover:text-neon-green cursor-pointer transition-colors duration-500"
            >
              <span className="invisible block">{label}</span>
              <span className="absolute inset-0 flex items-center transition-transform duration-500 ease-in-out group-hover:translate-x-5">
                <span>
                  <GlitchText text={label} />
                </span>
              </span>
              <span className="absolute inset-0 border border-neon-green scale-x-0 group-hover:scale-x-100 origin-center opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-out pointer-events-none group-hover:shadow-[0_0_10px_#00FFB3]" />
            </a>
          ))}
        </div>

        <div className="w-24 md:w-44 h-auto mx-auto md:mx-0">
          <img src={Logo} alt="Logo MehdiBel" className="w-full object-contain" />
        </div>

        <div className="flex flex-col space-y-2 items-center md:items-end w-full md:w-auto">
          {[
            { label: "//03. <Skills/>", href: "#skills" },
            { label: "//04. <Contact/>", href: "#contact" },
          ].map(({ label, href }, index) => (
            <a
              key={index}
              href={href}
              className="relative group px-4 py-2 font-mono text-sm text-white hover:text-neon-green cursor-pointer transition-colors duration-500"
            >
              <span className="invisible block">{label}</span>
              <span className="absolute inset-0 flex items-center transition-transform duration-500 ease-in-out group-hover:translate-x-5">
                <span>
                  <GlitchText text={label} />
                </span>
              </span>
              <span className="absolute inset-0 border border-neon-green scale-x-0 group-hover:scale-x-100 origin-center opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-out pointer-events-none group-hover:shadow-[0_0_10px_#00FFB3]" />
            </a>
          ))}
        </div>
      </nav>

      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between px-4 md:px-24">
        <section className="my-10 md:my-20 text-center md:text-left max-w-xl">
          <p className="text-gray-500 font-mono text-lg md:text-xl mb-6">
            &lt;p&gt;<span className="text-neon-green">This is</span>&lt;/p&gt;
          </p>

          <p className="text-gray-500 font-mono text-md md:ml-10">&lt;h1&gt;</p>

          <h1
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold font-orbitron text-white leading-tight md:ml-14 relative"
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

          <p className="text-gray-500 font-mono text-md md:ml-10 mt-1">
            &lt;/h1&gt;
          </p>

          <div className="flex flex-wrap items-start gap-2 mt-6 text-lg md:text-xl text-gray-500 font-mono justify-center md:justify-start">
            <span>&lt;p&gt;</span>
            <span className="text-neon-green">
              <Typewriter
                words={[
                  "FullStack Developer",
                  "Creator of Interfaces",
                  "Always Learning",
                  "Curious Mind",
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

          <div className="w-32 md:w-48 h-1 bg-neon-green mt-4 animate-pulse blur-sm shadow-[0_0_10px_#00FFB3]" />
        </section>

        <section className="relative w-64 h-64 md:w-80 md:h-80 mt-10 md:mt-0 flex items-center justify-center group">
          <a
            href={CV}
            download
            className="relative w-full h-full flex items-center justify-center group"
          >
            {["w-full", "w-[90%]", "w-[80%]", "w-[70%]"].map((size, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full border-2 border-white ${size} aspect-square
                  ${i === 0 ? "border-b-transparent border-l-transparent" : ""}
                  ${i === 1 ? "border-b-transparent border-r-transparent" : ""}
                  ${i === 2 ? "border-t-transparent border-r-transparent" : ""}
                  ${i === 3 ? "z-0 overflow-hidden" : ""}
                `}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.8 + i * 0.1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {i === 3 && (
                  <div className="absolute inset-0 p-2 bg-neon-green scale-0 group-hover:scale-100 transition-all duration-500 rounded-full pointer-events-none" />
                )}
              </motion.div>
            ))}

            <div className="z-10 text-center group-hover:scale-110 transition-transform duration-500">
              <p className="text-neon-green group-hover:text-black font-mono text-lg tracking-wide transition-all duration-500">
                <GlitchText text="&lt;Download CV/&gt;" delay={5} />
              </p>
            </div>
          </a>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
