import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ReviewModel } from 'src/app/models/Review.model';
import { SendReviewService } from 'src/app/services/send-review.service';


@Component({
  selector: 'app-send-review',
  templateUrl: './send-review.component.html',
  styleUrls: ['./send-review.component.scss'],
})
export class SendReviewComponent {
  reviewForm!: FormGroup;
  avaliacaoValida: boolean;

  constructor(
    public modalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private sendReviewService: SendReviewService
  ) {
    this.reviewForm = this.formBuilder.group({
      avaliacao: [0, Validators.required],
      comentario: [''],
    });

    this.avaliacaoValida = true;
  }

  enviar() {
    this.validate();
    if (this.avaliacaoValida) {
      const review = new ReviewModel();

      const avaliacao = this.reviewForm.get('avaliacao')?.value;
      const comentario = this.reviewForm.get('comentario')?.value;

      review.build(avaliacao, comentario);

      this.sendReviewService.salvar(review);
      this.modalRef.hide();
    } else {
      alert('Há campos obrigatórios que não foram preenchidos!');
    }
  }

  cancelar() {
    this.modalRef.hide();
  }

  validate() {
    this.avaliacaoValida = false;

    this.avaliacaoValida = (!!this.reviewForm.controls['avaliacao'].errors === false);

    if (
      this.reviewForm.get('avaliacao')?.value >= 1 &&
      this.reviewForm.get('avaliacao')?.value <= 5
    ) {
      this.avaliacaoValida = true;
    } else {
      this.avaliacaoValida = false;
    }
  }
}
