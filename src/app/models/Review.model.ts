import { BaseModelService } from './base/BaseModelService';
import { ReviewData } from './data/review.data';

export class ReviewModel extends BaseModelService {
	collection!: string;
	data!: ReviewData;

	constructor(){
		super();
		this.collection = 'reviews';
		this.data = new ReviewData();
	}

	build(nota: number, comentario: string){
		this.data.nota = nota;
		this.data.comentario = comentario;
		return this;
	}
}