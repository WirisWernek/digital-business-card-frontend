import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ListProjectsLinksComponent } from './components/list-project-links/list-project-links.component';
import { ListSocialLinksComponent } from './components/list-social-links/list-social-links.component';
import { CartaoDeVisitasComponent } from './views/cartao-de-visitas/cartao-de-visitas.component';

const routes: Routes = [{ path: '', component: CartaoDeVisitasComponent }];

@NgModule({
  declarations: [
    CartaoDeVisitasComponent,
    HeaderComponent,
    ActionButtonsComponent,
	ListSocialLinksComponent,
	ListProjectsLinksComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
	RouterModule.forChild(routes),
  ]
})
export class CartaoDeVisitasModule { }
