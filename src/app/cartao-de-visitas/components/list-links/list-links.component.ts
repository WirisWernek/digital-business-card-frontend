import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { LinkModel } from '../../models/Link.model';
import { OptionalButtons } from '../../models/OptionalButtons.model';
import { ListLinksService } from '../../services/list-links.service';
import { OptionalButtonsService } from '../../services/optional-buttons.service';

@Component({
  selector: 'app-list-links',
  templateUrl: './list-links.component.html',
  styleUrls: ['./list-links.component.scss'],
})
export class ListLinksComponent implements OnInit {
  listLinks: Array<LinkModel>;
  optionalButtons: OptionalButtons;

  constructor(
    private listLinkService: ListLinksService,
    private optionalButtonsService: OptionalButtonsService,
    private clipboardService: ClipboardService
  ) {
    this.listLinks = new Array<LinkModel>();
    this.optionalButtons = new OptionalButtons();
  }

  ngOnInit(): void {
    this.listLinks = this.listLinkService.getAllLinks();
    this.optionalButtons = this.optionalButtonsService.getAllOptionButtons();
  }

  copiarChavePix() {
    this.clipboardService.copy(this.optionalButtons.chavePix);
    alert('Chave copiada para sua area de transferência');
  }
  
  avaliarTrabalho() {
	console.log("Pois é não tem ainda, Deixe seu F no console!");
  }
  
  inscricaoNewsletter() {
	console.log("Pois é não tem ainda, Deixe seu F no console!");
  }
}
