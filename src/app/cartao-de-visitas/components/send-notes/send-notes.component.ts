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

  constructor(
    public modalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private emailService: EmailService
  ) {
    this.noteForm = this.formBuilder.group({
      emailDestino: ['', Validators.required],
      assunto: ['', Validators.required],
      conteudo: ['', Validators.required],
    });
  }

  enviar() {
    const email = new EmailModel();
	email.emCopia = this.defaultEmail;
	email.remetente = this.defaultEmail;
    email.para = this.noteForm.get('emailDestino')?.value;
    email.assunto = this.noteForm.get('assunto')?.value;
    email.conteudo = this.noteForm.get('conteudo')?.value;

    this.emailService.sendNote(email);
	this.modalRef.hide();
  }

  cancelar() {
    this.modalRef.hide();
  }
}
