import { Injectable, Injector } from '@angular/core';
import { ReviewModel } from 'src/app/models/Review.model';
import { FirebaseIndexedDBAbstract } from './abstract/firebase-indexedb.abstract';

@Injectable()
export class SendReviewStore extends FirebaseIndexedDBAbstract<ReviewModel> {
	constructor(protected injectable: Injector) {
		super(injectable, 'reviews');
	}
}
