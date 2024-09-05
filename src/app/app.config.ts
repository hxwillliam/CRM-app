import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FullCalendarModule } from '@fullcalendar/angular';
import { StoreModule } from '@ngrx/store';

import { routes } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';



export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(BrowserModule),
    provideRouter(routes),
    importProvidersFrom(AppRoutingModule),
    importProvidersFrom(HttpClient),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(BrowserAnimationsModule),provideRouter([]),
    importProvidersFrom(MatDialogModule),
    importProvidersFrom(MatDialogRef),
    importProvidersFrom(FullCalendarModule),
    importProvidersFrom( StoreModule.forRoot(),
    ),
    provideHttpClient(withFetch())
    ,provideAnimationsAsync()
  ],
};