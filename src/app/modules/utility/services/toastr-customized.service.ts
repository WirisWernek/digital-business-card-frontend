import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastrCustomizedService {
	constructor(private toastrService: ToastrService) {}

	sucesso(mensagem: string) {
		this.toastrService.success(mensagem, 'Sucesso');
	}
	erro(mensagem: string) {
		this.toastrService.error(mensagem, 'Erro');
	}
	info(mensagem: string) {
		this.toastrService.info(mensagem, 'Informação');
	}
	alerta(mensagem: string) {
		this.toastrService.warning(mensagem, 'Alerta');
	}
}
