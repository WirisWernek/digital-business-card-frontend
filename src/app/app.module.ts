import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RatingModule } from 'ngx-bootstrap/rating';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    RatingModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.FIREBASECONFIG)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
