import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OptionalButtonsModel } from 'src/app/models/OptionalButtons.model';

@Injectable()
export class OptionalButtonsService {
	private optionalButtons$ = new Subject<OptionalButtonsModel>;

	constructor() {
		const optionalButtons = new OptionalButtonsModel().build(
			true,
			'be9d3572-5689-48d1-b2c8-13d105c32686',
			true,
			true,
			true,
			'wiriswernek@gmail.com',
			true,
			false
		);

		this.optionalButtons$.next(optionalButtons);
	}

	getAllOptionButtons() {
		return this.optionalButtons$.asObservable();
	}
}
