import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RatingModule } from 'ngx-bootstrap/rating';
import { CartaoDeVisitasRoutingModule } from './cartao-de-visitas-routing.module';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ListProjectsLinksComponent } from './components/list-project-links/list-project-links.component';
import { ListSocialLinksComponent } from './components/list-social-links/list-social-links.component';
import { SendEmailComponent } from './components/modals/send-email/send-email.component';
import { SendNotesComponent } from './components/modals/send-notes/send-notes.component';
import { SendReviewComponent } from './components/modals/send-review/send-review.component';
import { SubscribeNewsletterComponent } from './components/modals/subscribe-newsletter/subscribe-newsletter.component';
import { OptionalButtonsComponent } from './components/optional-buttons/optional-buttons.component';
import { CartaoDeVisitasComponent } from './views/cartao-de-visitas/cartao-de-visitas.component';

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
	CartaoDeVisitasRoutingModule
  ],
})
export class CartaoDeVisitasModule {}
