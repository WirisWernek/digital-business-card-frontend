import { BaseModel } from "./Base.model";

export class ReviewModel extends BaseModel{
	nota: number;
	comentario: string;

	constructor(){
		super();
		this.nota = 0;
		this.comentario = "";
	}

	build(nota: number, comentario: string){
		this.nota = nota;
		this.comentario = comentario;
	}
}