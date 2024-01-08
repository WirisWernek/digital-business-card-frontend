import { Component, OnInit } from '@angular/core';
import { ContactLinksService } from 'src/app/shared/services/contact-links.service';
import { ContactLinkModel } from '../../models/ContactLink.model';


@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
})
export class ActionButtonsComponent implements OnInit {
  contactLinks: ContactLinkModel = new ContactLinkModel();

  constructor(
    private contactLinkService: ContactLinksService
  ) {}

  ngOnInit(): void {
    this.contactLinks = this.contactLinkService.getAllContactLinks();
  }

  changeContactLink(idStyle: string) {
    switch (idStyle) {
      case 'whatsapp':
        return this.contactLinks.whatsapp;
      case 'email':
        return this.contactLinks.email;
      case 'telefone':
        return this.contactLinks.telefone;
      case 'download':
        return this.contactLinks.download;
      case 'localizacao':
        return this.contactLinks.localizacao;
      default:
        return '';
    }
  }
}
