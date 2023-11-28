import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmailModel } from '../models/Email.model';
import { TemplateEmailContatoService } from './template-email-contato.service';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private base_url: string;

  constructor(private http: HttpClient, private templateEmailContatoService: TemplateEmailContatoService) {
	this.base_url = environment.API_URL;
  }

  send(email: EmailModel) {
    this.http.post(this.base_url + "/email", email).subscribe((retorno) => {
      return retorno;
    });
  }

  sendEmailRapido(email: EmailModel) {
    this.send(this.generateConteudoEmailRapido(email));
  }

  sendNote(email: EmailModel) {
    this.send(this.generateConteudoNote(email));
  }

  private generateConteudoNote(email: EmailModel) {
    const texto = this.templateEmailContatoService.getEmailContatoTemplate(email.assunto, email.conteudo, "Agradecemos seu interesse em nossos serviços!");
    email.conteudo = texto;
	email.assunto = "Nota By Digital Business Card"

    return email;
  }

  private generateConteudoEmailRapido(email: EmailModel) {
    const texto = this.templateEmailContatoService.getEmailContatoTemplate(email.assunto, email.conteudo, "Aguardamos ansiosos por vosso retorno!");
    email.conteudo = texto;
	email.assunto = "Contato By Digital Business Card"

    return email;
  }
}
