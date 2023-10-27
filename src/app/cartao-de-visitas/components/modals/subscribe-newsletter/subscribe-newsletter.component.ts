import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NewsletterModel } from 'src/app/cartao-de-visitas/models/Newsletter.model';
import { SubscribeNewsletterService } from 'src/app/cartao-de-visitas/services/subscribe-newsletter.service';


@Component({
  selector: 'app-subscribe-newsletter',
  templateUrl: './subscribe-newsletter.component.html',
  styleUrls: ['./subscribe-newsletter.component.scss'],
})
export class SubscribeNewsletterComponent {
  newsletterForm!: FormGroup;
  emailValido: boolean;

  constructor(
    public modalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private newsletterService: SubscribeNewsletterService
  ) {
    this.newsletterForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
    });

    this.emailValido = true;
  }

  enviar() {
    this.validate();

    if (this.emailValido) {
      const newsletter = new NewsletterModel();
      const email = this.newsletterForm.get('email')?.value;
      newsletter.build(email);
      this.newsletterService.salvar(newsletter);
      this.modalRef.hide();
    } else {
      alert('Há campos obrigatórios que não foram preenchidos!');
    }
  }

  cancelar() {
    this.modalRef.hide();
  }

  validate() {
    this.emailValido =
      this.newsletterForm.controls['email'].touched && (!!this.newsletterForm.controls['email'].errors === false);

    if (this.newsletterForm.get('email')?.value.trim() === '') {
      this.emailValido = false;
    }
  }
}