export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  type?: 'input' | 'service' | 'model' | 'decision' | 'output';
}

export interface TechStackCategory {
  category: string;
  stack: string[];
}

export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface CaseStudyData {
  problem: string;
  approach: string;
  architectureDescription: string;
  architectureSteps: WorkflowStep[];
  technologiesUsed: TechStackCategory[];
  keyFeatures: string[];
  challengesAndSolutions: ChallengeSolution[];
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'AI/ML' | 'Full-Stack' | 'Computer Vision' | 'NLP';
  featured: boolean;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  caseStudy: CaseStudyData;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type: string;
  details: string[];
  skillsUsed: string[];
}

export interface SkillItem {
  name: string;
  tag?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description?: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  period: string;
  issuerLogoText: string;
  credentialUrl?: string;
  description: string;
  image?: string;
  pdf?: string;
}

export interface EducationInfo {
  institution: string;
  degree: string;
  period: string;
  location: string;
  cgpa: string;
  coursework: string[];
}
