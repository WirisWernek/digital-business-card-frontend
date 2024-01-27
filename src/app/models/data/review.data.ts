
export class ReviewData{
	nota: number;
	comentario: string;
	

	constructor(){
		this.nota = 0;
		this.comentario = "";
	}

	build(nota: number, comentario: string){
		this.nota = nota;
		this.comentario = comentario;
	}
}