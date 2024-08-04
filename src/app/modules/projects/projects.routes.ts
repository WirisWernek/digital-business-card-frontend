import { Routes } from '@angular/router';

export const PROJECTS_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./components/list-project-links/list-project-links.component').then(
				(c) => c.ListProjectsLinksComponent
			),
	},
];
