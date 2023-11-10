import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ClipboardService } from 'ngx-clipboard';
import { OptionalButtonsModel } from 'src/app/models/OptionalButtons.model';
import { OptionalButtonsService } from 'src/app/services/optional-buttons.service';
import { SendEmailComponent } from '../modals/send-email/send-email.component';
import { SendNotesComponent } from '../modals/send-notes/send-notes.component';
import { SendReviewComponent } from '../modals/send-review/send-review.component';
import { SubscribeNewsletterComponent } from '../modals/subscribe-newsletter/subscribe-newsletter.component';

@Component({
  selector: 'app-optional-buttons',
  templateUrl: './optional-buttons.component.html',
  styleUrls: ['./optional-buttons.component.scss'],
})
export class OptionalButtonsComponent implements OnInit {
  optionalButtons: OptionalButtonsModel;
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
    this.optionalButtons = new OptionalButtonsModel();
  }

  ngOnInit(): void {
    this.optionalButtons = this.optionalButtonsService.getAllOptionButtons();
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
    this.bsModalRef = this.modalService.show(
      SubscribeNewsletterComponent,
      this.MODAL_OPTIONS
    );
  }

  openModalReview() {
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
    try {
      if (navigator.canShare()) {
        await navigator.share({
          title: 'Images',
          text: 'Beautiful images',
          url: window.location.href,
        });
      } else {
        alert(`Your system doesn't support sharing these files.`);
      }
    } catch (error) {
      alert(
        `Your system doesn't support sharing these files.\nError: ${error}`
      );
    }
  }
}
