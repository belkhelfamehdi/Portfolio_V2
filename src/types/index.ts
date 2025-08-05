// Type definitions for better type safety
export interface Theme {
  colors: {
    neonGreen: string;
    black: string;
    gray: {
      400: string;
      500: string;
      800: string;
    };
  };
  fonts: {
    mono: string;
    orbitron: string;
  };
}

export interface AnimationConfig {
  duration: number;
  ease: string;
  delay?: number;
}

export interface GlitchConfig {
  chars: string;
  delay: number;
  maxFrames: number;
}

// Animation variants for consistent motion
export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const slideInVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};
