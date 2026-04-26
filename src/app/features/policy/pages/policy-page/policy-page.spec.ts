import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyPage } from './policy-page';

describe('PolicyPage', () => {
  let component: PolicyPage;
  let fixture: ComponentFixture<PolicyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PolicyPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
