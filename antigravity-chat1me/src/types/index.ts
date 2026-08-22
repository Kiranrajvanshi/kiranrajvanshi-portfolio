export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  highlights: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ClientWorkItem {
  id: string;
  client: string;
  role: string;
  category: string;
  description: string;
  deliverables: string[];
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  type: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
  highlight?: string;
}
