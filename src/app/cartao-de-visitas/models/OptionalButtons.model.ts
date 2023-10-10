export class OptionalButtons {
  pixEnable: boolean;
  chavePix: string;
  avaliacaoEnable: boolean;
  newsletterEnable: boolean;
  emailRapidoEnable: boolean;
  emailRapidoEndereco: string;

  constructor() {
    this.pixEnable = false;
    this.chavePix = '';
    this.avaliacaoEnable = false;
    this.newsletterEnable = false;
    this.emailRapidoEnable = false;
    this.emailRapidoEndereco = '';
  }

  build(
    pixEnable: boolean,
    chavePix: string,
    avaliacaoEnable: boolean,
    newsletterEnable: boolean,
    emailRapidoEnable: boolean,
    emailRapidoEndereco: string
  ) {
    this.pixEnable = pixEnable;
    this.chavePix = chavePix;
    this.avaliacaoEnable = avaliacaoEnable;
    this.newsletterEnable = newsletterEnable;
    this.emailRapidoEnable = emailRapidoEnable;
    this.emailRapidoEndereco = emailRapidoEndereco;
    return this;
  }
}
