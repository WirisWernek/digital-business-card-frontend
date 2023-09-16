import { Component } from '@angular/core';

@Component({
  selector: 'app-cartao-de-visitas',
  templateUrl: './cartao-de-visitas.component.html',
  styleUrls: ['./cartao-de-visitas.component.scss'],
})
export class CartaoDeVisitasComponent {
  typeVisible: string = '1';
  reciverResponse(response: string) {
    console.log('Foi emitido e evento e chegou ao componente pai os dados >>>> {}', response);
    this.typeVisible = response;
  }
}
