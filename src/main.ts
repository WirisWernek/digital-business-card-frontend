import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(
			BrowserModule,
			CommonModule,
			ModalModule.forRoot(),
			RatingModule.forRoot(),
			ToastrModule.forRoot({
				timeOut: 10000,
				positionClass: 'toast-bottom-right',
				preventDuplicates: true,
				progressBar: true,
				progressAnimation: 'decreasing',
			}),
			ServiceWorkerModule.register('ngsw-worker.js', {
				enabled: !isDevMode(),
				registrationStrategy: 'registerWhenStable:30000',
			})
		),
		provideHttpClient(withInterceptorsFromDi()),
		provideAnimations(),
		provideRouter(routes),
	],
}).catch((err) => console.error(err));
