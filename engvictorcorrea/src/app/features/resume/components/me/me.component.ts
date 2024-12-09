import { Component, Input } from '@angular/core';
import { MeModel } from '../../interfaces/data-file';

@Component({
  selector: 'app-header',
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss',
})
export class MeComponent {
  @Input() me: MeModel | null = null;

  constructor() {}
}
