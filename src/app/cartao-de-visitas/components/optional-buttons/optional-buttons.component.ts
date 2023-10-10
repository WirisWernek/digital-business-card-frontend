import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ClipboardService } from 'ngx-clipboard';
import { OptionalButtons } from '../../models/OptionalButtons.model';
import { OptionalButtonsService } from '../../services/optional-buttons.service';
import { SendEmailComponent } from '../send-email/send-email.component';
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
  constructor(
    private optionalButtonsService: OptionalButtonsService,
    private clipboardService: ClipboardService,
    private modalService: BsModalService
  ) {
    this.optionalButtons = new OptionalButtons();
  }

  ngOnInit(): void {
    this.optionalButtons = this.optionalButtonsService.getAllOptionButtons();
  }

  copiarChavePix() {
    return this.clipboardService.copy(this.optionalButtons.chavePix);
  }

  openModalEmail() {
    console.log('Pois é não tem ainda, Deixe seu F no console!');
    this.bsModalRef = this.modalService.show(
      SendEmailComponent,
      this.MODAL_OPTIONS
    );
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
}
