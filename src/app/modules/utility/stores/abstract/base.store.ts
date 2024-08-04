import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import Dexie from 'dexie';
import { BaseModelService } from 'src/app/models/base/BaseModelService';
import { environment } from 'src/environments/environment';
import { ConnectionService } from '../../services/connection.service';

export abstract class BaseStore<T extends BaseModelService> {
	private database: Dexie;
	private table: Dexie.Table<T, number>;
	protected http: HttpClient;
	protected connectionService: ConnectionService;
	protected baseUrl: string

	constructor(
		protected injector: Injector,
		protected nomeTabela: string,
		protected apiUrl: string
	) {
		this.baseUrl = environment.API_URL+ '/' + apiUrl;
		this.http = this.injector.get(HttpClient);
		this.connectionService = this.injector.get(ConnectionService);
		this.database = this.criarDatabase();
		this.table = this.database.table(this.nomeTabela);
		this.registrarEventos(this.connectionService);
	}

	private criarDatabase() {
		const database = new Dexie('database');
		database.version(3).stores(environment.INDEXEDDB_TABLES);

		return database;
	}

	private registrarEventos(connectionService: ConnectionService) {
		connectionService.trocaConexao.subscribe((online) => {
			if (online) {
				console.log('Online. Enviando os itens do IndexedDb para a API');
				this.enviarItensdoIndexedDb();
			} else {
				console.log('Offline. Salvando no IndexedDb');
			}
		});
	}

	salvar(modelo: T) {
		console.log(JSON.stringify(modelo))
		if (this.connectionService.isOnline) {
			this.salvarAPI(modelo);
		} else {
			this.salvarIndexedDb(modelo);
		}
	}

	private salvarAPI(modelo: T) {
		console.log('Mandando para a API.');
		this.http.post(this.baseUrl, modelo).subscribe({
			next: (item) => console.info(item),
			error: (err) => console.error(`Erro ao salvar ${this.nomeTabela}`, err),
			complete: () => console.log(`${this.nomeTabela} salvo com sucesso!`),
		});
	}

	private salvarIndexedDb(modelo: T) {
		this.table
			.add(modelo)
			.then(async () => {
				const allmodelos: T[] = await this.table.toArray();
				console.log(`Novo item ${this.nomeTabela} foi salvo no IndexedDb`, allmodelos);
			})
			.catch((err) => console.log(`Erro ao incluir ${this.nomeTabela} no IndexedDb`, err));
	}

	private async enviarItensdoIndexedDb() {
		const allmodelos: T[] = await this.table.toArray();

		allmodelos.forEach((item) => {
			this.salvarAPI(item);

			this.table.delete(item.id).then(() => {
				console.log(`${this.nomeTabela} com ID ${item?.id} deletado do IndexedDb`);
			});
		});
	}

	listar() {
		return this.http.get<T[]>(this.apiUrl);
	}
}
