import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ArticleStore } from './stores/article.store';
import { YoutubeStore } from './stores/youtube.store';
import { UpdatesRoutingModule } from './updates-routing.module';
import { UpdatesComponent } from './views/updates/updates.component';


@NgModule({
  declarations: [
    UpdatesComponent,
  ],
  imports: [
    CommonModule,
    UpdatesRoutingModule,
	HttpClientModule
  ],
  providers:[
	YoutubeStore,
	ArticleStore
  ]
})
export class UpdatesModule { }
