import { Injectable, Injector } from '@angular/core';
import { EmailModel } from 'src/app/models/Email.model';
import { BaseStore } from './abstract/base.store';

@Injectable()
export class EmailStore extends BaseStore<EmailModel>{

	constructor(protected injectable: Injector) {
		super(injectable, 'emails', 'email');
	}

	// send(email: EmailModel) {
	// 	console.log(JSON.stringify(email))
	// 	this.http.post(this.baseUrl, email).subscribe((retorno) => {
	// 		return retorno;
	// 	});
	// }
}
