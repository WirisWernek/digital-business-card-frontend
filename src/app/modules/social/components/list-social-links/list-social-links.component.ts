import { Component, OnInit } from '@angular/core';
import { ContactLinkModel } from 'src/app/models/ContactLink.model';
import { ContactLinksService } from 'src/app/shared/services/contact-links.service';

@Component({
	selector: 'app-list-social-links',
	templateUrl: './list-social-links.component.html',
	styleUrls: ['./list-social-links.component.scss'],
})
export class ListSocialLinksComponent implements OnInit {
	contactLinks: ContactLinkModel = new ContactLinkModel();

	constructor(private contactLinkService: ContactLinksService) {}

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
			case 'curriculo':
				return this.contactLinks.curriculo;
			case 'localizacao':
				return this.contactLinks.localizacao;
			default:
				return '';
		}
	}
}
