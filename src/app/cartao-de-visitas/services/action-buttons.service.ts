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
        'Meu Canal No YouTube',
        'whatsapp',
        ['whatsapp']
      )
    );
    listActionsButtons.push(
      new ActionButtonModel().build(
        '',
        '../../../../assets/icons/email.png',
        'Meu Canal No YouTube',
        'email',
        ['email']
      )
    );
    listActionsButtons.push(
      new ActionButtonModel().build(
        '',
        '../../../../assets/icons/telefone.png',
        'Meu Canal No YouTube',
        'telefone',
        ['telefone']
      )
    );
    listActionsButtons.push(
      new ActionButtonModel().build(
        '',
        '../../../../assets/icons/download.png',
        'Meu Canal No YouTube',
        'download',
        ['download']
      )
    );
    return listActionsButtons;
  }
}
