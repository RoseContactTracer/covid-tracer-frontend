import { TestBed } from '@angular/core/testing';

import { AssignedCasesService } from './assigned-cases.service';

describe('AssignedCasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignedCasesService = TestBed.get(AssignedCasesService);
    expect(service).toBeTruthy();
  });
});
