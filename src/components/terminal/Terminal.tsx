import { useEffect, useRef, useState, useCallback, useMemo, type KeyboardEvent, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TerminalLine, CommandContext } from '@/types/terminal';
import { executeCommand } from './commandParser';

interface TerminalProps {
  portfolioData: CommandContext['portfolioData'];
}

const Terminal: React.FC<TerminalProps> = ({ portfolioData }) => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState('');
  const [currentPath] = useState('/~');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [hasInitialized, setHasInitialized] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const context = useMemo<CommandContext>(
    () => ({
      currentPath,
      setPath: () => {},
      portfolioData,
    }),
    [currentPath, portfolioData]
  );

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const runInitialCommand = useCallback(async () => {
    if (hasInitialized) return;
    setHasInitialized(true);

    const initialOutput = await executeCommand('whoami', context);
    setLines(initialOutput);
  }, [context, hasInitialized]);

  useEffect(() => {
    const timer = setTimeout(() => {
      runInitialCommand();
    }, 800);
    return () => clearTimeout(timer);
  }, [runInitialCommand]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const command = input.trim();
    setCommandHistory((prev) => [...prev, command]);
    setHistoryIndex(-1);

    const commandLine: TerminalLine = {
      id: Math.random().toString(36).substring(2, 9),
      type: 'command',
      content: `${currentPath} > ${command}`,
    };

    if (command === 'clear') {
      setInput('');
      setLines([]);
      return;
    }

    setLines((prev) => [...prev, commandLine]);
    setInput('');
    setIsProcessing(true);

    const output = await executeCommand(command, context);
    setLines((prev) => [...prev, ...output]);
    setIsProcessing(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-mono">
      <div className="flex items-center gap-2 px-4 py-3 bg-surface-container border-b border-outline-variant">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-sm text-outline font-headline">bash — {currentPath}</span>
        </div>
      </div>

      <div
        ref={terminalRef}
        onClick={handleContainerClick}
        className="flex-1 p-4 overflow-y-auto text-sm cursor-text"
      >
        <AnimatePresence>
          {lines.map((line) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className={`whitespace-pre-wrap mb-1 ${
                line.type === 'command'
                  ? 'text-primary-container'
                  : line.type === 'error'
                  ? 'text-error'
                  : line.type === 'system'
                  ? 'text-secondary-fixed-dim'
                  : 'text-primary'
              }`}
            >
              {line.content}
            </motion.div>
          ))}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-primary-container">{currentPath} &gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isProcessing}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            className="flex-1 bg-transparent outline-none text-primary caret-transparent"
          />
          <span
            className={`text-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`}
          >
            █
          </span>
        </form>
      </div>

      <div className="px-4 py-2 bg-surface-container border-t border-outline-variant flex items-center justify-between">
        <span className="text-xs text-outline">
          ↑↓ for history • Tab completion • Ctrl+L to clear
        </span>
        <span className="text-xs text-outline">Terminal v1.0.0</span>
      </div>
    </div>
  );
};

export default Terminal;