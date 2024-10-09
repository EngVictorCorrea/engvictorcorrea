import { Component, Input, input } from '@angular/core';
import { SummaryModel } from '../../interfaces/data-file';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  @Input() summary: SummaryModel | null = null;

  constructor(){};  
}
