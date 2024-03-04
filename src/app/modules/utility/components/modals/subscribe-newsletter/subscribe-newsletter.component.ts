import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NewsletterModel } from 'src/app/models/Newsletter.model';
import { SubscribeNewsletterStore } from '../../../stores/subscribe-newsletter.store';

@Component({
	selector: 'app-subscribe-newsletter',
	templateUrl: './subscribe-newsletter.component.html',
	styleUrls: ['./subscribe-newsletter.component.scss'],
})
export class SubscribeNewsletterComponent {
	newsletterForm!: FormGroup;
	emailValido: boolean;
	nomeValido: boolean;

	constructor(
		public modalRef: BsModalRef,
		private formBuilder: FormBuilder,
		private newsletterStore: SubscribeNewsletterStore
	) {
		this.newsletterForm = this.formBuilder.group({
			nome: ['', Validators.required],
			email: [
				'',
				[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
			],
		});

		this.nomeValido = true;
		this.emailValido = true;
	}

	enviar() {
		this.validate();

		if (this.emailValido) {
			const newsletter = new NewsletterModel();
			const nome = this.newsletterForm.get('nome')?.value;
			const email = this.newsletterForm.get('email')?.value;
			newsletter.build(nome, email);
			this.newsletterStore.salvar(newsletter);
			this.modalRef.hide();
		}
	}

	cancelar() {
		this.modalRef.hide();
	}

	validate() {
		this.validateNome();
		this.validateEmail();
	}

	validateNome() {
		this.nomeValido =
			this.newsletterForm.controls['nome'].touched &&
			!!this.newsletterForm.controls['nome'].errors === false;

		if (this.newsletterForm.get('nome')?.value.trim() === '') {
			this.nomeValido = false;
		}
	}

	validateEmail() {
		this.emailValido =
			this.newsletterForm.controls['email'].touched &&
			!!this.newsletterForm.controls['email'].errors === false;

		if (this.newsletterForm.get('email')?.value.trim() === '') {
			this.emailValido = false;
		}
	}
}
