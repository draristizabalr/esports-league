import { Component, input } from '@angular/core';

@Component({
  selector: 'esport-card',
  imports: [],
  templateUrl: './esport-card.component.html',
})
export class EsportCardComponent {
  name = input.required<string>();
  image = input.required<string>();
  description = input.required<string>();
}
