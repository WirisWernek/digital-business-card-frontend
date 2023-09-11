import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'home',
		title: 'Wiris Wernek',
		loadChildren: () => import('./cartao-de-visitas/cartao-de-visitas.module').then(m => m.CartaoDeVisitasModule)
	},	
	{ 	path: '**', 
		redirectTo: "home" 
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
