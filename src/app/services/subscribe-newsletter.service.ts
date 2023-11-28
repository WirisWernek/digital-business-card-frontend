import { Injectable, Injector } from '@angular/core';
import { NewsletterModel } from '../models/Newsletter.model';
import { BaseIndexdbFirebaseService } from './base-indexdb-firebase.service';

@Injectable({
  providedIn: 'root',
})
export class SubscribeNewsletterService extends BaseIndexdbFirebaseService<NewsletterModel> {
  constructor(protected injectable: Injector) {
    super(injectable, 'newsletter');
  }
}
