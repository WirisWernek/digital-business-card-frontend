import { Component, inject } from '@angular/core';
import { Analytics } from '@angular/fire/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Cartão de Visitas Virtual';
  typeVisible: string;
  private analytics: Analytics = inject(Analytics);

  constructor() {
    this.typeVisible = '1';
  }

  reciverResponse(response: string) {
    this.typeVisible = response;
  }
}
