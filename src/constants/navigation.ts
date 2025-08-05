export interface NavigationItem {
  label: string;
  href: string;
}

export const leftNavigation: NavigationItem[] = [
  { label: "//01. <Portfolio/>", href: "#portfolio" },
  { label: "//02. <Projects/>", href: "#projects" },
];

export const rightNavigation: NavigationItem[] = [
  { label: "//03. <Skills/>", href: "#skills" },
  { label: "//04. <Contact/>", href: "#contact" },
];

export const typewriterWords = [
  "FullStack Developer",
  "Creator of Interfaces", 
  "Always Learning",
  "Curious Mind",
];

export const circleClasses = ["w-full", "w-[90%]", "w-[80%]", "w-[70%]"];
