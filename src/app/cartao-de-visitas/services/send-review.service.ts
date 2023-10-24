import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { environment } from 'src/environments/environment';
import { ReviewModel } from '../models/Review.model';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root',
})
export class SendReviewService {
  private db: any;

  constructor(
    private http: HttpClient,
    private readonly connectionService: ConnectionService
  ) {
    this.registrarEventos(connectionService);
    this.criarDatabase();
  }

  private criarDatabase() {
    this.db = new Dexie('database');
    this.db.version(3).stores({
      reviews: '++id',
    });
  }

  private registrarEventos(connectionService: ConnectionService) {
    connectionService.trocaConexao.subscribe((online) => {
      if (online) {
        console.log('Enviando os itens do IndexedDb para a API');
        this.enviarItensdoIndexedDb();
      } else {
        console.log('Offline. Salvando no IndexedDb');
      }
    });
  }

  salvar(review: ReviewModel) {
    if (this.connectionService.isOnline) {
      this.salvarAPI(review);
    } else {
      this.salvarIndexedDb(review);
    }
  }

  private salvarAPI(review: ReviewModel) {
    console.log('Mandando pra API.');
    this.http.post(environment.API_URL + '/api/seguros', review).subscribe(
      (registro) => {
        alert('Seguro salvo com sucesso!');
      },
      (err) => console.error('Erro ao salvar seguro', err)
    );
  }

  private salvarIndexedDb(review: ReviewModel) {
    this.db.reviews
      .add(review)
      .then(async () => {
        const allReviews: ReviewModel[] = await this.db.reviews.toArray();
        console.log('Novo item foi salvo no IndexedDb', allReviews);
      })
      .catch((err: any) =>
        console.log('Erro ao incluir item no IndexedDb', err)
      );
  }

  private async enviarItensdoIndexedDb() {
    const allReviews: ReviewModel[] = await this.db.reviews.toArray();
    console.log(allReviews.entries);

    allReviews.forEach((item) => {
      this.salvarAPI(item);

      this.db.reviews.delete(item.id).then(() => {
        console.log(`Review com ID ${item.id} deletado do IndexedDb`);
      });
    });
  }

  listar() {
    return this.http.get<ReviewModel[]>(environment.API_URL + '/api/seguros');
  }
}
