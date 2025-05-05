import React, { useEffect, useState } from "react";

const fakeCommands = [
    "cd ~/belkhelfa_mehdi",
    "init --identity",
    "-> FullStack Developer",
    "-> Based in Lille // France",
  
    "init --stack",
    "Frontend -> React.js, Angular, TypeScript, TailwindCSS",
    "Backend -> Node.js, Springboot, Laravel",
  
    "init --traits",
    "- Precise. Curious. Adaptable. UI-obsessed.",
  
    "init --education",
    "- M1 @ Ynov Lille (Expert Web Dev)",
    "- Seeking M2 Apprenticeship – Sept 2025",
  
    "init --status",
    "[ OK ] Available : Immediately",
  ];
  ;
  
  
  const TerminalSim: React.FC = () => {
    const [lines, setLines] = useState<string[]>([]);
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (index < fakeCommands.length) {
          setLines((prev) => [...prev, fakeCommands[index]]);
          setIndex(index + 1);
        } else {
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [index]);
  
    return (
      <div className="bg-black text-neon-green font-mono text-sm p-4 border border-neon-green my-5 rounded-lg max-w-xl mx-auto shadow-[0_0_20px_#00FFB3]">
        {lines.map((line, i) => (
          <p key={i}>{`> ${line}`}</p>
        ))}
        {index < fakeCommands.length && <span className="animate-pulse">|</span>}
      </div>
    );
  };

export default TerminalSim;