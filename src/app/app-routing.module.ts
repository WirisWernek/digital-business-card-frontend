import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjectsLinksComponent } from './components/list-project-links/list-project-links.component';
import { ListSocialLinksComponent } from './components/list-social-links/list-social-links.component';
import { OptionalButtonsComponent } from './components/optional-buttons/optional-buttons.component';
import { OptionsComponent } from './components/options/options.component';

const routes: Routes = [
  {
    path: 'social',
    component: ListSocialLinksComponent,
  },
  {
    path: 'project',
    component: ListProjectsLinksComponent,
  },
  {
    path: 'utility',
    component: OptionalButtonsComponent,
  },
  {
	path: '',
	component: OptionsComponent
  },
  {
	path: '**',
	pathMatch: 'full',
	redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
