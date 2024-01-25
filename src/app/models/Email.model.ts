import { BaseModelService } from './base/BaseModelService';
import { EmailData } from './data/email.data';

export class EmailModel extends BaseModelService {
	collection!: string;
	data!: EmailData;

	constructor() {
		super();
		this.collection = '';
		this.data = new EmailData();
	}

	build(
		collection: string,
		conteudo: string,
		assunto: string,
		para: string,
		remetente: string,
		emCopia: string,
		titulo: string,
		agradecimento: string
	) {
		this.collection = collection;
		this.data.conteudo = conteudo;
		this.data.assunto = assunto;
		this.data.para = para;
		this.data.remetente = remetente;
		this.data.emCopia = emCopia;
		this.data.titulo = titulo;
		this.data.agradecimento = agradecimento;
		return this;
	}
}
