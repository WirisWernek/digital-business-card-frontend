import { BaseModel } from './Base.model';

export class ContactLinkModel extends BaseModel {
  whatsapp: string;
  email: string;
  telefone: string;
  localizacao: string;
  download: string;
  curriculo: string;

  constructor() {
    super();
    this.whatsapp = '';
    this.email = '';
    this.telefone = '';
    this.localizacao = '';
    this.download = '';
	this.curriculo = '';
  }

  buid(
    whatsapp: string,
    email: string,
    telefone: string,
    localizacao: string,
    download: string,
	curriculo: string
  ) {
    this.whatsapp = whatsapp;
    this.email = email;
    this.telefone = telefone;
    this.localizacao = localizacao;
    this.download = download;
	this.curriculo = curriculo;
    return this;
  }
}
