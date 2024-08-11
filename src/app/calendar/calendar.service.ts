import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { MyCalendarEvent } from './calendar.component';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private storageKey = 'calendarEvents';
  private events: MyCalendarEvent[] = [];

  saveEvents(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.events));
  }

  getEvents(): Observable<MyCalendarEvent[]> {
    return of(this.events);
  }

  addEvent(event: MyCalendarEvent): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      map(success => {
        if (success) {
          this.events.push(event);
          this.saveEvents();
        }
        return success;
      })
    );
  }

  deleteEvent(event: MyCalendarEvent): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      map(success => {
        if (success) {
          this.events = this.events.filter(e => e !== event);
          this.saveEvents();
        }
        return success;
      })
    );
  }
}``