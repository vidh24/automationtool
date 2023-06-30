import { TestBed } from '@angular/core/testing';

import { ActiontypeService } from './actiontype.service';

describe('ActiontypeService', () => {
  let service: ActiontypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiontypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
