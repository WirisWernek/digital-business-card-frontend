import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EmailModel } from 'src/app/models/Email.model';
import { EmailService } from 'src/app/services/email.service';
import { ToastrCustomizedService } from 'src/app/services/toastr-customized.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
})
export class SendEmailComponent {
  defaultEmail!: string;
  emailForm!: FormGroup;

  emailCopiaValido: boolean;
  assuntoValido: boolean;
  conteudoValido: boolean;

  constructor(
    public modalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private emailService: EmailService,
    private toastrCustomizedService: ToastrCustomizedService
  ) {
    this.emailForm = this.formBuilder.group({
      emailCopia: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      assunto: ['', Validators.required],
      conteudo: ['', Validators.required],
    });

    this.emailCopiaValido = true;
    this.assuntoValido = true;
    this.conteudoValido = true;
  }

  enviar() {
    this.validate();
    if (this.emailCopiaValido && this.assuntoValido && this.conteudoValido) {
      const email = new EmailModel();
      email.para = this.defaultEmail;
      email.remetente = this.emailForm.get('emailCopia')?.value;
      email.emCopia = this.emailForm.get('emailCopia')?.value;
      email.assunto = this.emailForm.get('assunto')?.value;
      email.conteudo = this.emailForm.get('conteudo')?.value;

      this.emailService.sendEmailRapido(email);
      this.toastrCustomizedService.sucesso('Email enviado com sucesso');
      this.modalRef.hide();
    } else {
      alert('Há campos obrigatórios que não foram preenchidos!');
    }
  }

  cancelar() {
    this.modalRef.hide();
  }

  validate() {
    this.validateEmailCopia();
    this.validateAssunto();
    this.validateConteudo();
  }

  validateEmailCopia() {
    this.emailCopiaValido = false;

    this.emailCopiaValido =
      this.emailForm.controls['emailCopia'].touched &&
      !!this.emailForm.controls['emailCopia'].errors === false;

    if (this.emailForm.get('emailCopia')?.value.trim() === '') {
      this.emailCopiaValido = false;
    }
  }

  validateAssunto() {
    this.assuntoValido =
      this.emailForm.controls['assunto'].touched &&
      !!this.emailForm.controls['assunto'].errors === false;

    if (this.emailForm.get('assunto')?.value.trim() === '') {
      this.assuntoValido = false;
    }
  }

  validateConteudo() {
    this.conteudoValido =
      this.emailForm.controls['conteudo'].touched &&
      !!this.emailForm.controls['conteudo'].errors === false;

    if (this.emailForm.get('conteudo')?.value.trim() === '') {
      this.conteudoValido = false;
    }
  }
}
