import { Component } from '@angular/core';

@Component({
  selector: 'app-cartao-de-visitas',
  templateUrl: './cartao-de-visitas.component.html',
  styleUrls: ['./cartao-de-visitas.component.scss'],
})
export class CartaoDeVisitasComponent {
  typeVisible = '1';

  reciverResponse(response: string) {
    this.typeVisible = response;
  }
}
