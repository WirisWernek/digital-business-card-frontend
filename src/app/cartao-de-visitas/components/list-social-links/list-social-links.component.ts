import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { LinkModel } from '../../models/Link.model';
import { OptionalButtons } from '../../models/OptionalButtons.model';
import { ListSocialLinksService } from '../../services/list-social-links.service';
import { OptionalButtonsService } from '../../services/optional-buttons.service';

@Component({
  selector: 'app-list-social-links',
  templateUrl: './list-social-links.component.html',
  styleUrls: ['./list-social-links.component.scss'],
})
export class ListSocialLinksComponent implements OnInit {
  listLinks: Array<LinkModel>;
  optionalButtons: OptionalButtons;

  constructor(
    private listSocialLinkService: ListSocialLinksService,
    private optionalButtonsService: OptionalButtonsService,
    private clipboardService: ClipboardService
  ) {
    this.listLinks = new Array<LinkModel>();
    this.optionalButtons = new OptionalButtons();
  }

  ngOnInit(): void {
    this.listLinks = this.listSocialLinkService.getAllLinks();
    this.optionalButtons = this.optionalButtonsService.getAllOptionButtons();
  }

  copiarChavePix() {
    return this.clipboardService.copy(this.optionalButtons.chavePix);
  }

  avaliarTrabalho() {
    console.log('Pois é não tem ainda, Deixe seu F no console!');
  }

  inscricaoNewsletter() {
    console.log('Pois é não tem ainda, Deixe seu F no console!');
  }
}
