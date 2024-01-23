import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() emmitTypeVisible = new EventEmitter<string>();
  
  ultimaAcao: string;
  nome: string;
  subtitle: string;
  imagemPerfil: string;

  constructor() {
    this.ultimaAcao = '1';
    this.nome = 'Wiris Wernek';
    this.subtitle = 'Full Stack Web Developer';
    this.imagemPerfil = '/assets/images/profile.png';
  }

  changeOption() {
    if (this.ultimaAcao == '1') {
      this.ultimaAcao = '2';
    } else {
      this.ultimaAcao = '1';
    }
    this.emmitTypeVisible.emit(this.ultimaAcao);
  }
}
