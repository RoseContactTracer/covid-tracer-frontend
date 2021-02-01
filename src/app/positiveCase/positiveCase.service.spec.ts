import { TestBed } from '@angular/core/testing';

import { PositiveCaseService } from './positiveCase.service';

describe('CaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PositiveCaseService = TestBed.get(PositiveCaseService);
    expect(service).toBeTruthy();
  });
});
