import { TestBed } from '@angular/core/testing';

import { Prefs } from './prefs';

describe('Prefs', () => {
  let service: Prefs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Prefs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
