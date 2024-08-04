import { Injectable } from '@angular/core';
import { OptionalButtonsModel } from 'src/app/models/OptionalButtons.model';

@Injectable({
	providedIn: 'root',
})
export class OptionalButtonsService {
	optionalButtons: OptionalButtonsModel;

	constructor() {
		this.optionalButtons = new OptionalButtonsModel();
	}

	getAllOptionButtons() {
		this.optionalButtons.build(
			true,
			'be9d3572-5689-48d1-b2c8-13d105c32686',
			true,
			true,
			true,
			'wiriswernek@gmail.com',
			true,
			false
		);
		return this.optionalButtons;
	}
}
