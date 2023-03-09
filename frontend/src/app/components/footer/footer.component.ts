import { infoConstants } from './../../../constants/info.constants';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentDate: Date = new Date();

  info = infoConstants;
}