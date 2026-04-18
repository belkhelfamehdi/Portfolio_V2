export interface FeaturedProject {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  stackBadges: string[];
  tags: string[];
  linkLabel: string;
  link: string;
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
  accent: "primary" | "secondary";
  items: SkillItem[];
}

export const featuredProject: FeaturedProject = {
  title: "MySkilledCV",
  description:
    "A sophisticated platform for professionals to architect their careers through data-driven CV generation and portfolio hosting.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDXGDiWlM-Jl2mVI-L83RacHLgt4bAT_kLwtXJhjDVrkpfU2hIowp_oDkMh96imm9IUXPJ2jEV1QTbLObHO17hca3eOw3frtKQg8TJq3ix9DwVXI3GvFpf_Zkczurk8pl8PCxuRYHjG66tP2czulXGryrn4ldcsiZDPEqEU4Tmdr3O9JoXkKkWD3z1Zj_Ah-gdUz1ccm1LV_1V0nlAovkJw6dMRkrWULyDfDzGXvPBUOGJ1KktDaCb9Mv1f0ow307iPVVXvyiRwhsaG",
  imageAlt:
    "High-tech dashboard user interface for a resume builder application, dark mode, vibrant cyan and green accents, clean typography",
  stackBadges: ["JAVA", "ANGULAR"],
  tags: ["#SPRING_BOOT", "#POSTGRESQL", "#AWS", "#TAILWIND"],
  linkLabel: "ACCESS_REPOSITORY",
  link: "#",
};

export const sideProjects: SideProject[] = [
  {
    title: "NEURAL_NET_API",
    description:
      "Lightweight RESTful gateway for AI model orchestration and deployment.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_X8V_k8knC3UtuUJ2_y2GWJxwVursDVMe6K4x_ceSER9b2i0MHUKbW2cq7F4IS8Ma-TUmwGqPk1PBIlHgrYTtR6Vwc7HJTGWwkhTFl1TapQN1RwaW5csMEmjGJYgey2yuedN6SYRbh8hlzLI-UmTlb0bF47L2CaCZEVFLeWlqmv-yXfDqcYGu7TkhidBCfztOl2CJTeJiT18TOSG7OwU5bmlqkXdohqL0u0R97oaNTO3Xownih0h2Ym9c6-NgDX-Ub8SIw4iJXkEV",
    imageAlt:
      "Abstract digital visualization of network nodes and data flow, futuristic aesthetic, glowing blue lines on black background",
    version: "V1.02_STABLE",
    link: "#",
  },
  {
    title: "DOCKER_SWARM_O",
    description:
      "Automated container orchestration scripts for high-availability clusters.",
    version: "V0.98_BETA",
    link: "#",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "LANGUAGES",
    icon: "code",
    accent: "primary",
    items: [
      { name: "JAVA", level: 95 },
      { name: "TYPESCRIPT", level: 88 },
      { name: "PYTHON", level: 75 },
    ],
  },
  {
    title: "BACKEND_CORE",
    icon: "database",
    accent: "secondary",
    items: [
      { name: "SPRING_BOOT", level: 92 },
      { name: "NODE_JS", level: 80 },
      { name: "DOCKER_K8S", level: 70 },
    ],
  },
  {
    title: "FRONTEND_INTERFACE",
    icon: "dashboard",
    accent: "primary",
    items: [
      { name: "ANGULAR", level: 90 },
      { name: "REACT", level: 82 },
    ],
  },
];

export interface ToolCategory {
  title: string;
  icon: string;
  tools: string[];
}

export const toolCategory: ToolCategory = {
  title: "ARCHITECT_TOOLS",
  icon: "terminal",
  tools: ["Git_Lab", "AWS_Cloud", "Jenkins_Pipeline", "Postman", "Figma"],
};
