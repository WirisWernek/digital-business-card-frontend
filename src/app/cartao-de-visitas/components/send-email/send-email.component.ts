import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EmailModel } from '../../models/EmailModel.model';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
})
export class SendEmailComponent {
  defaultEmail!: string;
  emailForm!: FormGroup;

  constructor(
    public modalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private emailService: EmailService
  ) {
    this.emailForm = this.formBuilder.group({
      emailCopia: ['', Validators.required],
      assunto: ['', Validators.required],
      conteudo: ['', Validators.required],
    });
  }

  enviar() {
    const email = new EmailModel();
    email.para = this.defaultEmail;
	email.remetente = this.emailForm.get('emailCopia')?.value;
	email.emCopia = this.emailForm.get('emailCopia')?.value;
    email.assunto = this.emailForm.get('assunto')?.value;
    email.conteudo = this.emailForm.get('conteudo')?.value;
    
	this.emailService.sendEmailRapido(email);
	this.modalRef.hide();
  }

  cancelar() {
    this.modalRef.hide();
  }
}
