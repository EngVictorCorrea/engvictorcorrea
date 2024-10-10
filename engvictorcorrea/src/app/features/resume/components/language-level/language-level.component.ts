import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-language-level',
  templateUrl: './language-level.component.html',
  styleUrls: ['./language-level.component.scss']
})
export class LanguageLevelComponent {
  @Input() language: string = '';
  @Input() level: number = 0;
  @Input() levelsDescription = ['Does not know', 'Basic', 'Intermediate', 'Advanced', 'Fluent', 'Native'];

  getDots() {
    return new Array(5).fill(0).map((_, i) => i < this.level);
  }

  getLevelDescription() {
    return this.levelsDescription[this.level];
  }
  
}
