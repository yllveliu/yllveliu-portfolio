// -----------------------------------------------------------------------------
// All site content lives here. Components import from this file — no hardcoded
// copy in the components themselves.
// -----------------------------------------------------------------------------

export const site = {
  name: "Yll Veliu",
  monogram: "YV",
  role: "Full-Stack Developer · Kosovo",
  domain: "yllveliu.com",
  url: "https://yllveliu.com",
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
    "I build production-ready web applications — from backend APIs to polished frontends.",
  primaryCta: { label: "View My Work", href: "#work" },
  secondaryCta: { label: "Get In Touch", href: "#contact" },
};

export const about = {
  label: "About",
  heading: "Building full products, not just features.",
  bio: "I'm a full-stack developer from Kosovo, currently interning at Genpact on a US-based enterprise project. I build complete web products — from database schemas to deployed frontends. I independently launched CalorieBot AI, a live SaaS with paying subscribers, handling everything from architecture to payments.",
  detail: "📍 Gjilan, Kosovo · Open to remote opportunities",
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
};

export const projects: Project[] = [
  {
    number: "01",
    name: "CalorieBot AI",
    description:
      "AI-powered WhatsApp calorie tracker. Live SaaS with paying subscribers.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "OpenAI", "Stripe", "WhatsApp API"],
    live: "https://caloriebotai.com",
    image: "/projects/caloriebot.png",
  },
  {
    number: "02",
    name: "FieldRoute",
    description:
      "Field-service dispatch app. Job scheduling, technician tracking, parts inventory.",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    live: "https://fieldroute.vercel.app",
    github: "https://github.com/yllveliu/fieldroute",
    image: "/projects/fieldroute.png",
  },
  {
    number: "03",
    name: "Project Management System",
    description:
      "Full-stack Kanban app built as diploma thesis. Auth, tasks, REST API.",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    live: "https://project-management-system-ochre-ten.vercel.app",
    github: "https://github.com/yllveliu/project-management-system",
    image: "/projects/pms.png",
  },
  {
    number: "04",
    name: "Green Group Kosova",
    description:
      "Official B2B website for a Kosovo company. Responsive, production live.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://www.greengroupkosova.com",
    image: "/projects/greengroupkosova.png",
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
    role: "Full-Stack Developer Intern",
    period: "Mar 2026 – Jul 2026",
    description:
      "Built React/TypeScript UI and FastAPI backend for a US-based field-service platform. Agile team, PR-based Git workflow, international distributed team.",
  },
  {
    company: "SD-IT Services LLC",
    role: "IT Specialist Tier 2",
    period: "Jul 2024 – Jul 2025",
    description:
      "Tier 2 support for Foodhub (UK), a live POS and food ordering platform. Production deployments, incident management, Jira-based enterprise workflows.",
  },
  {
    company: "Green Group Kosova",
    role: "IT Admin & Web Dev",
    period: "Mar 2023 – Aug 2023",
    description:
      "Built the company website and managed IT infrastructure for a B2B company.",
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
    "Open to full-stack roles, freelance projects, and collaborations.",
  email: site.email,
  linkedin: site.linkedin,
};

export const footer = {
  text: "Yll Veliu · Built with Next.js & Tailwind · 2026",
  github: site.github,
  linkedin: site.linkedin,
};
