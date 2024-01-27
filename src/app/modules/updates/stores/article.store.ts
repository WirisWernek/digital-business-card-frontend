import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArticleModel } from '../models/article.model';

@Injectable()
export class ArticleStore {
	
	url: string;
	username: string;
	max_results: number;
	constructor(private http: HttpClient) {
		this.url = environment.API_URL + '/devto';
		this.username = environment.DEV_TO_USERNAME;
		this.max_results = environment.DEV_TO_MAX_RESULTS;
	}

	getUltimosArtigos() {
		return this.http.post<ArticleModel[]>(`${this.url}/articles`, { username: this.username, per_page: this.max_results});
	}
}
