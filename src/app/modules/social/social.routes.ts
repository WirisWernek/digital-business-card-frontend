import { Routes } from '@angular/router';

export const SOCIAL_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./components/list-social-links/list-social-links.component').then(
				(c) => c.ListSocialLinksComponent
			),
	},
];
