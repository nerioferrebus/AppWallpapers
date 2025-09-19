import { TestBed } from '@angular/core/testing';

import { Upluader } from './upluader';

describe('Upluader', () => {
  let service: Upluader;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Upluader);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
