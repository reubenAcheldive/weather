import { TestBed } from '@angular/core/testing';

import { CurrentconditionsService } from './currentconditions.service';

describe('CurrentconditionsService', () => {
  let service: CurrentconditionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentconditionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
