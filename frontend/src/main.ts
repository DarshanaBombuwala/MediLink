import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms'; // <-- Import ReactiveFormsModule here
import { routes } from './app/app.routes'; // <-- Import routes here
import { AppComponent } from './app/app.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    ReactiveFormsModule // <-- Add ReactiveFormsModule here
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
