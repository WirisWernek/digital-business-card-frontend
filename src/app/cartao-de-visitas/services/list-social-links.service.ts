import { Injectable } from '@angular/core';
import { LinkModel } from '../models/Link.model';

@Injectable({
  providedIn: 'root',
})
export class ListSocialLinksService {
  getAllLinks() {
    const listLinks = new Array<LinkModel>();
    listLinks.push(
      new LinkModel().build(
        'https://www.youtube.com/@wiriswernek',
        'Meu Canal No YouTube',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://github.com/WirisWernek',
        'Veja meu trabalho no GitHub',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://www.instagram.com/wiriswernek/',
        'Me acompanhe no Instagram',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://twitter.com/wiriswernek',
        'Me siga no Twitter',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://www.twitch.tv/lost905',
        'Me siga na Twitch',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://www.linkedin.com/in/wiris-wernek/',
        'Me encontre no Linkedin',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        '../../../../assets/files/Wiris_Rafael_Januario_Wernek.vcf',
        'Salve meu Contato',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://wiriswernek.vercel.app',
        'Visite meu Portifólio',
        ['col-11', 'button']
      )
    );

    return listLinks;
  }
}
