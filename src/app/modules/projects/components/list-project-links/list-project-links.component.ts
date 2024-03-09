import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectModel } from 'src/app/models/Project.model';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-list-project-links',
  templateUrl: './list-project-links.component.html',
  styleUrls: ['./list-project-links.component.scss'],
})
export class ListProjectsLinksComponent {
	projects$!: Observable<ProjectModel[]>;
	
	constructor(private projectsService: ProjectsService) {}

	ngOnInit(): void {
		this.projects$ = this.projectsService.getProjects();
	}

}
