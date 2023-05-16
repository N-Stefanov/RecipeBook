import { TestBed } from '@angular/core/testing';

import { ReceptionsListService } from './receptions-list.service';

describe('ReceptionsListService', () => {
  let service: ReceptionsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
