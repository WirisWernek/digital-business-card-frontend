export class ActionButtonModel {
  link: string;
  imagem: string;
  descricao: string;
  idStyle: string;
  styles: Array<string>;

  constructor() {
    this.link = '';
    this.imagem = '';
    this.descricao = '';
    this.idStyle = '';
    this.styles = Array<string>();
  }

  build(
    link: string,
    imagem: string,
    descricao: string,
    idStyle: string,
    styles: Array<string>
  ) {
    this.link = link;
    this.imagem = imagem;
    this.descricao = descricao;
    this.idStyle = idStyle;
    this.styles = styles;
    return this;
  }
}
