import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleModel } from '../../models/article.model';
import { ListVideosModel } from '../../models/list-videos.model';
import { ArticleStore } from '../../stores/article.store';
import { YoutubeStore } from '../../stores/youtube.store';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent {
	videos$: Observable<ListVideosModel>; 
	artigos$: Observable<ArticleModel[]>; 

	constructor(private youtubeStore: YoutubeStore, private articlesStore: ArticleStore){
		this.videos$ = this.youtubeStore.getUltimosVideos();
		this.artigos$ = this.articlesStore.getUltimosArtigos();
	}


}
