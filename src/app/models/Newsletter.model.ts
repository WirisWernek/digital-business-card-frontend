import { BaseModel } from './Base.model';

export class NewsletterModel extends BaseModel {
  email: string;

  constructor() {
    super();
    this.email = '';
  }

  build(email: string) {
    this.email = email;
  }
}
