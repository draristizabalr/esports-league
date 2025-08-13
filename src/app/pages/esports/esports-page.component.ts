import { Component } from '@angular/core';
import { EsportCardComponent } from "./components/esport-card/esport-card.component";
import { esports } from './constants/esports.constant';

@Component({
  selector: 'app-esports-page',
  imports: [EsportCardComponent],
  templateUrl: './esports-page.component.html',
})
export default class EsportsPageComponent {
  // Properties
  esports = esports;
}
