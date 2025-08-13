import { Component, signal } from '@angular/core';
import { AboutSectionComponent } from "./components/about-section/about-section.component";
import { aboutSections } from './constants/about-sections.constants';

@Component({
  selector: 'app-about-page',
  imports: [AboutSectionComponent],
  templateUrl: './about-page.component.html',
})
export default class AboutPageComponent {
  // Properties
  aboutSections = aboutSections;
}
