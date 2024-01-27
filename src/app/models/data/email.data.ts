
export class EmailData {
	para: string;
	remetente: string;
	emCopia: string;
	titulo: string;
	assunto: string;
	agradecimento: string;
	conteudo: string;

	constructor() {
		this.conteudo = '';
		this.assunto = '';
		this.para = '';
		this.remetente = '';
		this.emCopia = '';
		this.titulo = '';
		this.agradecimento = '';
	}

	build(
		conteudo: string,
		assunto: string,
		para: string,
		remetente: string,
		emCopia: string,
		titulo: string,
		agradecimento: string
	) {
		this.conteudo = conteudo;
		this.assunto = assunto;
		this.para = para;
		this.remetente = remetente;
		this.emCopia = emCopia;
		this.titulo = titulo;
		this.agradecimento = agradecimento;
		return this;
	}
}
