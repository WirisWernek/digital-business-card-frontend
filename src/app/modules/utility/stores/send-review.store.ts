import { Injectable, Injector } from '@angular/core';
import { ReviewModel } from 'src/app/models/Review.model';
import { BaseStore } from './abstract/base.store';

@Injectable()
export class SendReviewStore extends BaseStore<ReviewModel> {
	constructor(protected injectable: Injector) {
		super(injectable, 'reviews', 'firebase');
	}
}
