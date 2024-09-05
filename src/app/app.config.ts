import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FullCalendarModule } from '@fullcalendar/angular';
import { StoreModule } from '@ngrx/store';
import routeConfig from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(BrowserModule),
    provideRouter(routeConfig),
    importProvidersFrom(BrowserAnimationsModule), 
    importProvidersFrom(CalendarModule),
    importProvidersFrom(BrowserAnimationsModule),provideRouter([]),
    importProvidersFrom(MatDialogModule),
    importProvidersFrom(MatDialogRef),
    importProvidersFrom(FullCalendarModule),
    importProvidersFrom( StoreModule.forRoot(),
    ),
    provideHttpClient(withFetch())
  ],
};