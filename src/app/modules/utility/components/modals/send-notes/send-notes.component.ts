import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EmailModel } from 'src/app/models/Email.model';
import { ToastrCustomizedService } from '../../../services/toastr-customized.service';
import { AnotacaoStore } from '../../../stores/anotacao.store';


@Component({
	selector: 'app-send-notes',
	templateUrl: './send-notes.component.html',
	styleUrls: ['./send-notes.component.scss'],
})
export class SendNotesComponent {
	defaultEmail!: string;
	noteForm!: FormGroup;

	emailDestinoValido: boolean;
	assuntoValido: boolean;
	conteudoValido: boolean;

	constructor(
		public modalRef: BsModalRef,
		private formBuilder: FormBuilder,
		private anotacaoStore: AnotacaoStore,
		private toastrCustomizedService: ToastrCustomizedService
	) {
		this.noteForm = this.formBuilder.group({
			emailDestino: [
				'',
				[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
			],
			assunto: ['', Validators.required],
			conteudo: ['', Validators.required],
		});

		this.emailDestinoValido = true;
		this.assuntoValido = true;
		this.conteudoValido = true;
	}

	enviar() {
		this.validate();
		if (this.emailDestinoValido && this.assuntoValido && this.conteudoValido) {
			const email = new EmailModel();
			email.build(
				'anotacoes',
				this.noteForm.get('conteudo')?.value,
				this.noteForm.get('assunto')?.value,
				this.noteForm.get('emailDestino')?.value,
				this.defaultEmail,
				this.defaultEmail,
				'Nota By Digital Business Card',
				'Agradecemos seu interesse em nossos serviços!'
			);
			this.anotacaoStore.salvar(email);
			this.toastrCustomizedService.sucesso('Nota enviada com sucesso');
			this.modalRef.hide();
		}
	}

	cancelar() {
		this.modalRef.hide();
	}

	validate() {
		this.validateEmailDestino();
		this.validateAssunto();
		this.validateConteudo();
	}

	validateEmailDestino() {
		this.emailDestinoValido = false;

		this.emailDestinoValido =
			this.noteForm.controls['emailDestino'].touched &&
			!!this.noteForm.controls['emailDestino'].errors === false;

		if (this.noteForm.get('emailDestino')?.value.trim() === '') {
			this.emailDestinoValido = false;
		}
	}

	validateAssunto() {
		this.assuntoValido =
			this.noteForm.controls['assunto'].touched &&
			!!this.noteForm.controls['assunto'].errors === false;

		if (this.noteForm.get('assunto')?.value.trim() === '') {
			this.assuntoValido = false;
		}
	}

	validateConteudo() {
		this.conteudoValido =
			this.noteForm.controls['conteudo'].touched &&
			!!this.noteForm.controls['conteudo'].errors === false;

		if (this.noteForm.get('conteudo')?.value.trim() === '') {
			this.conteudoValido = false;
		}
	}
}
