import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataFileModel } from '../../interfaces/data-file';


@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.scss'
})
export class ResumePageComponent {
  dataFile: DataFileModel | null= null;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {    
    this.loadResumeData('pt-br');
  }

  loadResumeData(lang: string): void {
    this.http.get<DataFileModel>(`assets/data/${lang}.json`).subscribe(data => {    
      this.dataFile = data;
    });
  }

  changeLanguage(lang: string): void {
    this.loadResumeData(lang);
  }
}
