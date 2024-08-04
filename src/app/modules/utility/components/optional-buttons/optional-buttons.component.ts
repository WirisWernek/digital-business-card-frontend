import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OptionalButtonsModel } from 'src/app/models/OptionalButtons.model';
import { ConnectionService } from '../../services/connection.service';
import { OptionalButtonsService } from '../../services/optional-buttons.service';
import { ToastrCustomizedService } from '../../services/toastr-customized.service';
import { AnotacaoStore } from '../../stores/anotacao.store';
import { EmailStore } from '../../stores/email.store';
import { SendReviewStore } from '../../stores/send-review.store';
import { SubscribeNewsletterStore } from '../../stores/subscribe-newsletter.store';
import { SendEmailComponent } from '../modals/send-email/send-email.component';
import { SendNotesComponent } from '../modals/send-notes/send-notes.component';
import { SendReviewComponent } from '../modals/send-review/send-review.component';
import { SubscribeNewsletterComponent } from '../modals/subscribe-newsletter/subscribe-newsletter.component';

@Component({
	selector: 'app-optional-buttons',
	templateUrl: './optional-buttons.component.html',
	styleUrls: ['./optional-buttons.component.scss'],
	standalone: true,
	imports: [
		RouterLink,
		SendEmailComponent,
		SendNotesComponent,
		SendReviewComponent,
		SubscribeNewsletterComponent,
	],
	providers: [
		AnotacaoStore,
		EmailStore,
		SendReviewStore,
		SubscribeNewsletterStore,
		ToastrCustomizedService,
		OptionalButtonsService,
		ConnectionService,
		BsModalService,
	],
})
export class OptionalButtonsComponent implements OnInit {
	optionalButtons: OptionalButtonsModel;
	bsModalRef?: BsModalRef;
	DEFAULT_MODAL_OPTIONS = {
		class: 'modal-lg modal-dialog-centered',
		ignoreBackdropClick: false,
		backdrop: true,
		keyboard: true,
		animated: true,
	};

	constructor(
		private optionalButtonsService: OptionalButtonsService,
		private modalService: BsModalService,
		private toastrCustomizedService: ToastrCustomizedService
	) {
		this.optionalButtons = new OptionalButtonsModel();
	}

	ngOnInit(): void {
		this.optionalButtons = this.optionalButtonsService.getAllOptionButtons();
	}

	copiarChavePix() {
		navigator.clipboard.writeText(this.optionalButtons.chavePix).then(() => {
			this.toastrCustomizedService.sucesso('Chave Copiada com Sucesso');
		});
	}

	openModalNewsletter() {
		this.bsModalRef = this.modalService.show(
			SubscribeNewsletterComponent,
			this.DEFAULT_MODAL_OPTIONS
		);
	}

	openModalReview() {
		this.bsModalRef = this.modalService.show(SendReviewComponent, this.DEFAULT_MODAL_OPTIONS);
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
			alert(`Your system doesn't support sharing these files.\nError: ${error}`);
		}
	}
}
