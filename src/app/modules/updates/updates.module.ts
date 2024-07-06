import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ArticleStore } from './stores/article.store';
import { GithubStore } from './stores/github.store';
import { YoutubeStore } from './stores/youtube.store';
import { UpdatesRoutingModule } from './updates-routing.module';
import { UpdatesComponent } from './views/updates/updates.component';


@NgModule({ declarations: [
        UpdatesComponent,
    ], imports: [CommonModule,
        UpdatesRoutingModule], providers: [
        YoutubeStore,
        ArticleStore,
        GithubStore,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class UpdatesModule { }
