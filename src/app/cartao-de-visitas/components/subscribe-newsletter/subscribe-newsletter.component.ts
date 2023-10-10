import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-subscribe-newsletter',
  templateUrl: './subscribe-newsletter.component.html',
  styleUrls: ['./subscribe-newsletter.component.scss'],
})
export class SubscribeNewsletterComponent {
  constructor(public modalRef: BsModalRef) {}

  enviar() {
    console.log('Enviado Send Component');
  }

  cancelar() {
    console.log('Cancelar Send Component');
    this.modalRef.hide();
  }
}
