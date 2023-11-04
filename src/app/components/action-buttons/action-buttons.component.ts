import { Component, OnInit } from '@angular/core';
import { ActionButtonModel } from '../../models/ActionButton.model';
import { ContactLinkModel } from '../../models/ContactLink.model';
import { ActionButtonsService } from '../../services/action-buttons.service';
import { ContactLinksService } from '../../services/contact-links.service';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
})
export class ActionButtonsComponent implements OnInit {
  actionsButtons: Array<ActionButtonModel> = [];
  contactLinks: ContactLinkModel = new ContactLinkModel();

  constructor(
    private actionButtonService: ActionButtonsService,
    private contactLinkService: ContactLinksService
  ) {}

  ngOnInit(): void {
    this.actionsButtons = this.actionButtonService.getAllActionsButtons();
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
