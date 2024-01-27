import { Injectable, Injector } from '@angular/core';
import { NewsletterModel } from 'src/app/models/Newsletter.model';
import { BaseStore } from './abstract/base.store';

@Injectable()
export class SubscribeNewsletterStore extends BaseStore<NewsletterModel> {
	constructor(protected injectable: Injector) {
		super(injectable, 'newsletter', 'firebase');
	}
}
