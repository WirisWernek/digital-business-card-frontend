import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaoDeVisitasComponent } from './views/cartao-de-visitas/cartao-de-visitas.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { ListLinksComponent } from './components/list-links/list-links.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [{ path: '', component: CartaoDeVisitasComponent }];

@NgModule({
  declarations: [
    CartaoDeVisitasComponent,
    HeaderComponent,
    ActionButtonsComponent,
    ListLinksComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
	RouterModule.forChild(routes),
  ]
})
export class CartaoDeVisitasModule { }
