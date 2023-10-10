import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ListProjectsLinksComponent } from './components/list-project-links/list-project-links.component';
import { ListSocialLinksComponent } from './components/list-social-links/list-social-links.component';
import { OptionalButtonsComponent } from './components/optional-buttons/optional-buttons.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { SendReviewComponent } from './components/send-review/send-review.component';
import { SubscribeNewsletterComponent } from './components/subscribe-newsletter/subscribe-newsletter.component';
import { CartaoDeVisitasComponent } from './views/cartao-de-visitas/cartao-de-visitas.component';
import { SendNotesComponent } from './components/send-notes/send-notes.component';

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
    SendNotesComponent,
  ],
  imports: [
    CommonModule,
	FormsModule, 
	ReactiveFormsModule,
	ModalModule.forRoot(),
	RatingModule.forRoot(),
	RouterModule.forChild(routes),
  ]
})
export class CartaoDeVisitasModule { }
