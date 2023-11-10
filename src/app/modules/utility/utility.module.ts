import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SendEmailComponent } from './components/modals/send-email/send-email.component';
import { SendNotesComponent } from './components/modals/send-notes/send-notes.component';
import { SendReviewComponent } from './components/modals/send-review/send-review.component';
import { SubscribeNewsletterComponent } from './components/modals/subscribe-newsletter/subscribe-newsletter.component';
import { OptionalButtonsComponent } from './components/optional-buttons/optional-buttons.component';
import { UtilityRoutingModule } from './utility-routing.module';

@NgModule({
  declarations: [
	SendEmailComponent,
    SendReviewComponent,
    SendNotesComponent,
    SubscribeNewsletterComponent,
	OptionalButtonsComponent,
  ],
  imports: [
    CommonModule,
	FormsModule,
    ReactiveFormsModule,
	UtilityRoutingModule,
    ModalModule.forChild(),
    RatingModule.forRoot(),

  ]
})
export class UtilityModule { }
