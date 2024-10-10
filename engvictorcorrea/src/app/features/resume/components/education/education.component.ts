import { Component, Input } from '@angular/core';
import { EducationModel } from '../../interfaces/data-file';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  @Input() education: EducationModel | null = null;

  constructor() {}
}
