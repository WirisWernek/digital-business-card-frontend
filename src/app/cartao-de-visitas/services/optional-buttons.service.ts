import { Injectable } from '@angular/core';
import { OptionalButtonsModel } from '../models/OptionalButtons.model';

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
      false,
      '7733cb5d-2e77-40ff-9b44-f3bf578cf988',
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
