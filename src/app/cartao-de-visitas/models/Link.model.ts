export class LinkModel {
  link: string;
  texto: string;
  styles: Array<string>;

  constructor() {
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
