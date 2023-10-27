import { Injectable, Injector } from '@angular/core';
import { ReviewModel } from '../models/Review.model';
import { BaseIndexdbFirebaseService } from './base-indexdb-firebase.service';

@Injectable({
  providedIn: 'root',
})
export class SendReviewService extends BaseIndexdbFirebaseService<ReviewModel> {
  constructor(protected injectable: Injector) {
    super(injectable, 'reviews');
  }
}
