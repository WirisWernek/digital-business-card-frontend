import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'social',
    loadChildren: () => import('./modules/social/social.module').then( m => m.SocialModule),
  },
  {
    path: 'project',
    loadChildren: () => import('./modules/projects/projects.module').then( m => m.ProjectsModule),
  },
  {
    path: 'utility',
    loadChildren: () => import('./modules/utility/utility.module').then( m => m.UtilityModule),
  },
  {
	path: '',
	loadChildren: () => import('./modules/options/options.module').then( m => m.OptionsModule),
  },
  {
	path: '**',
	pathMatch: 'full',
	redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
