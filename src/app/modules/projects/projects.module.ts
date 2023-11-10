import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListProjectsLinksComponent } from './components/list-project-links/list-project-links.component';
import { ProjectsRoutingModule } from './projects-routing.module';



@NgModule({
  declarations: [
	ListProjectsLinksComponent
  ],
  imports: [
    CommonModule,
	ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
