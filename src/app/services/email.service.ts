import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmailModel } from '../models/Email.model';

@Injectable({
   providedIn: 'root',
})
export class EmailService {
   private base_url: string;

   constructor(private http: HttpClient) {
      this.base_url = environment.API_URL;
   }

   sendEmailRapido(email: EmailModel) {
      this.send(this.generateConteudoEmailRapido(email));
   }

   sendNote(email: EmailModel) {
      this.send(this.generateConteudoNote(email));
   }

   private send(email: EmailModel) {
      this.http.post(this.base_url + '/email', email).subscribe((retorno) => {
         return retorno;
      });
   }

   private generateConteudoNote(email: EmailModel) {
      email.titulo = email.assunto;
      email.agradecimento = 'Agradecemos seu interesse em nossos serviços!';
      email.assunto = 'Nota By Digital Business Card';
      return email;
   }

   private generateConteudoEmailRapido(email: EmailModel) {
      email.titulo = email.assunto;
      email.agradecimento = 'Aguardamos ansiosos por vosso retorno!';
      email.assunto = 'Contato By Digital Business Card';
      return email;
   }
}
