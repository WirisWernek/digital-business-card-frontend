import { BaseModel } from './Base.model';

export class NewsletterModel extends BaseModel {
  nome: string;
  email: string;

  constructor() {
    super();
    this.nome = '';
    this.email = '';
  }

  build(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }
}
