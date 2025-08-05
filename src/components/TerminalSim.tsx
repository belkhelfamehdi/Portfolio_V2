import React, { useEffect, useState } from "react";
import { terminalCommands } from "../constants/content";
  
const TerminalSim: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < terminalCommands.length) {
        setLines((prev) => [...prev, terminalCommands[index]]);
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
        <p key={`line-${i}-${line.slice(0, 10)}`}>{`> ${line}`}</p>
      ))}
      {index < terminalCommands.length && <span className="animate-pulse">|</span>}
    </div>
  );
};

export default TerminalSim;