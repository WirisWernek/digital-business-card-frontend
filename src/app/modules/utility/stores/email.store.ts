import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailModel } from 'src/app/models/Email.model';
import { environment } from 'src/environments/environment';
import { AnotacaoStore } from './anotacao.store';
import { EmailRapidoStore } from './email-rapido.store';

@Injectable()
export class EmailStore {
	private base_url: string;

	constructor(
		private http: HttpClient,
		private anotacaoStore: AnotacaoStore,
		private emailRapidoStore: EmailRapidoStore
	) {
		this.base_url = environment.API_URL;
	}

	sendEmailRapido(email: EmailModel) {
		const emaiRapido = this.generateConteudoEmailRapido(email);
		this.emailRapidoStore.salvar(emaiRapido);
		this.send(emaiRapido);
	}

	sendNote(email: EmailModel) {
		const nota = this.generateConteudoNote(email);
		this.anotacaoStore.salvar(nota);
		this.send(nota);
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
