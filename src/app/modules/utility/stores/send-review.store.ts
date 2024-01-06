import { Injectable, Injector } from '@angular/core';
import { ReviewModel } from 'src/app/models/Review.model';
import { BaseIndexdbFirebaseService } from 'src/app/services/base-indexdb-firebase.service';

@Injectable()
export class SendReviewStore extends BaseIndexdbFirebaseService<ReviewModel> {
	constructor(protected injectable: Injector) {
		super(injectable, 'reviews');
	}
}
