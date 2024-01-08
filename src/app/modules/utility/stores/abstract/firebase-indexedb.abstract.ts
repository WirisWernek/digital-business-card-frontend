import { Inject, Injector } from '@angular/core';
import Dexie from 'dexie';
import { BaseModel } from 'src/app/models/Base.model';
import { ConnectionService } from '../../services/connection.service';
import { FirebaseAbstract } from './firebase.abstract';


export abstract class FirebaseIndexedDBAbstract<T extends BaseModel> extends FirebaseAbstract<T> {
	private database: Dexie;
	private table: Dexie.Table<T, number>;
	protected connectionService: ConnectionService;

	constructor(protected injector: Injector, @Inject(String) protected nomeTabela: string) {
		super(nomeTabela);
		this.connectionService = this.injector.get(ConnectionService);
		this.database = this.criarDatabase();
		this.table = this.database.table(this.nomeTabela);
		this.registrarEventos(this.connectionService);
		console.log(nomeTabela);
	}

	private criarDatabase() {
		const database = new Dexie('database');
		database.version(3).stores({
			newsletter: '++id',
			reviews: '++id',
			anotacoes: '++id',
			emails: '++id',
		});
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
		if (this.connectionService.isOnline) {
			this.salvarFirebase(modelo);
		} else {
			this.salvarIndexedDb(modelo);
		}
	}

	private salvarFirebase(modelo: T) {
		console.log('Mandando para o Firebase.');
		this.insert(modelo);
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
		console.log(allmodelos.entries);

		allmodelos.forEach((item) => {
			this.salvarFirebase(item);

			this.table.delete(item.id).then(() => {
				console.log(`${this.nomeTabela} com ID ${item?.id} deletado do IndexedDb`);
			});
		});
	}
}
