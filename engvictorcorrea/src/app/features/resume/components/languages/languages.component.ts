import { Component, Input } from '@angular/core';
import { LanguagesModel } from '../../interfaces/data-file';

@Component({
  selector: 'app-languages',  
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {
  @Input() languages : LanguagesModel | null = null;


}

