import { Injectable } from '@angular/core';
import { ActionButtonModel } from '../models/ActionButton.model';

@Injectable({
  providedIn: 'root',
})
export class ActionButtonsService {

  getAllActionsButtons() {
    const listActionsButtons = new Array<ActionButtonModel>();
    listActionsButtons.push(
      new ActionButtonModel().build(
        '',
        '../../../../assets/icons/whatsapp.png',
        'Whatsapp',
        'whatsapp',
        ['whatsapp']
      )
    );
    listActionsButtons.push(
      new ActionButtonModel().build(
        '',
        '../../../../assets/icons/email.png',
        'Email',
        'email',
        ['email']
      )
    );
    listActionsButtons.push(
      new ActionButtonModel().build(
        '',
        '../../../../assets/icons/telefone.png',
        'Telefone',
        'telefone',
        ['telefone']
      )
    );
    listActionsButtons.push(
      new ActionButtonModel().build(
        '',
        '../../../../assets/icons/download.png',
        'Cartão Offline',
        'download',
        ['download']
      )
    );
    return listActionsButtons;
  }
}
