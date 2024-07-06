import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListProjectsLinksComponent } from './components/list-project-links/list-project-links.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsService } from './services/projects.service';



@NgModule({
  declarations: [
	ListProjectsLinksComponent
  ],
  imports: [
    CommonModule,
	ProjectsRoutingModule
  ],
  providers: [ProjectsService]
})
export class ProjectsModule { }
