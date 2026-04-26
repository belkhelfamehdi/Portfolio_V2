import type { TerminalLine, CommandContext } from '@/types/terminal';

const generateId = () => Math.random().toString(36).substring(2, 9);

const createLine = (type: TerminalLine['type'], content: string): TerminalLine => ({
  id: generateId(),
  type,
  content,
  timestamp: Date.now(),
});

const HELP_TEXT = `Available commands:
  help      - Show this help message
  about     - Display information about me
  projects  - List all projects
  open      - Open a project (usage: open <project-name>)
  contact   - Show contact information
  socials   - Display social media links
  clear     - Clear terminal screen
  cv        - Download CV/Resume
  exit      - Exit terminal and view full site
  whoami    - Display user info (auto-run on start)`;

const buildWhoamiOutput = (ctx: CommandContext): TerminalLine[] => {
  const { hero, identity } = ctx.portfolioData;
  return [
    createLine('system', '[SYSTEM] Executing whoami...'),
    createLine('output', ''),
    createLine('output', `NAME:    ${hero.firstName} ${hero.lastName}`),
    createLine('output', `ROLE:    ${hero.role}`),
    createLine('output', `PATH:   ${identity.terminalPath}`),
    createLine('output', ''),
    createLine('output', 'Type "help" to see available commands.'),
  ];
};

const buildAboutOutput = (ctx: CommandContext): TerminalLine[] => {
  const { hero, identity } = ctx.portfolioData;
  const lines: TerminalLine[] = [
    createLine('system', '[SYSTEM] Loading identity module...'),
    createLine('output', ''),
    createLine('output', `>>> ${hero.firstName} ${hero.lastName}`),
    createLine('output', `>>> ${hero.role}`),
    createLine('output', ''),
    createLine('output', identity.bioInfo),
    createLine('output', ''),
    createLine('output', 'DETAILS:'),
    ...identity.details.map((d) => createLine('output', `  ${d.label}: ${d.value}`)),
    createLine('output', ''),
  ];

  if (identity.education && identity.education.length > 0) {
    lines.push(createLine('output', 'EDUCATION:'));
    identity.education.forEach((edu) => {
      lines.push(createLine('output', `  ${edu.degree}`));
      lines.push(createLine('output', `    ${edu.institution}`));
      lines.push(createLine('output', `    ${edu.period}`));
      if (edu.description) {
        lines.push(createLine('output', `    ${edu.description}`));
      }
      lines.push(createLine('output', ''));
    });
  }

  return lines;
};

const buildProjectsOutput = (ctx: CommandContext): TerminalLine[] => {
  const { professionalProjects } = ctx.portfolioData;
  const lines: TerminalLine[] = [
    createLine('system', '[SYSTEM] Enumerating project repositories...'),
    createLine('output', ''),
  ];

  if (professionalProjects.length === 0) {
    lines.push(createLine('output', 'No projects found.'));
    return lines;
  }

  professionalProjects.forEach((project, index) => {
    lines.push(createLine('output', `${index + 1}. ${project.title}`));
    lines.push(createLine('output', `   Stack: [${project.stackBadges.join(', ')}]`));
    lines.push(createLine('output', `   Usage: open ${project.title.toLowerCase().replace(/\s+/g, '_')}`));
    lines.push(createLine('output', ''));
  });

  lines.push(createLine('output', 'Use "open <project-name>" to view details.'));
  lines.push(createLine('output', ''));

  return lines;
};

const buildContactOutput = (ctx: CommandContext): TerminalLine[] => {
  const { connect } = ctx.portfolioData;
  return [
    createLine('system', '[SYSTEM] Establishing communication channel...'),
    createLine('output', ''),
    createLine('output', 'CONTACT CHANNELS:'),
    ...connect.socialLinks.map((link) =>
      createLine('output', `  ${link.label}: ${link.href}`)
    ),
    createLine('output', ''),
    createLine('output', 'Email: belkhelfamehdi@gmail.com'),
    createLine('output', ''),
  ];
};

const buildSocialsOutput = (ctx: CommandContext): TerminalLine[] => {
  const { connect } = ctx.portfolioData;
  return [
    createLine('system', '[SYSTEM] Fetching network endpoints...'),
    createLine('output', ''),
    ...connect.socialLinks.map((link) =>
      createLine('output', `  ${link.label}: ${link.href}`)
    ),
    createLine('output', ''),
  ];
};

const buildClearOutput = (): TerminalLine[] => {
  return [createLine('system', '[SYSTEM] Clearing terminal buffer...')];
};

const buildCVOutput = (): TerminalLine[] => {
  return [
    createLine('system', '[SYSTEM] Preparing CV download...'),
    createLine('output', ''),
    createLine('output', 'CV file ready for download.'),
    createLine('output', 'Location: /assets/CV.pdf'),
    createLine('output', 'Command: cv (already triggered)'),
    createLine('output', ''),
  ];
};

const buildErrorOutput = (cmd: string): TerminalLine[] => {
  return [
    createLine('error', `[ERROR] Command not found: ${cmd}`),
    createLine('output', 'Type "help" for available commands.'),
  ];
};

const buildHelpOutput = (): TerminalLine[] => {
  return [
    createLine('system', '[SYSTEM] Loading command index...'),
    createLine('output', ''),
    ...HELP_TEXT.split('\n').map((line) => createLine('output', line)),
    createLine('output', ''),
  ];
};

export const executeCommand = async (
  command: string,
  ctx: CommandContext
): Promise<TerminalLine[]> => {
  const trimmed = command.trim();
  if (!trimmed) {
    return [];
  }

  const [cmd, ...args] = trimmed.split(/\s+/);
  const normalizedCmd = cmd.toLowerCase();

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(50 + Math.random() * 100);

  switch (normalizedCmd) {
    case 'help':
      return buildHelpOutput();
    case 'whoami':
      return buildWhoamiOutput(ctx);
    case 'about':
      return buildAboutOutput(ctx);
    case 'projects':
      return buildProjectsOutput(ctx);
    case 'contact':
      return buildContactOutput(ctx);
    case 'socials':
      return buildSocialsOutput(ctx);
    case 'clear':
      return buildClearOutput();
    case 'cv':
      return buildCVOutput();
    case 'exit':
      return [
        createLine('system', '[SYSTEM] Terminating session...'),
        createLine('output', ''),
        createLine('output', 'Exiting terminal. Use "exit" command to leave.'),
        createLine('output', ''),
      ];
    case 'open':
      if (args.length === 0) {
        return [
          createLine('error', '[ERROR] Usage: open <project-name>'),
          createLine('output', 'Run "projects" to see available projects.'),
        ];
      }
      {
        const projectName = args.join(' ').toLowerCase().replace(/_/g, ' ');
        const project = ctx.portfolioData.professionalProjects.find((p) =>
          p.title.toLowerCase().includes(projectName)
        );
        if (project) {
          return [
            createLine('system', `[SYSTEM] Opening project: ${project.title}...`),
            createLine('output', ''),
            createLine('output', `PROJECT: ${project.title}`),
            createLine('output', ''),
            createLine('output', project.description),
            createLine('output', ''),
            createLine('output', `STACK: [${project.stackBadges.join(', ')}]`),
            createLine('output', ''),
            createLine('output', `REPO: ${project.link}`),
            ...(project.demoLink
              ? [createLine('output', `DEMO: ${project.demoLink}`)]
              : []),
            createLine('output', ''),
          ];
        }
        return [
          createLine('error', `[ERROR] Project not found: ${args.join(' ')}`),
          createLine('output', 'Run "projects" to see available projects.'),
        ];
      }
    default:
      return buildErrorOutput(cmd);
  }
};