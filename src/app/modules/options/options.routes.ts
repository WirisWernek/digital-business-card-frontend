import { Routes } from '@angular/router';

export const OPTIONS_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./components/options/options.component').then((c) => c.OptionsComponent),
	},
];
