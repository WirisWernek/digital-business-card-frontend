import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-send-notes',
  templateUrl: './send-notes.component.html',
  styleUrls: ['./send-notes.component.scss'],
})
export class SendNotesComponent {
  anotacaoForm!: FormGroup;

  constructor(public modalRef: BsModalRef) {
    this.anotacaoForm = new FormGroup({
      emailDestino: new FormControl(''),
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
