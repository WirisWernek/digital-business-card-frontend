import { Routes } from '@angular/router';

export const ABOUT_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./components/about/about.component').then((c) => c.AboutComponent),
	},
];
