export interface PersonalInfo {
  name: string;
  role: string[];
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  resumeUrl: string;
  avatarUrl: string;
  aboutImage: string;
  availability: boolean;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface Skills {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "frontend" | "backend" | "fullstack";
  featured: boolean;
  liveUrl: string;
  githubUrl: string;
}

export interface Experience {
  type: "education" | "experience";
  title: string;
  organization: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  stats: Stat[];
  skills: Skills;
  projects: Project[];
  experience: Experience[];
  certifications: Certification[];
}

export interface NavLink {
  label: string;
  to: string;
}
