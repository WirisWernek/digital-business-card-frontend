import { Injectable, Injector } from '@angular/core';
import { EmailModel } from '../models/Email.model';
import { BaseIndexdbFirebaseService } from './base-indexdb-firebase.service';

@Injectable({
	providedIn: 'root',
})
export class EmailRapidoService extends BaseIndexdbFirebaseService<EmailModel> {
	constructor(protected injectable: Injector) {
		super(injectable, 'emails');
	}
}
