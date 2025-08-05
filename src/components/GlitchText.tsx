import React, { useEffect, useState, useRef } from "react";

interface GlitchTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text = "",
  delay = 0,
  className = "",
}) => {
  const [display, setDisplay] = useState("");
  const [glitching, setGlitching] = useState(true);
  const intervalRef = useRef<number | undefined>(undefined);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*<>/";

  useEffect(() => {
    let frame = 0;
    const maxFrames = text.length * 4;

    intervalRef.current = setInterval(() => {
      setDisplay(
        text.split("").map((c, i) => {
          if (c === "\n" || c === " ") return c;
          if (i < frame / 4) return text[i];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      frame++;
      if (frame > maxFrames) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setGlitching(false);
        setDisplay(text); // Ensure final text is set
      }
    }, 15 + delay);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, delay, chars]);

  return (
    <span
      className={`${glitching ? "glitch-text" : ""} ${className}`}
      data-text={display}
    >
      {display}
    </span>
  );
};

export default GlitchText;
