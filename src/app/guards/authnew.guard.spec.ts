import { TestBed } from '@angular/core/testing';

import { AuthnewGuard } from './authnew.guard';

describe('AuthnewGuard', () => {
  let guard: AuthnewGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthnewGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
