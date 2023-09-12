import { Injectable } from '@angular/core';
import { ActionButtonModel } from '../models/ActionButton.model';

@Injectable({
  providedIn: 'root',
})
export class ActionButtonsService {
  constructor() {}

  getAllActionsButtons() {
    const listActionsButtons = new Array<ActionButtonModel>();
    listActionsButtons.push(
      new ActionButtonModel().build(
        '',
        '../../../../assets/icons/whatsapp.png',
        'Meu Canal No YouTube',
        'whatsappButton',
        ['whatsapp']
      )
    );
    listActionsButtons.push(
      new ActionButtonModel().build(
        '',
        '../../../../assets/icons/email.png',
        'Meu Canal No YouTube',
        'emailButton',
        ['email']
      )
    );
    listActionsButtons.push(
      new ActionButtonModel().build(
        '',
        '../../../../assets/icons/telefone.png',
        'Meu Canal No YouTube',
        'telefoneButton',
        ['telefone']
      )
    );
    listActionsButtons.push(
      new ActionButtonModel().build(
        '',
        '../../../../assets/icons/download.png',
        'Meu Canal No YouTube',
        'downloadButton',
        ['download']
      )
    );
    return listActionsButtons;
  }
}
