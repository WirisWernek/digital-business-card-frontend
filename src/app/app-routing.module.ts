import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		title: 'Wiris Wernek',
		loadChildren: () => import('./cartao-de-visitas/cartao-de-visitas.module').then(m => m.CartaoDeVisitasModule)
	},	
	{ 	path: '**', 
		redirectTo: "" 
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
