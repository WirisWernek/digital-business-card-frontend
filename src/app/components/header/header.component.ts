import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  nome: string;
  subtitle: string;
  imagemPerfil: string;

  constructor() {
    this.nome = 'Wiris Wernek';
    this.subtitle = 'Full Stack Web Developer';
    this.imagemPerfil = '/assets/images/profile.png';
  }
}
