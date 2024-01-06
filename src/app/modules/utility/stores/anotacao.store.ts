import { Injectable, Injector } from '@angular/core';
import { EmailModel } from 'src/app/models/Email.model';
import { BaseIndexdbFirebaseService } from 'src/app/services/base-indexdb-firebase.service';

@Injectable()
export class AnotacaoStore extends BaseIndexdbFirebaseService<EmailModel> {
	constructor(protected injectable: Injector) {
		super(injectable, 'anotacoes');
	}
}
