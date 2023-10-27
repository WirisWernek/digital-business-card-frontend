import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaoDeVisitasComponent } from './views/cartao-de-visitas/cartao-de-visitas.component';

const routes: Routes = [
  { path: '', component: CartaoDeVisitasComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaoDeVisitasRoutingModule {}
