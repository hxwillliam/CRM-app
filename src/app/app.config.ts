import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(BrowserModule), 
    importProvidersFrom(BrowserAnimationsModule), 
    importProvidersFrom(CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
      })
    ),
    importProvidersFrom(BrowserAnimationsModule),provideRouter([]),
    importProvidersFrom(MatDialogModule),
    importProvidersFrom(MatDialogRef)
  ],
};