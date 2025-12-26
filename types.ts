export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  githubLink?: string;
}

export interface Skill {
  name: string;
  iconClass?: string; // CSS class for Devicon or custom styles
  svg?: string; // Custom SVG path data
  viewBox?: string; // Custom SVG viewbox
  category?: 'language' | 'framework' | 'tool' | 'concept';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  field: string;
  year: string;
  gpa?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}