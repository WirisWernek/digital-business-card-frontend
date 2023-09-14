import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  subtitle: string;
  index: number = -1;

  text: string = 'Backend Web Developer';
  textArray: Array<string> = this.text.split('');

  constructor() {
    this.subtitle = '';
  }
  ngOnInit(): void {
    this.loadSubtitleWithEffect();
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
