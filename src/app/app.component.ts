import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Cartão de Visitas Virtual';
  typeVisible: string;

  constructor() {
    this.typeVisible = '1';
  }

  reciverResponse(response: string) {
    this.typeVisible = response;
  }
}
