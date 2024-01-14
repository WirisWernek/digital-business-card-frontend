import { Injectable, Injector } from '@angular/core';
import { EmailModel } from 'src/app/models/Email.model';
import { FirebaseIndexedDBAbstract } from './abstract/firebase-indexedb.abstract';


@Injectable()
export class AnotacaoStore extends FirebaseIndexedDBAbstract<EmailModel> {
	constructor(protected injectable: Injector) {
		super(injectable, 'anotacoes');
	}
}
