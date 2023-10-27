import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReviewModel } from '../models/Review.model';
import { BaseIndexDBService } from './base-index-db.service';

@Injectable({
  providedIn: 'root',
})
export class SendReviewService extends BaseIndexDBService<ReviewModel> {

  constructor(protected injectable: Injector) {
    super(injectable, 'reviews', environment.API_URL + '');
  }
}