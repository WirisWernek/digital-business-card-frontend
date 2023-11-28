import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListSocialLinksComponent } from './components/list-social-links/list-social-links.component';
import { SocialRoutingModule } from './social-routing.module';



@NgModule({
  declarations: [
	ListSocialLinksComponent
  ],
  imports: [
	SocialRoutingModule,
    CommonModule
  ]
})
export class SocialModule { }
