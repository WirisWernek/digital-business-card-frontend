import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../../models/Link.model';
import { ListLinksService } from '../../services/list-links.service';

@Component({
  selector: 'app-list-links',
  templateUrl: './list-links.component.html',
  styleUrls: ['./list-links.component.scss'],
})
export class ListLinksComponent implements OnInit {
  lisLinks: Array<LinkModel> = [];

  constructor(private listLinkService: ListLinksService) {}

  ngOnInit(): void {
    this.lisLinks = this.listLinkService.getAllLinks();
  }
}
