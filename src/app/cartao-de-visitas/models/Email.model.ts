import { BaseModel } from "./Base.model";

export class EmailModel extends BaseModel {
  conteudo: string;
  assunto: string;
  para: string;
  remetente: string;
  emCopia: string;

  constructor() {
	super();
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
