import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsletterModel } from '../models/Newsletter.model';
import { BaseIndexDBService } from './base-index-db.service';

@Injectable({
  providedIn: 'root'
})
export class SubscribeNewsletterService extends BaseIndexDBService<NewsletterModel> {

  constructor(protected injectable: Injector) { 
	super(injectable, 'newsletter', environment.API_URL + '')
  }
}
