import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
})
export class SendEmailComponent {
  emailForm!: FormGroup;

  constructor(public modalRef: BsModalRef) {
    this.emailForm = new FormGroup({
      emailCopia: new FormControl(''),
      assunto: new FormControl(''),
      conteudo: new FormControl(''),
    });
  }

  enviar() {
    console.log('Enviado Send Component');
  }

  cancelar() {
    console.log('Cancelar Send Component');
    this.modalRef.hide();
  }
}
