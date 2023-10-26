import { BaseModel } from './Base.model';

export class LinkModel extends BaseModel {
  link: string;
  texto: string;
  styles: Array<string>;

  constructor() {
    super();
    this.link = '';
    this.texto = '';
    this.styles = Array<string>();
  }

  build(link: string, texto: string, styles: Array<string>) {
    this.link = link;
    this.texto = texto;
    this.styles = styles;
    return this;
  }
}
