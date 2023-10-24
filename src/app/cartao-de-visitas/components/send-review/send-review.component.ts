import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ReviewModel } from '../../models/Review.model';
import { SendReviewService } from '../../services/send-review.service';

@Component({
  selector: 'app-send-review',
  templateUrl: './send-review.component.html',
  styleUrls: ['./send-review.component.scss'],
})
export class SendReviewComponent {
  reviewForm!: FormGroup;

  constructor(
    public modalRef: BsModalRef,
    private sendReviewService: SendReviewService
  ) {
    this.reviewForm = new FormGroup({
      avaliacao: new FormControl(0),
      comentario: new FormControl(''),
    });
  }

  enviar() {
    const review = new ReviewModel();

    const avaliacao = this.reviewForm.get('avaliacao')?.value;
    const comentario = this.reviewForm.get('comentario')?.value;

    review.build( avaliacao, comentario);

    this.sendReviewService.salvar(review);
    console.log('Enviado Send Component');
  }

  cancelar() {
    console.log('Cancelar Send Component');
    this.modalRef.hide();
  }
}
