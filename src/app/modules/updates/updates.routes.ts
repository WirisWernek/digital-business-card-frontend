import { Routes } from '@angular/router';

export const UPDATES_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./views/updates/updates.component').then((c) => c.UpdatesComponent),
	},
];
