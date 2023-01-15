import { TestBed } from '@angular/core/testing';

import { UniversityTestService } from './university-test.service';

describe('UniversityTestService', () => {
  let service: UniversityTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversityTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
