
export class NewsletterData{
  nome: string;
  email: string;

  constructor() {
    this.nome = '';
    this.email = '';
  }

  build(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }
}
