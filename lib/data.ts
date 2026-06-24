// -----------------------------------------------------------------------------
// All site content lives here. Components import from this file — no hardcoded
// copy in the components themselves.
// -----------------------------------------------------------------------------

export const site = {
  name: "Yll Veliu",
  monogram: "YV",
  role: "Full-Stack Developer · Kosovo",
  domain: "yllveliu.vercel.app",
  url: "https://yllveliu.vercel.app",
  email: "yll.veliu1@gmail.com",
  github: "https://github.com/yllveliu",
  linkedin: "https://linkedin.com/in/yllveliu",
};

export const navLinks: { label: string; href: string }[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  tag: "Full-Stack Developer · Kosovo",
  nameWords: ["Yll", "Veliu"],
  subtitle:
    "I ship full-stack products. Database design to deployed frontends. Real users, real scale.",
  primaryCta: { label: "View My Work", href: "#work" },
  secondaryCta: { label: "Get In Touch", href: "#contact" },
};

export const about = {
  label: "About",
  heading: "I build products, not just code.",
  bio: "Full-stack developer from Kosovo working on a US-based enterprise field-service platform at Genpact. I own projects end-to-end: architecture, backend, frontend, and deployment. Outside of work I launched CalorieBot AI independently, a live SaaS with paying subscribers, built and shipped solo from zero.",
  detail: "Gjilan, Kosovo · Open to remote",
};

// Stack icon grid in the About section. Icons are vendored locally under
// public/icons (devicon SVGs) — no external CDN dependency. `invert` flips dark
// monochrome logos so they read on the dark surface.
export const ICON_BASE = "/icons/";

export const techStack: {
  name: string;
  icon: string;
  invert?: boolean;
}[] = [
  { name: "React", icon: "react.svg" },
  { name: "TypeScript", icon: "typescript.svg" },
  { name: "Python", icon: "python.svg" },
  { name: "FastAPI", icon: "fastapi.svg" },
  { name: "PostgreSQL", icon: "postgresql.svg" },
  { name: "Docker", icon: "docker.svg" },
  { name: "Next.js", icon: "nextjs.svg", invert: true },
  { name: "Node.js", icon: "nodejs.svg" },
  { name: "Tailwind", icon: "tailwindcss.svg" },
  { name: "Git", icon: "git.svg" },
];

export type Project = {
  number: string;
  name: string;
  description: string;
  tags: string[];
  live?: string;
  github?: string;
  image?: string;
  imageFit?: "cover" | "contain";
};

export const projects: Project[] = [
  {
    number: "01",
    name: "CalorieBot AI",
    description:
      "SaaS calorie tracker running entirely in WhatsApp. Send a meal photo or text and get instant calories, protein, carbs, and fat. Live with paying subscribers.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "OpenAI", "Stripe", "WhatsApp API"],
    live: "https://caloriebotai.com",
    image: "/projects/caloriebot.png",
  },
  {
    number: "02",
    name: "FieldRoute",
    description:
      "Multi-role field-service platform with AI job classification. Customers submit requests, AI categorises them, dispatchers assign technicians, technicians track and close jobs.",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    live: "https://fieldroute.vercel.app",
    github: "https://github.com/yllveliu/fieldroute",
    image: "/projects/fieldroute.png",
  },
  {
    number: "03",
    name: "Project Management System",
    description:
      "Full-stack Kanban platform with role-based access, real-time task tracking, comments, and activity logs. REST API backend with JWT auth.",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    live: "https://project-management-system-ochre-ten.vercel.app",
    github: "https://github.com/yllveliu/project-management-system",
    image: "/projects/pms.png",
  },
  {
    number: "04",
    name: "Green Group Kosova",
    description:
      "Production B2B website for a Kosovo-based company. Bilingual, fully responsive, deployed and live.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://www.greengroupkosova.com",
    image: "/projects/greengroupkosova.png",
    imageFit: "contain" as const,
  },
];

export const projectsSection = {
  label: "Work",
  heading: "Things I've built.",
  allLink: { label: "View all projects on GitHub →", href: site.github },
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export const experience: Experience[] = [
  {
    company: "Genpact",
    role: "Full-Stack Developer",
    period: "Mar 2026 – Jul 2026",
    description:
      "Shipping React/TypeScript frontend and FastAPI backend on a US enterprise field-service platform. Working in an Agile team with PR-based workflow across an international distributed team.",
  },
  {
    company: "SD-IT Services LLC",
    role: "IT Specialist, Tier 2",
    period: "Jul 2024 – Jul 2025",
    description:
      "Tier 2 support for Foodhub, a live UK food ordering and POS platform. Handled production incidents, coordinated deployments, and managed Jira-based enterprise workflows.",
  },
  {
    company: "Green Group Kosova",
    role: "Web Developer & IT Administrator",
    period: "Mar 2023 – Jul 2024",
    description:
      "Designed and launched the company's bilingual B2B website from scratch. Managed internal IT infrastructure and systems.",
  },
];

export const experienceSection = {
  label: "Experience",
  heading: "Where I've worked.",
};

export const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS", "Bash"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "Framer Motion", "Shadcn/UI"],
  },
  {
    label: "Backend",
    skills: ["FastAPI", "NestJS", "Node.js", "Prisma", "SQLAlchemy", "REST APIs"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite", "SQL Server"],
  },
  {
    label: "DevOps & Tools",
    skills: ["Git", "Docker", "Vercel", "Sentry", "Linux", "CI/CD"],
  },
];

export const skillsSection = {
  label: "Skills",
  heading: "What I work with.",
};

export const contact = {
  label: "Contact",
  heading: "Let's build something together.",
  subtext:
    "Available for full-stack roles and freelance projects. Response within 24 hours.",
  email: site.email,
  linkedin: site.linkedin,
};

export const footer = {
  text: "Yll Veliu · 2026",
  github: site.github,
  linkedin: site.linkedin,
  instagram: "https://www.instagram.com/yll.veliu/",
};
