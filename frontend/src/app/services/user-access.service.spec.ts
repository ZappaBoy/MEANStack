import {TestBed} from '@angular/core/testing';

import {UserAccessService} from './user-access.service';

describe('UserAccessService', () => {
  let service: UserAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
