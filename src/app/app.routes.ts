import { Routes } from '@angular/router';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';

export const routes: Routes = [
	{
		path: 'social',
		component: ActionButtonsComponent,
		loadChildren: () => import('./modules/social/social.routes').then((r) => r.SOCIAL_ROUTES),
	},
	{
		path: 'project',
		component: ActionButtonsComponent,
		loadChildren: () =>
			import('./modules/projects/projects.routes').then((r) => r.PROJECTS_ROUTES),
	},
	{
		path: 'utility',
		component: ActionButtonsComponent,
		loadChildren: () =>
			import('./modules/utility/utility.routes').then((r) => r.UTILITY_ROUTES),
	},
	{
		path: 'about',
		loadChildren: () => import('./modules/about/about.routes').then((r) => r.ABOUT_ROUTES),
	},
	{
		path: 'updates',
		component: ActionButtonsComponent,
		loadChildren: () =>
			import('./modules/updates/updates.routes').then((r) => r.UPDATES_ROUTES),
	},
	{
		path: '',
		component: ActionButtonsComponent,
		loadChildren: () =>
			import('./modules/options/options.routes').then((r) => r.OPTIONS_ROUTES),
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: '',
	},
];
