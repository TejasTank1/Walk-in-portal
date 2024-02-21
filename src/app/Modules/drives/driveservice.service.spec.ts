import { TestBed } from '@angular/core/testing';

import { DriveserviceService } from './driveservice.service';

describe('DriveserviceService', () => {
  let service: DriveserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriveserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
