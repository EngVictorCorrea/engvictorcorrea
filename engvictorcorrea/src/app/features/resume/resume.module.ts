import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumePageComponent } from './components/resume-page/resume-page.component';
import { MeComponent } from './components/me/me.component';
import { TitleComponent } from './components/title/title.component';
import { SummaryComponent } from './components/summary/summary.component';
import { EducationComponent } from './components/education/education.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { LanguageLevelComponent } from './components/language-level/language-level.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { DescriptionComponent } from './components/description/description.component';


@NgModule({
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    BrowserModule,    
  ],
  declarations: [
    DescriptionComponent,
    EducationComponent,
    ExperienceComponent,
    MeComponent,
    LanguagesComponent,
    LanguageLevelComponent,
    ResumePageComponent,    
    SkillsComponent,
    SummaryComponent,    
    TitleComponent,
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
