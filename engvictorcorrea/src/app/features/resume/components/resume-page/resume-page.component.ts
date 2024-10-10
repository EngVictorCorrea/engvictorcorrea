import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataFileModel, EducationModel, ExperienceModel, LanguagesModel, MeModel, SkillsModel, SummaryModel } from '../../interfaces/data-file';


@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.scss'
})
export class ResumePageComponent {  
  me: MeModel | null = null;
  summary: SummaryModel | null = null;
  experience: ExperienceModel | null = null;
  experience2: ExperienceModel | null = null;
  education: EducationModel | null = null;
  skills: SkillsModel | null = null;
  languages: LanguagesModel | null = null;


  constructor(private http: HttpClient) {}

  ngOnInit(): void {    
    this.loadResumeData('pt-br');
  }
  
  changeLanguage(lang: string): void {
    this.loadResumeData(lang);
  }

  loadResumeData(lang: string): void {
    this.http.get<DataFileModel>(`assets/data/${lang}.json`).subscribe(data => {    
      this.me = data.me;
      this.summary = data.summary;
      this.experience = this.BreakExperience(data.experience, 0, 2, true);
      this.experience2 =  this.BreakExperience(data.experience, 2, null, false);
      this.education = data.education;
      this.skills = data.skills;
      this.languages = data.languages;
    });
  }

 private BreakExperience(experience: ExperienceModel, start: number, length: number | null, showTitle : boolean = true): ExperienceModel {    
    const itemsLength = length !== null ? length : experience.items.length - start;
    return {
        title: showTitle ? experience.title : null,
        items: experience.items.slice(start, start + itemsLength)
    } as ExperienceModel; 
  }
}
