import React, { useEffect, useState, useRef } from "react";
import CVFile from "../assets/CV.pdf";

interface CommandResult {
  command: string;
  output: string;
  type: "input" | "output" | "error";
}

interface FileSystem {
  [path: string]: string[] | string;
}

const FILE_SYSTEM: FileSystem = {
  "/home/me": [],
  "/home/me/skills": [],
  "/home/me/projects": [],
  "/home/me/about.txt": "Mehdi Belkhelfa | FullStack Developer | 24y | Lille, France",
  "/home/me/contact.info": "Email: mehdibelkhelfa6@gmail.com | LinkedIn: mehdibelkhelfa",
  "/home/me/skills/frontend.txt": "React.js, Angular, TypeScript, TailwindCSS, Next.js",
  "/home/me/skills/backend.txt": "Node.js, Springboot, Laravel, PostgreSQL, Express",
  "/home/me/skills/tools.txt": "Git, Docker, Firebase, CI/CD",
  "/home/me/cv.pdf": "CV file - type 'cat cv' to view",
};

const CV_CONTENT = `
╔══════════════════════════════════════════════════════════════════╗
║                    MEHDI BELKHELFA                                      ║
║                    FullStack Developer                                  ║
╚══════════════════════════════════════════════════════════════════╝

📚 EDUCATION
───────────
• M1 - Expert Web Developer @ Ynov Lille
• Seeking M2 Apprenticeship - Sept 2025

💻 SKILLS
─────────
Frontend:  React.js, Angular, TypeScript, TailwindCSS, Next.js
Backend:   Node.js, Springboot, Laravel, PostgreSQL
Tools:     Git, Docker, Firebase, CI/CD

💼 EXPERIENCE
────────────
• FullStack Development Projects
• UI/UX Implementation

📍 LOCATION
───────────
Lille, France

📧 CONTACT
──────────
Email:    mehdibelkhelfa6@gmail.com
LinkedIn: linkedin.com/in/mehdibelkhelfa
GitHub:   github.com/belkhelfamehdi

⬇ DOWNLOAD: Use 'download cv' to get PDF
`;

const STARTUP_ART = `
____    ____  _________  ____  ____  ______   _____  
|_   \\  /   _||_   __  ||_   ||   _||_   _ \`.|_   _| 
  |   \\/   |    | |_ \\_|  | |__| |    | | \`. \\ | |   
  | |\\  /| |    |  _| _   |  __  |    | |  | | | |   
 _| |_\\/_| |_  _| |__/ | _| |  | |_  _| |_.' /_| |_  
|_____||_____||________||____||____||______.'|_____| 

╔══════════════════════════╗
║ FullStack Developer         ║
║ 24y • Lille, France         ║
║ Available NOW               ║
╚══════════════════════════╝`;

const TerminalSim: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandResult[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentPath, setCurrentPath] = useState("/home/me");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setHistory([{
      command: "",
      output: STARTUP_ART + "\n\nType 'help' for available commands.",
      type: "output"
    }]);
  }, []);

  const resolvePath = (path: string): string => {
    if (path.startsWith("/")) return path;
    if (path === "~") return "/home/me";
    return `${currentPath}/${path}`.replace(/\/+/g, "/");
  };

  const resolveDir = (path: string): string => {
    const resolved = resolvePath(path);
    if (FILE_SYSTEM[resolved] !== undefined) return resolved;
    return resolved;
  };

  const executeCommand = (cmd: string): string => {
    const parts = cmd.trim().split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    switch (command) {
      case "help":
        return `Available commands:
  ls [dir]     - List files & folders
  cd [dir]     - Change directory
  pwd          - Show current path
  clear        - Clear terminal
  cat cv       - View my CV
  download cv - Download CV PDF
  echo [text]  - Print text
  neofetch    - My profile
  me          - About me`;

      case "ls": {
        const target = args[0] ? resolveDir(args[0]) : currentPath;
        const contents = FILE_SYSTEM[target];
        if (Array.isArray(contents)) return contents.join("  ") || "(empty)";
        return target.split("/").filter(Boolean).pop() || "/";
      }

      case "cd": {
        if (!args[0] || args[0] === "~") {
          setCurrentPath("/home/me");
          return "";
        }
        const newPath = resolveDir(args[0]);
        if (FILE_SYSTEM[newPath] !== undefined || newPath in FILE_SYSTEM) {
          setCurrentPath(newPath);
          return "";
        }
        return `cd: ${args[0]}: No such directory`;
      }

      case "pwd":
        return currentPath;

      case "me":
      case "neofetch":
        return STARTUP_ART;

      case "clear":
        setHistory([]);
        return "";

      case "cat": {
        if (!args[0]) return "cat: missing operand";
        if (args[0] === "cv.pdf" || args[0] === "cv") return CV_CONTENT;
        const target = resolvePath(args[0]);
        const content = FILE_SYSTEM[target];
        if (typeof content === "string") return content;
        return `cat: ${args[0]}: Is a directory`;
      }

      case "download":
        if (args[0] === "cv") {
          const link = document.createElement('a');
          link.href = CVFile;
          link.download = 'Mehdi_Belkhelfa_CV.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          return "Downloading CV...";
        }
        return "download: specify file (e.g., 'download cv')";

      case "echo":
        return args.join(" ");

      default:
        return `command not found: ${command}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!input.trim()) return;

    setCommandHistory(prev => [...prev, input]);
    setHistoryIndex(-1);

    const output = executeCommand(input);
    setHistory(prev => [...prev, { command: input, output: input, type: "input" }]);

    if (output) {
      const isError = output.startsWith("command") || output.includes("cannot") || output.includes("missing") || output.includes("not found");
      setHistory(prev => [...prev, { command: input, output, type: isError ? "error" : "output" }]);
    }

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="bg-black text-neon-green font-mono text-sm rounded-lg border border-neon-green shadow-[0_0_20px_#00FFB3]">
      <div className="p-3 space-y-1 max-h-[350px] overflow-y-auto">
        {history.map((item, i) => (
          <div key={i}>
            {item.type === "input" && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-neon-green">me@belkhelfa</span>
                <span className="text-gray-500">:</span>
                <span className="text-blue-400">{currentPath}</span>
                <span className="text-neon-green">$</span>
                <span>{item.command}</span>
              </div>
            )}
            {item.type !== "input" && item.output && (
              <pre className={`whitespace-pre-wrap ${item.type === "error" ? "text-red-400" : "text-gray-300"}`}>{item.output}</pre>
            )}
          </div>
        ))}

        <form onSubmit={handleSubmit} onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit(e as any);
          }
        }} className="flex items-center gap-2 flex-wrap">
          <span className="text-neon-green">me@belkhelfa</span>
          <span className="text-gray-500">:</span>
          <span className="text-blue-400">{currentPath}</span>
          <span className="text-neon-green">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              e.stopPropagation();
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSubmit(e as any);
              }
            }}
            className="bg-transparent outline-none flex-1 min-w-[100px] text-neon-green"
            spellCheck={false}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
};

export default TerminalSim;