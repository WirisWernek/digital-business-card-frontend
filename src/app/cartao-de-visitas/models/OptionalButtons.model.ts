export class OptionalButtons {
  pixEnable: boolean;
  chavePix: string;
  avaliacaoEnable: boolean;
  newsletterEnable: boolean;

  constructor() {
    this.pixEnable = false;
    this.chavePix = '';
    this.avaliacaoEnable = false;
    this.newsletterEnable = false;
  }

  build(
    pixEnable: boolean,
    chavePix: string,
    avaliacaoEnable: boolean,
    newsletterEnable: boolean
  ) {
    this.pixEnable = pixEnable;
    this.chavePix = chavePix;
    this.avaliacaoEnable = avaliacaoEnable;
    this.newsletterEnable = newsletterEnable;
	return this;
  }
}
