import { Injectable, Injector } from '@angular/core';
import { NewsletterModel } from 'src/app/models/Newsletter.model';
import { FirebaseIndexedDBAbstract } from './abstract/firebase-indexedb.abstract';

@Injectable()
export class SubscribeNewsletterStore extends FirebaseIndexedDBAbstract<NewsletterModel> {
	constructor(protected injectable: Injector) {
		super(injectable, 'newsletter');
	}
}
