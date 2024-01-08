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
import { ConnectionService } from './services/connection.service';
import { OptionalButtonsService } from './services/optional-buttons.service';
import { ToastrCustomizedService } from './services/toastr-customized.service';
import { AnotacaoStore } from './stores/anotacao.store';
import { EmailRapidoStore } from './stores/email-rapido.store';
import { EmailStore } from './stores/email.store';
import { SendReviewStore } from './stores/send-review.store';
import { SubscribeNewsletterStore } from './stores/subscribe-newsletter.store';
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
	],
	providers: [
		AnotacaoStore,
		EmailRapidoStore,
		EmailStore,
		SendReviewStore,
		SubscribeNewsletterStore,
		OptionalButtonsService,
		ToastrCustomizedService,
		ConnectionService,
	],
})
export class UtilityModule {}
