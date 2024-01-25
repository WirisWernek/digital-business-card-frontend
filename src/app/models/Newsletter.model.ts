import { BaseModelService } from './base/BaseModelService';
import { NewsletterData } from './data/newsletter.data';

export class NewsletterModel extends BaseModelService {
	collection!: string;
	data!: NewsletterData;

	constructor(){
		super();
		this.collection = 'newsletter';
		this.data = new NewsletterData();
	}

	build(nome: string, email: string) {
		this.data.nome = nome;
		this.data.email = email;
	}
}
