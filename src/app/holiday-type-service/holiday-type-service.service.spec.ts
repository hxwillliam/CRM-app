import { TestBed } from '@angular/core/testing';

import { HolidayTypeServiceService } from './holiday-type-service.service';

describe('HolidayTypeServiceService', () => {
  let service: HolidayTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidayTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
