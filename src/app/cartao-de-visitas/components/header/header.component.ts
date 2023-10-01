import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() emmitTypeVisible = new EventEmitter<string>();
  subtitle: string;
  index = -1;

  text = 'Backend Web Developer';
  textArray: Array<string> = this.text.split('');
  ultimaAcao = '1';

  constructor() {
    this.subtitle = '';
  }
  ngOnInit(): void {
    this.loadSubtitleWithEffect();
  }

  changeOption() {
	if(this.ultimaAcao == '1'){
		this.ultimaAcao = '2';
	}else{
		this.ultimaAcao = '1';
	}
    console.log('ok');
    this.emmitTypeVisible.emit(this.ultimaAcao);
  }

  loadSubtitleWithEffect() {
    if (this.index < this.textArray.length - 1)
      setTimeout(() => {
        this.index += 1;
        this.subtitle += this.textArray[this.index];
        this.loadSubtitleWithEffect();
      }, 150);
  }
}
