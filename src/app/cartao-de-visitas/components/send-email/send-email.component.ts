import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
})
export class SendEmailComponent {

  constructor(public modalRef: BsModalRef) {}

  enviar(){
	console.log("Enviado Send Component");
  }

  cancelar(){
	console.log("Cancelar Send Component");
	this.modalRef.hide();
  }
}
