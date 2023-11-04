import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../../models/Link.model';
import { ListProjectsLinksService } from '../../services/list-projects-links.service';

@Component({
  selector: 'app-list-project-links',
  templateUrl: './list-project-links.component.html',
  styleUrls: ['./list-project-links.component.scss'],
})
export class ListProjectsLinksComponent implements OnInit{
  listLinks: Array<LinkModel>;

  constructor(
    private listProjectsLinksService: ListProjectsLinksService
  ) {
    this.listLinks = new Array<LinkModel>();
  }

  ngOnInit(): void {
    this.listLinks = this.listProjectsLinksService.getAllLinks();
  }

}
