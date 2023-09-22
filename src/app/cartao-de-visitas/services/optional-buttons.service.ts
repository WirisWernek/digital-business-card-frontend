import { Injectable } from '@angular/core';
import { OptionalButtons } from '../models/OptionalButtons.model';

@Injectable({
  providedIn: 'root'
})
export class OptionalButtonsService {

	optionalButtons: OptionalButtons;

  constructor() {
	this.optionalButtons = new OptionalButtons();
   }

  getAllOptionButtons(){
	this.optionalButtons.build(true, "Por enquanto não tem e é sobre isso!", true, true);
	return this.optionalButtons;
  }
}
