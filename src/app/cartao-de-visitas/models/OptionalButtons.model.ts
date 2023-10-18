export class OptionalButtons {
  pixEnable: boolean;
  chavePix: string;
  avaliacaoEnable: boolean;
  newsletterEnable: boolean;
  emailRapidoEnable: boolean;
  emailRapidoEndereco: string;
  anotacaoEnable: boolean;
  compartilharEnable: boolean;

  constructor() {
    this.pixEnable = false;
    this.chavePix = '';
    this.avaliacaoEnable = false;
    this.newsletterEnable = false;
    this.emailRapidoEnable = false;
    this.emailRapidoEndereco = '';
    this.anotacaoEnable = false;
    this.compartilharEnable = false;
  }

  build(
    pixEnable: boolean,
    chavePix: string,
    avaliacaoEnable: boolean,
    newsletterEnable: boolean,
    emailRapidoEnable: boolean,
    emailRapidoEndereco: string,
    anotacaoEnable: boolean,
    compartilharEnable: boolean
  ) {
    this.pixEnable = pixEnable;
    this.chavePix = chavePix;
    this.avaliacaoEnable = avaliacaoEnable;
    this.newsletterEnable = newsletterEnable;
    this.emailRapidoEnable = emailRapidoEnable;
    this.emailRapidoEndereco = emailRapidoEndereco;
    this.anotacaoEnable = anotacaoEnable;
    this.compartilharEnable = compartilharEnable;
    return this;
  }
}
