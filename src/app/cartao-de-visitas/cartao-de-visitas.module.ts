import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ListProjectsLinksComponent } from './components/list-project-links/list-project-links.component';
import { ListSocialLinksComponent } from './components/list-social-links/list-social-links.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { CartaoDeVisitasComponent } from './views/cartao-de-visitas/cartao-de-visitas.component';
import { OptionalButtonsComponent } from './components/optional-buttons/optional-buttons.component';
import { SendReviewComponent } from './components/send-review/send-review.component';
import { SubscribeNewsletterComponent } from './components/subscribe-newsletter/subscribe-newsletter.component';

const routes: Routes = [{ path: '', component: CartaoDeVisitasComponent }];

@NgModule({
  declarations: [
    CartaoDeVisitasComponent,
    HeaderComponent,
    ActionButtonsComponent,
	ListSocialLinksComponent,
	ListProjectsLinksComponent,
    FooterComponent,
    SendEmailComponent,
    OptionalButtonsComponent,
    SendReviewComponent,
    SubscribeNewsletterComponent,
  ],
  imports: [
    CommonModule,
	ModalModule.forRoot(),
	RouterModule.forChild(routes),
  ]
})
export class CartaoDeVisitasModule { }
