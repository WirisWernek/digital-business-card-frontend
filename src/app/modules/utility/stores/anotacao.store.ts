import { Injectable, Injector } from '@angular/core';
import { EmailModel } from 'src/app/models/Email.model';
import { BaseStore } from './abstract/base.store';

@Injectable()
export class AnotacaoStore extends BaseStore<EmailModel>{

	constructor(protected injectable: Injector) {
		super(injectable, 'anotacoes', 'email');
	}

	// send(email: EmailModel) {
	// 	this.http.post(this.baseUrl, email).subscribe((retorno) => {
	// 		return retorno;
	// 	});
	// }
}
