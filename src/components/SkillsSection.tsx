import { motion } from "framer-motion";
import { 
  SiJavascript, SiTypescript, SiPhp, SiReact, SiAngular, SiNextdotjs, 
  SiTailwindcss, SiNodedotjs, SiSpringboot, SiLaravel, SiPostgresql, 
  SiExpress, SiGit, SiGitlab, SiDocker, SiFirebase 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillIcons: Record<string, React.ReactElement> = {
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  Java: <FaJava />,
  PHP: <SiPhp />,
  React: <SiReact />,
  Angular: <SiAngular />,
  "Next.js": <SiNextdotjs />,
  TailwindCSS: <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  "Spring Boot": <SiSpringboot />,
  Laravel: <SiLaravel />,
  PostgreSQL: <SiPostgresql />,
  Express: <SiExpress />,
  Git: <SiGit />,
  "GitLab CI/CD": <SiGitlab />,
  Docker: <SiDocker />,
  Firebase: <SiFirebase />,
};

const skills = {
  Languages: ["JavaScript", "TypeScript", "Java", "PHP"],
  Frontend: ["React", "Angular", "Next.js", "TailwindCSS"],
  Backend: ["Node.js", "Spring Boot", "Laravel", "PostgreSQL", "Express"],
  Tools: ["Git", "GitLab CI/CD", "Docker", "Firebase"],
};

const SkillsSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="skills"
      className="min-h-[70vh] w-full text-neon-green font-mono px-4 py-16 flex flex-col items-center justify-center relative"
    >
      {/* Background HUD Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#00FFB3_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />

      {/* HUD Panel Container */}
      <div className="relative z-10 w-full max-w-5xl border border-neon-green rounded-lg shadow-[0_0_60px_#00FFB3] bg-black/80 p-8">
        {/* Top HUD Label */}
        <div className="absolute -top-4 left-6 px-3 text-xs font-mono text-neon-green bg-black border border-neon-green rounded">
          [ SKILL.MODULE / ACTIVE ]
        </div>

        <div className="mb-8 text-center text-md text-neon-green opacity-80">
          <span className="tracking-wide">[ SYSTEM.LOG &gt;&gt; skills.init() ]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              className="relative p-4 border border-neon-green rounded-md bg-black/60 shadow-[0_0_20px_#00FFB3]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-3 left-4 px-2 text-xs bg-black text-neon-green border border-neon-green rounded">
                {`// ${category}`}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 border border-neon-green rounded-full text-xs font-mono text-neon-green bg-black/80 hover:bg-neon-green/20 hover:shadow-[0_0_10px_#00FFB3] cursor-default transition-all duration-300"
                  >
                    <span className="text-sm">{skillIcons[skill]}</span>
                    <span>{skill}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;