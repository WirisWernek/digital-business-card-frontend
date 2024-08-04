import { Routes } from '@angular/router';

export const UTILITY_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./components/optional-buttons/optional-buttons.component').then(
				(c) => c.OptionalButtonsComponent
			),
	},
];
