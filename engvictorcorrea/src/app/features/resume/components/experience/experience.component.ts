import { Component, Input } from '@angular/core';
import { ExperienceModel } from '../../interfaces/data-file';

@Component({
  selector: 'app-experience',  
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @Input() experience: ExperienceModel | null = null;
}
