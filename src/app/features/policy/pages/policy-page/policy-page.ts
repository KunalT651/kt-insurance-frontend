import { Component, inject } from '@angular/core';
import { Customer } from '../../../customer/models/customer.model';
import { CustomerFeature } from '../../../customer/services/customer-feature';
import { PolicyForm } from '../../components/policy-form/policy-form';
import { PolicyList } from '../../components/policy-list/policy-list';
import { CreatePolicyRequest, Policy } from '../../models/policy.model';
import { PolicyFeature } from '../../services/policy-feature';

@Component({
  selector: 'app-policy-page',
  imports: [PolicyForm, PolicyList],
  templateUrl: './policy-page.html',
  styleUrl: './policy-page.scss',
})
export class PolicyPage {
  private customerFeature = inject(CustomerFeature);
  private policyFeature = inject(PolicyFeature);

  customers: Customer[] = [];
  policies: Policy[] = [];

  constructor() {
    this.loadCustomers();
    this.loadPolicies();
  }

  onCreatePolicy(payload: CreatePolicyRequest): void {
    this.policyFeature.createPolicy(payload).subscribe((createdPolicy) => {
      this.policies = [...this.policies, createdPolicy];
    });
  }

  private loadCustomers(): void {
    this.customerFeature.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }

  private loadPolicies(): void {
    this.policyFeature.getPolicies().subscribe((data) => {
      this.policies = data;
    });
  }
}