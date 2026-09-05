export interface SocialLink {
  name: string;
  url: string;
  icon: "linkedin" | "github" | "telegram" | "phone" | "instagram" | "email";
}

export type SkillCategory =
  | "Backend"
  | "Frontend"
  | "Language"
  | "Database"
  | "DevOps"
  | "Testing";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}
