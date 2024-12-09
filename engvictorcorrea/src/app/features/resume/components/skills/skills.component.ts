import { Component, Input } from '@angular/core';
import { SkillsModel } from '../../interfaces/data-file';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  @Input() skills: SkillsModel | null = null;
}
