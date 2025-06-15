
export interface ContactInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
}

export interface JobExperience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'frameworks' | 'ai-ml' | 'tools' | 'methodologies';
}

export interface Project {
  id: string;
  title: string;
  duration: string;
  organization: string;
  description: string;
  technologies: string[];
  highlights: string[];
  category: 'ai-ml' | 'iot' | 'web' | 'mobile';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  type: 'bachelor' | 'higher-secondary' | 'certification';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  grade?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}
