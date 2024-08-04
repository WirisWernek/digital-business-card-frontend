import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectModel } from 'src/app/models/Project.model';
import { ProjectsService } from '../../services/projects.service';

@Component({
	selector: 'app-list-project-links',
	templateUrl: './list-project-links.component.html',
	styleUrls: ['./list-project-links.component.scss'],
	standalone: true,
	imports: [RouterLink, AsyncPipe],
	providers: [ProjectsService],
})
export class ListProjectsLinksComponent implements OnInit {
	projects$!: Observable<ProjectModel[]>;

	constructor(private projectsService: ProjectsService) {}

	ngOnInit(): void {
		this.projects$ = this.projectsService.getProjects();
	}
}
