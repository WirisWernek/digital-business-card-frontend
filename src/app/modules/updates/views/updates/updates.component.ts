import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ArticleModel } from '../../models/article.model';
import { GithubEventModel } from '../../models/github-event.model';
import { ListVideosModel } from '../../models/list-videos.model';
import { ArticleStore } from '../../stores/article.store';
import { YoutubeStore } from '../../stores/youtube.store';
import { GithubStore } from './../../stores/github.store';

@Component({
	selector: 'app-updates',
	templateUrl: './updates.component.html',
	styleUrls: ['./updates.component.scss'],
})
export class UpdatesComponent {
	videos$!: Observable<ListVideosModel>;
	artigos$!: Observable<ArticleModel[]>;
	githubEvents$!: Observable<GithubEventModel[]>;

	constructor(
		private youtubeStore: YoutubeStore,
		private articlesStore: ArticleStore,
		private githubStore: GithubStore
	) {}

	ngOnInit() {
		this.videos$ = this.youtubeStore.getUltimosVideos();
		this.artigos$ = this.articlesStore.getUltimosArtigos();
		this.githubEvents$ = this.githubStore
			.getUltimosEventos()
			.pipe(map((eventos) => eventos.filter((evento) => evento.type === 'PushEvent')))
			.pipe(map((eventos) => eventos.slice(0, 5)));
	}
}
