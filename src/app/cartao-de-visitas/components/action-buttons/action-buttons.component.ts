import { Component, OnInit } from '@angular/core';
import { ActionButtonModel } from '../../models/ActionButton.model';
import { ActionButtonsService } from '../../services/action-buttons.service';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {

	actionsButtons: Array<ActionButtonModel> = [];

	constructor(private actionButtonService: ActionButtonsService){}

	ngOnInit(): void {
		this.actionsButtons = this.actionButtonService.getAllActionsButtons();
	}

}
