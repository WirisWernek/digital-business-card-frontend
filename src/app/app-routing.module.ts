import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';

const routes: Routes = [
	{
		path: 'social',
		component: ActionButtonsComponent,
		loadChildren: () => import('./modules/social/social.module').then((m) => m.SocialModule),
	},
	{
		path: 'project',
		component: ActionButtonsComponent,
		loadChildren: () =>
			import('./modules/projects/projects.module').then((m) => m.ProjectsModule),
	},
	{
		path: 'utility',
		component: ActionButtonsComponent,
		loadChildren: () => import('./modules/utility/utility.module').then((m) => m.UtilityModule),
	},
	{
		path: 'about',
		loadChildren: () => import('./modules/about/about.module').then((m) => m.AboutModule),
	},
	// {
	// 	path: 'updates',
	// 	component: ActionButtonsComponent,
	// 	loadChildren: () => import('./modules/updates/updates.module').then((m) => m.UpdatesModule),
	// },
	{
		path: '',
		component: ActionButtonsComponent,
		loadChildren: () => import('./modules/options/options.module').then((m) => m.OptionsModule),
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
