// Modelo para Me
export interface MeModel {
    name: string;
    email: string;
    phone: string;
    adress: string;
    linkedin: string;
    titles: string[];
  }
  
  // Modelo para Summary
  export interface SummaryModel {
    title: string;
    description: string;
  }
  
  // Modelo para ExperienceItem
  export interface ExperienceItemModel {
    position: string;
    company: string;
    start_at: string;
    finished_at: string | null;
    activities: string[];
  }
  
  // Modelo para Experience
  export interface ExperienceModel {
    title: string;
    items: ExperienceItemModel[];
  }
  
  // Modelo para EducationItem
  export interface EducationItemModel {
    name: string;
    start_at: string;
    finished_at: string;
    course: string;
  }
  
  // Modelo para Education
  export interface EducationModel {
    title: string;
    items: EducationItemModel[];
  }
  
  // Modelo para Skills
  export interface SkillsModel {
    title: string;
    items: string[];
  }
  
  // Modelo para LanguageItem
  export interface LanguageItemModel {
    language: string;
    level: number;
  }
  
  // Modelo para Languages
  export interface LanguagesModel {
    title: string;
    levels_description: string[];
    items: LanguageItemModel[];
  }
  
  // Modelo principal que engloba todos os modelos anteriores
  export interface DataFileModel {
    me: MeModel;
    summary: SummaryModel;
    experience: ExperienceModel;
    education: EducationModel;
    skills: SkillsModel;
    languages: LanguagesModel;
  }