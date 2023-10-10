import { Injectable } from '@angular/core';
import { OptionalButtons } from '../models/OptionalButtons.model';

@Injectable({
  providedIn: 'root',
})
export class OptionalButtonsService {
  optionalButtons: OptionalButtons;

  constructor() {
    this.optionalButtons = new OptionalButtons();
  }

  getAllOptionButtons() {
    this.optionalButtons.build(
      true,
      '7733cb5d-2e77-40ff-9b44-f3bf578cf988',
      true,
      true,
      true,
      ''
    );
    return this.optionalButtons;
  }
}
