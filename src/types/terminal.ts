export interface TerminalLine {
  id: string;
  type: 'command' | 'output' | 'system' | 'error';
  content: string;
  timestamp?: number;
}

export interface CommandContext {
  currentPath: string;
  setPath: (path: string) => void;
  portfolioData: {
    hero: {
      firstName: string;
      lastName: string;
      role: string;
      initLine: string;
    };
    identity: {
      terminalPath: string;
      bioInfo: string;
      details: { label: string; value: string }[];
      education: {
        degree: string;
        institution: string;
        location: string;
        period: string;
        description?: string;
      }[];
    };
    professionalProjects: {
      title: string;
      description: string;
      stackBadges: string[];
      link: string;
      demoLink?: string;
    }[];
    connect: {
      socialLinks: { label: string; href: string }[];
    };
    header: {
      brand: string;
    };
  };
}