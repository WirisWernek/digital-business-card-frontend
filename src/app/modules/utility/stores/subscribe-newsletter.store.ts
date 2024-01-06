import { Injectable, Injector } from '@angular/core';
import { NewsletterModel } from 'src/app/models/Newsletter.model';
import { BaseIndexdbFirebaseService } from 'src/app/services/base-indexdb-firebase.service';

@Injectable()
export class SubscribeNewsletterStore extends BaseIndexdbFirebaseService<NewsletterModel> {
	constructor(protected injectable: Injector) {
		super(injectable, 'newsletter');
	}
}
