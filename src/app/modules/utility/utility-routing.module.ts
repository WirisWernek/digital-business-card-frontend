import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionalButtonsComponent } from './components/optional-buttons/optional-buttons.component';

const routes: Routes = [
	{
		path: "",
		component: OptionalButtonsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilityRoutingModule { }
