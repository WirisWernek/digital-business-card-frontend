export class ContactLinkModel {
  whatsapp: string;
  email: string;
  telefone: string;
  localizacao: string;
  download: string;

  constructor() {
    this.whatsapp = '';
    this.email = '';
    this.telefone = '';
    this.localizacao = '';
	this.download = ""
  }

  buid(whatsapp: string, email: string, telefone: string, localizacao: string, download: string) {
    this.whatsapp = whatsapp;
    this.email = email;
    this.telefone = telefone;
    this.localizacao = localizacao;
	this.download = download;
    return this;
  }
}
