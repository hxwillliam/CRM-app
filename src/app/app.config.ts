import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FullCalendarModule } from '@fullcalendar/angular';
import { StoreModule } from '@ngrx/store';
import { routes } from './app.routes';



export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(BrowserModule),
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(BrowserAnimationsModule),provideRouter([]),
    importProvidersFrom(MatDialogModule),
    importProvidersFrom(MatDialogRef),
    importProvidersFrom(FullCalendarModule),
    importProvidersFrom( StoreModule.forRoot(),
    )
  ],
};