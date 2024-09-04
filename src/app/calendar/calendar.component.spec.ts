import { TestBed } from '@angular/core/testing';
import { CalendarComponent } from './calendar.component';

describe('CalendarComponent]', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [CalendarComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CalendarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
