import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EmailModel } from '../../models/Email.model';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-send-notes',
  templateUrl: './send-notes.component.html',
  styleUrls: ['./send-notes.component.scss'],
})
export class SendNotesComponent {
  defaultEmail!: string;
  noteForm!: FormGroup;

  emailDestinoValido: boolean;
  assuntoValido: boolean;
  conteudoValido: boolean;

  constructor(
    public modalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private emailService: EmailService
  ) {
    this.noteForm = this.formBuilder.group({
      emailDestino: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      assunto: ['', Validators.required],
      conteudo: ['', Validators.required],
    });

    this.emailDestinoValido = true;
    this.assuntoValido = true;
    this.conteudoValido = true;
  }

  enviar() {
    this.validate();
    if (this.emailDestinoValido && this.assuntoValido && this.conteudoValido) {
      const email = new EmailModel();
      email.emCopia = this.defaultEmail;
      email.remetente = this.defaultEmail;
      email.para = this.noteForm.get('emailDestino')?.value;
      email.assunto = this.noteForm.get('assunto')?.value;
      email.conteudo = this.noteForm.get('conteudo')?.value;

      this.emailService.sendNote(email);
      this.modalRef.hide();
    } else {
      alert('Há campos obrigatórios que não foram preenchidos!');
    }
  }

  cancelar() {
    this.modalRef.hide();
  }

  validate() {
    this.validateEmailDestino();
    this.validateAssunto();
    this.validateConteudo();
  }

  validateEmailDestino() {
    this.emailDestinoValido = false;

    this.emailDestinoValido =
      this.noteForm.controls['emailDestino'].touched && (!!this.noteForm.controls['emailDestino'].errors === false);

    if (this.noteForm.get('emailDestino')?.value.trim() === '') {
      this.emailDestinoValido = false;
    }
  }

  validateAssunto() {
    this.assuntoValido =
      this.noteForm.controls['assunto'].touched && (!!this.noteForm.controls['assunto'].errors === false);

    if (this.noteForm.get('assunto')?.value.trim() === '') {
      this.assuntoValido = false;
    }
  }

  validateConteudo() {
    this.conteudoValido =
      this.noteForm.controls['conteudo'].touched && (!!this.noteForm.controls['conteudo'].errors === false);

    if (this.noteForm.get('conteudo')?.value.trim() === '') {
      this.conteudoValido = false;
    }
  }
}
