import { motion } from "framer-motion";

const skillPercents: Record<string, number> = {
    JavaScript: 90,
    TypeScript: 85,
    Java: 75,
    PHP: 70,
    React: 80,
    Angular: 50,
    "Next.js": 40,
    TailwindCSS: 90,
    Springboot: 80,
    Laravel: 60,
    Express: 80,
    PostgreSQL: 78,
    Git: 90,
    "GitLab CI/CD": 65,
    Docker: 86,
    Firebase: 70,
  };
  
  const skills = {
    Languages: ["JavaScript", "TypeScript", "Java", "PHP"],
    Frontend: ["React", "Angular", "Next.js","TailwindCSS",],
    Backend: ["Node.js", "Springboot", "Laravel","PostgreSQL"],
    Tools: ["Git", "GitLab CI/CD", "Docker", "Firebase"]
  };

  const SkillBar = ({ label }: { label: string }) => {
    const target = skillPercents[label] || 70;
  
    return (
      <motion.div
        className="w-full mb-4 group"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
      >
        <div className="flex justify-between text-xs text-neon-green font-mono tracking-widest mb-1">
          <span>{`> ${label}`}</span>
          <span>{`${target}%`}</span>
        </div>
        <div className="w-full h-3 rounded-sm overflow-hidden border border-neon-green shadow-inner">
          <motion.div
            className="h-full bg-neon-green shadow-[0_0_10px_#00FFB3] group-hover:shadow-[0_0_20px_#00FFB3]"
            initial={{ width: "0%" }}
            whileInView={{ width: `${target}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    );
  };
  

const SkillsSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="skills"
      className="min-h-screen w-full text-neon-green font-mono px-4 py-16 flex flex-col items-center justify-center relative"
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
              <div className="mt-4">
                {items.map((skill, idx) => (
                  <SkillBar key={skill} label={skill} index={idx} />
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