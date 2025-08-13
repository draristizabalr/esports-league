import { Component, input } from '@angular/core';

@Component({
  selector: 'about-section',
  imports: [],
  templateUrl: './about-section.component.html',
})
export class AboutSectionComponent {
  // Inputs
  message = input.required<string>();
  title = input<string>('');
  image = input<string>('');
  backgroundColor = input<string>('');
}
