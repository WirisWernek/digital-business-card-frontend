export class EmailModel {
  conteudo: string;
  assunto: string;
  para: string;
  remetente: string;
  emCopia: string;

  constructor() {
    this.conteudo = '';
    this.assunto = '';
    this.para = '';
	this.remetente = '';
	this.emCopia = '';
  }

  build(conteudo: string, assunto: string, para: string, remetente: string, emCopia: string) {
    this.conteudo = conteudo;
    this.assunto = assunto;
    this.para = para;
	this.remetente = remetente;
	this.emCopia = emCopia;
    return this;
  }
}
