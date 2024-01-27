import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ListVideosModel } from '../models/list-videos.model';

@Injectable()
export class YoutubeStore {
	url: string;
	channelId: string;
	max_results: number;
	constructor(private http: HttpClient) {
		this.url = environment.API_URL + '/youtube';
		this.channelId = environment.YOUTUBE_CHANNEL_ID;
		this.max_results = environment.YOUTUBE_MAX_RESULTS;
	}

	getUltimosVideos() {
		return this.http.post<ListVideosModel>(`${this.url}/videos-recentes`, { idCanal: this.channelId, maxResults: this.max_results});
	}
}
