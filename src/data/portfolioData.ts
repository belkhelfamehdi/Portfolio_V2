export interface ProfessionalProject {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  stackBadges: string[];
  tags: string[];
  linkLabel: string;
  link: string;
  demoLabel?: string;
  demoLink?: string;
}

export interface HeaderNavItem {
  label: string;
  href: string;
}

export interface HeaderContent {
  brand: string;
  navItems: HeaderNavItem[];
  ctaLabel: string;
}

export interface HeroContent {
  initLine: string;
  firstName: string;
  lastName: string;
  role: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  statusLines: string[];
}

export interface IdentityDetail {
  label: string;
  value: string;
}

export interface IdentityContent {
  imageAlt: string;
  idTag: string;
  terminalPath: string;
  bioInfo: string;
  bioMission: string;
  details: IdentityDetail[];
}

export interface SideProject {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  version: string;
  link?: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  accent: 'primary' | 'secondary';
  items: SkillItem[];
}

export interface ToolCategory {
  title: string;
  icon: string;
  tools: string[];
}

export interface SocialLink {
  label: string;
  icon: string;
  href: string;
  accent: 'primary' | 'secondary';
}

export interface ContactFormContent {
  identityPlaceholder: string;
  messagePlaceholder: string;
  submitLabel: string;
}

export interface ConnectContent {
  title: string;
  subtitle: string;
  socialLinks: SocialLink[];
  form: ContactFormContent;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContent {
  brand: string;
  links: FooterLink[];
  copyright: string;
}

export interface PortfolioData {
  header: HeaderContent;
  hero: HeroContent;
  identity: IdentityContent;
  professionalProjects: ProfessionalProject[];
  sideProjects: SideProject[];
  skillCategories: SkillCategory[];
  toolCategory: ToolCategory;
  connect: ConnectContent;
  footer: FooterContent;
}

export const PORTFOLIO_STORAGE_KEY = 'portfolio-data-v2';

export const defaultPortfolioData: PortfolioData = {
  header: {
    brand: '[TERMINAL_ARCHITECT]',
    navItems: [
      { label: '//01.IDENTITY', href: '#identity' },
      { label: '//02.PROJECTS', href: '#projects' },
      { label: '//03.SKILLS', href: '#skills' },
      { label: '//04.CONNECT', href: '#connect' },
    ],
    ctaLabel: 'ESTABLISH_LINK',
  },
  hero: {
    initLine: 'System.Initialize(BELKHELFA_MEHDI)',
    firstName: 'BELKHELFA',
    lastName: 'MEHDI',
    role: 'FullStack Developer',
    primaryCtaLabel: 'DOWNLOAD_CV.EXE',
    secondaryCtaLabel: '> VIEW_ARCHITECTURE',
    statusLines: ['LATENCY: 14MS', 'UPLINK: ENCRYPTED', 'STATUS: OPERATIONAL'],
  },
  identity: {
    imageAlt: 'Belkhelfa Mehdi portrait',
    idTag: 'ID: MK-7721',
    terminalPath: '/USER/BIO/ROOT_ACCESS',
    bioInfo:
      'I am a full-stack architect specializing in high-performance digital ecosystems. My approach combines the structural integrity of backend systems with the fluid precision of modern frontend frameworks.',
    bioMission:
      "Transforming complex business requirements into elegant, scalable, and secure codebases. I don't just build websites; I engineer digital experiences.",
    details: [
      { label: 'Location', value: 'ALGIERS // ALGERIA' },
      { label: 'Experience', value: '3+ YEARS_ACTIVE' },
      { label: 'Current_Focus', value: 'CLOUD_ARCHITECTURE' },
      { label: 'Availability', value: 'OPEN_FOR_DIRECTIVE' },
    ],
  },
  professionalProjects: [
    {
      title: 'Yalla Interview Platform',
      description:
        'AI-powered platform that helps candidates train for technical interviews end-to-end: users create targeted practice sessions, get tailored questions and model answers, pin key questions, add notes, request deeper explanations, and continuously improve through organized revision cycles.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDXGDiWlM-Jl2mVI-L83RacHLgt4bAT_kLwtXJhjDVrkpfU2hIowp_oDkMh96imm9IUXPJ2jEV1QTbLObHO17hca3eOw3frtKQg8TJq3ix9DwVXI3GvFpf_Zkczurk8pl8PCxuRYHjG66tP2czulXGryrn4ldcsiZDPEqEU4Tmdr3O9JoXkKkWD3z1Zj_Ah-gdUz1ccm1LV_1V0nlAovkJw6dMRkrWULyDfDzGXvPBUOGJ1KktDaCb9Mv1f0ow307iPVVXvyiRwhsaG',
      imageAlt:
        'AI interview training workspace showing personalized sessions, questions, and guided revision',
      stackBadges: ['REACT', 'TYPESCRIPT', 'VITE', 'NODE_JS', 'EXPRESS', 'MONGODB', 'JWT', 'GROQ_AI'],
      tags: ['#INTERVIEW_TRAINING', '#PERSONALIZED_PRACTICE', '#SESSION_WORKFLOW', '#LEARNING_FEEDBACK'],
      linkLabel: 'OPEN_PROJECT_REPOSITORIES',
      link: 'https://github.com/belkhelfamehdi/yalla_interview_Frontend.git',
      demoLabel: 'LIVE_DEMO',
      demoLink: 'https://yalla-interview.mehdibelkhelfa.com/',
    },
  ],
  sideProjects: [
    {
      title: 'NEURAL_NET_API',
      description:
        'Lightweight RESTful gateway for AI model orchestration and deployment.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC_X8V_k8knC3UtuUJ2_y2GWJxwVursDVMe6K4x_ceSER9b2i0MHUKbW2cq7F4IS8Ma-TUmwGqPk1PBIlHgrYTtR6Vwc7HJTGWwkhTFl1TapQN1RwaW5csMEmjGJYgey2yuedN6SYRbh8hlzLI-UmTlb0bF47L2CaCZEVFLeWlqmv-yXfDqcYGu7TkhidBCfztOl2CJTeJiT18TOSG7OwU5bmlqkXdohqL0u0R97oaNTO3Xownih0h2Ym9c6-NgDX-Ub8SIw4iJXkEV',
      imageAlt:
        'Abstract digital visualization of network nodes and data flow, futuristic aesthetic, glowing blue lines on black background',
      version: 'V1.02_STABLE',
      link: '#',
    },
    {
      title: 'DOCKER_SWARM_O',
      description:
        'Automated container orchestration scripts for high-availability clusters.',
      version: 'V0.98_BETA',
      link: '#',
    },
  ],
  skillCategories: [
    {
      title: 'LANGUAGES',
      icon: 'code',
      accent: 'primary',
      items: [
        { name: 'JAVA', level: 95 },
        { name: 'TYPESCRIPT', level: 88 },
        { name: 'PYTHON', level: 75 },
      ],
    },
    {
      title: 'BACKEND_CORE',
      icon: 'database',
      accent: 'secondary',
      items: [
        { name: 'SPRING_BOOT', level: 92 },
        { name: 'NODE_JS', level: 80 },
        { name: 'DOCKER_K8S', level: 70 },
      ],
    },
    {
      title: 'FRONTEND_INTERFACE',
      icon: 'dashboard',
      accent: 'primary',
      items: [
        { name: 'ANGULAR', level: 90 },
        { name: 'REACT', level: 82 },
      ],
    },
  ],
  toolCategory: {
    title: 'ARCHITECT_TOOLS',
    icon: 'terminal',
    tools: ['Git_Lab', 'AWS_Cloud', 'Jenkins_Pipeline', 'Postman', 'Figma'],
  },
  connect: {
    title: 'CONNECT WITH ME',
    subtitle: 'Initializing communication protocol...',
    socialLinks: [
      { label: 'GMAIL', icon: 'alternate_email', href: '#', accent: 'primary' },
      { label: 'GITHUB', icon: 'hub', href: '#', accent: 'secondary' },
      { label: 'LINKEDIN', icon: 'work', href: '#', accent: 'primary' },
    ],
    form: {
      identityPlaceholder: 'IDENTITY_IDENTIFIER',
      messagePlaceholder: 'ENCRYPT_MESSAGE_HERE',
      submitLabel: 'SEND_TRANSMISSION.BAT',
    },
  },
  footer: {
    brand: 'BELKHELFA_MEHDI',
    links: [
      { label: 'TERMINAL_LOG', href: '#' },
      { label: 'NETWORK_STATUS', href: '#' },
      { label: 'ENCRYPTION_PROTOCOL', href: '#' },
    ],
    copyright: '© 2024 SYSTEM_ARCHITECT // ALL RIGHTS RESERVED',
  },
};

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === 'string');

const isHeaderContent = (value: unknown): value is HeaderContent => {
  if (!isObject(value)) {
    return false;
  }

  return (
    typeof value.brand === 'string' &&
    Array.isArray(value.navItems) &&
    value.navItems.every(
      (item) => isObject(item) && typeof item.label === 'string' && typeof item.href === 'string',
    ) &&
    typeof value.ctaLabel === 'string'
  );
};

const isHeroContent = (value: unknown): value is HeroContent => {
  if (!isObject(value)) {
    return false;
  }

  return (
    typeof value.initLine === 'string' &&
    typeof value.firstName === 'string' &&
    typeof value.lastName === 'string' &&
    typeof value.role === 'string' &&
    typeof value.primaryCtaLabel === 'string' &&
    typeof value.secondaryCtaLabel === 'string' &&
    isStringArray(value.statusLines)
  );
};

const isIdentityContent = (value: unknown): value is IdentityContent => {
  if (!isObject(value)) {
    return false;
  }

  return (
    typeof value.imageAlt === 'string' &&
    typeof value.idTag === 'string' &&
    typeof value.terminalPath === 'string' &&
    typeof value.bioInfo === 'string' &&
    typeof value.bioMission === 'string' &&
    Array.isArray(value.details) &&
    value.details.every(
      (item) => isObject(item) && typeof item.label === 'string' && typeof item.value === 'string',
    )
  );
};

const isProfessionalProject = (value: unknown): value is ProfessionalProject => {
  if (!isObject(value)) {
    return false;
  }

  const demoLabelIsValid = value.demoLabel === undefined || typeof value.demoLabel === 'string';
  const demoLinkIsValid = value.demoLink === undefined || typeof value.demoLink === 'string';

  return (
    typeof value.title === 'string' &&
    typeof value.description === 'string' &&
    typeof value.image === 'string' &&
    typeof value.imageAlt === 'string' &&
    isStringArray(value.stackBadges) &&
    isStringArray(value.tags) &&
    typeof value.linkLabel === 'string' &&
    typeof value.link === 'string' &&
    demoLabelIsValid &&
    demoLinkIsValid
  );
};

const isSideProject = (value: unknown): value is SideProject => {
  if (!isObject(value)) {
    return false;
  }

  const imageIsValid = value.image === undefined || typeof value.image === 'string';
  const imageAltIsValid = value.imageAlt === undefined || typeof value.imageAlt === 'string';
  const linkIsValid = value.link === undefined || typeof value.link === 'string';

  return (
    typeof value.title === 'string' &&
    typeof value.description === 'string' &&
    typeof value.version === 'string' &&
    imageIsValid &&
    imageAltIsValid &&
    linkIsValid
  );
};

const isSkillItem = (value: unknown): value is SkillItem => {
  if (!isObject(value)) {
    return false;
  }

  return (
    typeof value.name === 'string' &&
    typeof value.level === 'number' &&
    Number.isFinite(value.level)
  );
};

const isSkillCategory = (value: unknown): value is SkillCategory => {
  if (!isObject(value)) {
    return false;
  }

  const accentIsValid = value.accent === 'primary' || value.accent === 'secondary';

  return (
    typeof value.title === 'string' &&
    typeof value.icon === 'string' &&
    accentIsValid &&
    Array.isArray(value.items) &&
    value.items.every((item) => isSkillItem(item))
  );
};

const isToolCategory = (value: unknown): value is ToolCategory => {
  if (!isObject(value)) {
    return false;
  }

  return (
    typeof value.title === 'string' &&
    typeof value.icon === 'string' &&
    isStringArray(value.tools)
  );
};

const isConnectContent = (value: unknown): value is ConnectContent => {
  if (!isObject(value)) {
    return false;
  }

  return (
    typeof value.title === 'string' &&
    typeof value.subtitle === 'string' &&
    Array.isArray(value.socialLinks) &&
    value.socialLinks.every(
      (item) =>
        isObject(item) &&
        typeof item.label === 'string' &&
        typeof item.icon === 'string' &&
        typeof item.href === 'string' &&
        (item.accent === 'primary' || item.accent === 'secondary'),
    ) &&
    isObject(value.form) &&
    typeof value.form.identityPlaceholder === 'string' &&
    typeof value.form.messagePlaceholder === 'string' &&
    typeof value.form.submitLabel === 'string'
  );
};

const isFooterContent = (value: unknown): value is FooterContent => {
  if (!isObject(value)) {
    return false;
  }

  return (
    typeof value.brand === 'string' &&
    Array.isArray(value.links) &&
    value.links.every(
      (item) => isObject(item) && typeof item.label === 'string' && typeof item.href === 'string',
    ) &&
    typeof value.copyright === 'string'
  );
};

export const isPortfolioData = (value: unknown): value is PortfolioData => {
  if (!isObject(value)) {
    return false;
  }

  return (
    isHeaderContent(value.header) &&
    isHeroContent(value.hero) &&
    isIdentityContent(value.identity) &&
    Array.isArray(value.professionalProjects) &&
    value.professionalProjects.every((project) => isProfessionalProject(project)) &&
    Array.isArray(value.sideProjects) &&
    value.sideProjects.every((project) => isSideProject(project)) &&
    Array.isArray(value.skillCategories) &&
    value.skillCategories.every((category) => isSkillCategory(category)) &&
    isToolCategory(value.toolCategory) &&
    isConnectContent(value.connect) &&
    isFooterContent(value.footer)
  );
};
