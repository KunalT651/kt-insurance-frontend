import { TestBed } from '@angular/core/testing';

import { CustomerFeature } from './customer-feature';

describe('CustomerFeature', () => {
  let service: CustomerFeature;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerFeature);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
