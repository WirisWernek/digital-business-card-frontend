import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ClipboardService } from 'ngx-clipboard';
import { OptionalButtons } from '../../models/OptionalButtons.model';
import { OptionalButtonsService } from '../../services/optional-buttons.service';
import { SendEmailComponent } from '../send-email/send-email.component';
import { SendNotesComponent } from '../send-notes/send-notes.component';
import { SendReviewComponent } from '../send-review/send-review.component';
import { SubscribeNewsletterComponent } from '../subscribe-newsletter/subscribe-newsletter.component';

@Component({
  selector: 'app-optional-buttons',
  templateUrl: './optional-buttons.component.html',
  styleUrls: ['./optional-buttons.component.scss'],
})
export class OptionalButtonsComponent implements OnInit {
  optionalButtons: OptionalButtons;
  bsModalRef?: BsModalRef;
  MODAL_OPTIONS = {
    class: 'modal-lg modal-dialog-centered',
    ignoreBackdropClick: true,
    keyboard: true,
  };
  compartilharEnable = false;

  constructor(
    private optionalButtonsService: OptionalButtonsService,
    private clipboardService: ClipboardService,
    private modalService: BsModalService
  ) {
    this.optionalButtons = new OptionalButtons();
  }

  ngOnInit(): void {
    this.optionalButtons = this.optionalButtonsService.getAllOptionButtons();
	  this.compartilharEnable = window.navigator?.share ? true : false;
  }

  copiarChavePix() {
    return this.clipboardService.copy(this.optionalButtons.chavePix);
  }

  openModalEmail() {
    this.bsModalRef = this.modalService.show(SendEmailComponent, {
      class: 'modal-lg modal-dialog-centered',
      ignoreBackdropClick: true,
      keyboard: true,
      initialState: {
        defaultEmail: this.optionalButtons.emailRapidoEndereco,
      },
    });
  }

  openModalNewsletter() {
    console.log('Pois é não tem ainda, Deixe seu F no console!');
    this.bsModalRef = this.modalService.show(
      SubscribeNewsletterComponent,
      this.MODAL_OPTIONS
    );
  }

  openModalReview() {
    console.log('Pois é não tem ainda, Deixe seu F no console!');
    this.bsModalRef = this.modalService.show(
      SendReviewComponent,
      this.MODAL_OPTIONS
    );
  }

  openModalAnotacao() {
    this.bsModalRef = this.modalService.show(SendNotesComponent, {
      class: 'modal-lg modal-dialog-centered',
      ignoreBackdropClick: true,
      keyboard: true,
      initialState: {
        defaultEmail: this.optionalButtons.emailRapidoEndereco,
      },
    });
  }

  async compartilhar() {

    let data = {
          title: 'Cartão Digital',
          text: 'Cartão de Visitas Digital',
          url: window.location.href,
        };
    try {
        await navigator.share(data);
    } catch (error: any) {
      alert(
        `Your system doesn't support sharing these files.\nError: ${error.message}`
      );
    }
  }
}
