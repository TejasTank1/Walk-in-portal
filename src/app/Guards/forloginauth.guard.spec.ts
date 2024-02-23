import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { forloginauthGuard } from './forloginauth.guard';

describe('forloginauthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => forloginauthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
