import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ClipboardService } from 'ngx-clipboard';
import { OptionalButtonsModel } from 'src/app/models/OptionalButtons.model';
import { OptionalButtonsService } from 'src/app/services/optional-buttons.service';
import { ToastrCustomizedService } from 'src/app/services/toastr-customized.service';
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
  DEFAULT_MODAL_OPTIONS = {
    class: 'modal-lg modal-dialog-centered',
    ignoreBackdropClick: false,
	backdrop: true,
    keyboard: true,
	animated: true
  };

  constructor(
    private optionalButtonsService: OptionalButtonsService,
    private clipboardService: ClipboardService,
    private modalService: BsModalService,
	private toastrCustomizedService: ToastrCustomizedService
  ) {
    this.optionalButtons = new OptionalButtonsModel();
  }

  ngOnInit(): void {
    this.optionalButtons = this.optionalButtonsService.getAllOptionButtons();
  }

  copiarChavePix() {
	this.clipboardService.copy(this.optionalButtons.chavePix);
	this.toastrCustomizedService.sucesso("Chave Copiada com Sucesso");
  }

  openModalNewsletter() {
    this.bsModalRef = this.modalService.show(
      SubscribeNewsletterComponent,
      this.DEFAULT_MODAL_OPTIONS
    );
  }

  openModalReview() {
    this.bsModalRef = this.modalService.show(
      SendReviewComponent,
      this.DEFAULT_MODAL_OPTIONS
    );
  }

  openModalEmail() {
    this.bsModalRef = this.modalService.show(SendEmailComponent, {
      ...this.DEFAULT_MODAL_OPTIONS,
      initialState: {
        defaultEmail: this.optionalButtons.emailRapidoEndereco,
      },
    });
  }

  openModalAnotacao() {
    this.bsModalRef = this.modalService.show(SendNotesComponent, {
      ...this.DEFAULT_MODAL_OPTIONS,
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
