import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProjectModel } from 'src/app/models/Project.model';

@Injectable()
export class ProjectsService {

	projects$: BehaviorSubject<ProjectModel[]>;
	base_path: string = '/assets/images/projects';

	constructor() {
		this.projects$ = new BehaviorSubject(this._getList());
	}

	getProjects(): Observable<ProjectModel[]> {
		return this.projects$.asObservable();
	}

	private _getList(): ProjectModel[] {
		const list: ProjectModel[] = [];
		list.push({
			nome: 'Cartão de Visitas',
			url: 'https://dbc-wiriswernek.vercel.app',
			imagem: `${this.base_path}/cartao_digital.png`,
			alt: 'Preview do Cartão de Visitas Digital',
			descricao: 'O futuro dos ultrapassados Cartões de Visita',
		});
		list.push({
			nome: 'Github Repos',
			url: 'https://github-repos-wiriswernek.vercel.app',
			imagem: `${this.base_path}/github_repos.png`,
			alt: 'Preview do Github Repos',
			descricao: 'Busque o que realmente te importa no Github',
		});
		list.push({
			nome: 'Previsão do Tempo',
			url: 'https://previsao-tempo-wiriswernek.vercel.app',
			imagem: `${this.base_path}/previsao_do_tempo.png`,
			alt: 'Preview do Previsão do Tempo',
			descricao: 'Previsão do tempo rápida e simples',
		});
		list.push({
			nome: 'Avaliações',
			url: 'https://avaliacoes-wiriswernek.vercel.app',
			imagem: `${this.base_path}/avaliacoes.png`,
			alt: 'Preview do Avaliações',
			descricao: 'Métricas e opiniões em um único lugar',
		});
		list.push({
			nome: 'Hotel Paraíso',
			url: 'https://wiriswernek.github.io/ProjetoHotelParaiso',
			imagem: `${this.base_path}/hotel_paraiso.png`,
			alt: 'Preview do Hotel Paraíso',
			descricao: 'Um hotel paradisíaco',
		});
		list.push({
			nome: 'Pede Aí',
			url: 'https://pedeai-wiriswernek.vercel.app',
			imagem: `${this.base_path}/pede_ai.png`,
			alt: 'Preview do Pede Aí',
			descricao: 'Bora pedir um açaí? pede aí',
		});
		list.push({
			nome: 'Página de Contato',
			url: 'https://pedeai-wiriswernek.vercel.app',
			imagem: `${this.base_path}/contact_page.png`,
			alt: 'Preview da Página de Contato',
			descricao: 'Uma página seus cliente te contactarem.',
		});
		list.push({
			nome: 'QR Code Generator',
			url: 'https://pedeai-wiriswernek.vercel.app',
			imagem: `${this.base_path}/qrcode_generator.png`,
			alt: 'Preview do QR Code Generator',
			descricao: 'Gere e compartilhe QR Codes rapidamente.',
		});
		list.push({
			nome: 'Blog - Desafio Codelândia',
			url: 'https://pedeai-wiriswernek.vercel.app',
			imagem: `${this.base_path}/blog-codelandia.png`,
			alt: 'Preview do QR Code Generator',
			descricao: 'Quem sabe o primeiro passo de um futuro blog?',
		});
		list.push({
			nome: 'Tela de Login - Desafio Codelândia',
			url: 'https://pedeai-wiriswernek.vercel.app',
			imagem: `${this.base_path}/tela-login-codelandia.png`,
			alt: 'Preview da Tela de Login',
			descricao: 'Uma tela de login moderna e responsiva.',
		});
		list.push({
			nome: 'Portfolio',
			url: 'https://portfolio-wiriswernek.vercel.app',
			imagem: `${this.base_path}/portfolio.png`,
			alt: 'Preview do Portfolio',
			descricao: 'Meu portfolio de apresentação.',
		});
		list.push({
			nome: 'Guia Perguntas',
			url: 'https://portfolio-wiriswernek.vercel.app',
			imagem: `${this.base_path}/guia-perguntas.png`,
			alt: 'Preview do Guia Perguntas',
			descricao: 'Projeto de uma plataforma de perguntas e respostas.',
		});
		list.push({
			nome: 'Projeto Anna Bella',
			url: 'https://portfolio-wiriswernek.vercel.app',
			imagem: `${this.base_path}/anna-bella.png`,
			alt: 'Preview do Anna Bella',
			descricao: 'Uma página de apresentação simples'
		});
		list.push({
			nome: 'Unes',
			url: 'https://portfolio-wiriswernek.vercel.app',
			imagem: `${this.base_path}/unes.png`,
			alt: 'Preview do Unes',
			descricao: 'Projeto de um site institucional',
		});

		return list;
		// list.push({ nome: '', url: `${this.base_path}`, alt: '' });
	}
}
