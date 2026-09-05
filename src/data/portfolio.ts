import type { Experience, Project, Skill, SocialLink } from "@/types";

export const personalInfo = {
  name: "Mirshod Nasilloyev",
  title: "QA / Backend (Go) Developer",
  greeting: "Hey there",
  bio: "I'm a developer working in backend systems and quality assurance (QA). I build reliable, fast, and scalable services using Go, Node.js, and modern test automation tools.",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/images/hero.jpg",
};

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mirshod-nasilloyev-76913827b/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/mirshodNasilloyev",
    icon: "github",
  },
  {
    name: "Telegram",
    url: "https://t.me/mnasilloyev",
    icon: "telegram",
  },
  {
    name: "Phone",
    url: "tel:+998907128472",
    icon: "phone",
  },
];

export const skills: Skill[] = [
  { name: "Go", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Test Automation", category: "Testing" },
];

export const experience: Experience[] = [
  {
    role: "QA / Backend Developer",
    company: "Enter company name",
    period: "2023 — Present",
    description:
      "Developing backend services in Go, ensuring API quality, and setting up test automation processes.",
  },
];

export const projects: Project[] = [
  {
    title: "Enter project name",
    description:
      "A short description of the project. Replace this section with your real projects.",
    image: "/images/project1.jpg",
    tags: ["Go", "PostgreSQL", "Docker"],
    demoUrl: "#",
    githubUrl: "https://github.com/mirshodNasilloyev",
  },
];
