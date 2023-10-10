import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../../models/Link.model';
import { ListSocialLinksService } from '../../services/list-social-links.service';

@Component({
  selector: 'app-list-social-links',
  templateUrl: './list-social-links.component.html',
  styleUrls: ['./list-social-links.component.scss'],
})
export class ListSocialLinksComponent implements OnInit {
  listLinks: Array<LinkModel>;

  constructor(private listSocialLinkService: ListSocialLinksService) {
    this.listLinks = new Array<LinkModel>();
  }

  ngOnInit(): void {
    this.listLinks = this.listSocialLinkService.getAllLinks();
  }
}
