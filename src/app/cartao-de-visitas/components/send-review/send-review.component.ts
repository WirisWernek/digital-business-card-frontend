import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-send-review',
  templateUrl: './send-review.component.html',
  styleUrls: ['./send-review.component.scss'],
})
export class SendReviewComponent {
  reviewForm!: FormGroup;

  constructor(public modalRef: BsModalRef) {
    this.reviewForm = new FormGroup({
      avaliacao: new FormControl(0),
      comentario: new FormControl(''),
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
