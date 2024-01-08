import { Injectable } from '@angular/core';
import { ContactLinkModel } from 'src/app/models/ContactLink.model';


@Injectable({
	providedIn: 'root',
})
export class ContactLinksService {
	PHONE_NUMBER = '';
	WHATSAPP_NUMBER = '';
	EMAIL = '';
	DOWNLOAD = '';
	MESSAGE_DEFAULT = '';

	contactLink: ContactLinkModel;

	constructor() {
		this.contactLink = new ContactLinkModel();
	}

	getAllContactLinks() {
		this.EMAIL = 'wiriswernek@gmail.com';
		this.PHONE_NUMBER = '+5528999814672';
		this.WHATSAPP_NUMBER = '5528999814672';
		this.DOWNLOAD = '../../../assets/files/cartao-de-visitas-interativo.pdf';
		this.MESSAGE_DEFAULT =
			'Olá Wiris, estou entrando em contato pelo seu Cartão de Visita Virtual e gostaria de conhecer mais do seu trabalho, podemos conversar sobre?';

		this.loadLinks();

		return this.contactLink;
	}

	loadLinks() {
		this.carregarLinkWhatsApp();
		this.carregarLinkEmail();
		this.carregarLinkTelefone();
		this.carregarLinkDownload();
	}

	carregarLinkWhatsApp() {
		const userAgent = window.navigator.userAgent;

		if (
			userAgent.includes('iPhone') ||
			userAgent.includes('Android') ||
			userAgent.includes('webOS') ||
			userAgent.includes('BlackBerry') ||
			userAgent.includes('iPod')
		) {
			this.contactLink.whatsapp =
				'whatsapp://send?phone=' + this.WHATSAPP_NUMBER + '&text=' + this.MESSAGE_DEFAULT;
		} else {
			this.contactLink.whatsapp =
				'https://web.whatsapp.com/send?phone=' +
				this.WHATSAPP_NUMBER +
				'&text=' +
				this.MESSAGE_DEFAULT;
		}
	}

	carregarLinkEmail() {
		this.contactLink.email =
			'mailto:' + this.EMAIL + '?Subject=Contato%20by%20Digital%20Visit%20Card';
	}

	carregarLinkTelefone() {
		this.contactLink.telefone = 'tel:' + this.PHONE_NUMBER;
	}

	carregarLinkDownload() {
		this.contactLink.download = this.DOWNLOAD;
	}
}
