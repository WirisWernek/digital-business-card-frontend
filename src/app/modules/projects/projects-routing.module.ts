import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjectsLinksComponent } from './components/list-project-links/list-project-links.component';

const routes: Routes = [
	{
		path: "",
		component: ListProjectsLinksComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
