import { Injectable } from '@angular/core';
import { LinkModel } from '../models/Link.model';

@Injectable({
  providedIn: 'root',
})
export class ListProjectsLinksService {
  constructor() {}

  getAllLinks() {
    const listLinks = new Array<LinkModel>();
    listLinks.push(
      new LinkModel().build(
        'https://wiriswernek.vercel.app', 
        'Portfólio', 
        ['col-11','button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://digital-card.wiriswernek.vercel.app',
        'Cartão de Visitas Digital',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://previsao-tempo.wiriswernek.vercel.app',
        'Previsão do Tempo',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://github-consumer.wiriswernek.vercel.app',
        'GitHub Consumer',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://finance.wiriswernek.vercel.app',
        'Finance',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://wiriswernek.github.io/GeradorDeSenhas/',
        'Gerador de Senhas',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://wiriswernek.github.io/ProjetoHotelParaiso/',
        'Projeto Hotel Paraíso',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://wiriswernek.github.io/Projeto-Anna-Bella/',
        'Projeto Anna Bella',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://wiriswernek.github.io/UNES/',
        'Projeto UNES',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://wiriswernek.github.io/instagram-clone/',
        'Instagram Login Clone',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://wiriswernek.github.io/Netflix-clone/',
        'Netflix Clone',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://wiriswernek.github.io/snake-the-game/',
        'Snake Game',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://wiriswernek.github.io/jogo-da-velha/',
        'Jogo da Velha',
        ['col-11', 'button']
      )
    );
    return listLinks;
  }
}
