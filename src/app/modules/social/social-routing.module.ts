import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSocialLinksComponent } from './components/list-social-links/list-social-links.component';

const routes: Routes = [
	{
		path: "",
		component: ListSocialLinksComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule { }
