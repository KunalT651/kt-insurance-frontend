import { TestBed } from '@angular/core/testing';

import { PolicyFeature } from './policy-feature';

describe('PolicyFeature', () => {
  let service: PolicyFeature;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyFeature);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
