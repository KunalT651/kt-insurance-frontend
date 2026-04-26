import { Component, EventEmitter, Input, Output, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../../../customer/models/customer.model';
import { CreatePolicyRequest, PolicyType } from '../../models/policy.model';

@Component({
  selector: 'app-policy-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './policy-form.html',
  styleUrl: './policy-form.scss',
})
export class PolicyForm {
  private fb = inject(FormBuilder);

  @Input() customers: Customer[] = [];
  @Output() create = new EventEmitter<CreatePolicyRequest>();

  searchText = signal('');

  policyTypes: PolicyType[] = ['Health', 'Life', 'Auto', 'Home'];

  filteredCustomers = computed(() => {
    const q = this.searchText().trim().toLowerCase();
    if (!q) return this.customers;

    return this.customers.filter((c) =>
      `${c.firstName} ${c.lastName}`.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q)
    );
  });

  form = this.fb.nonNullable.group({
    policyNumber: ['', [Validators.required]],
    customerId: [0, [Validators.required, Validators.min(1)]],
    policyType: ['Health' as PolicyType, [Validators.required]],
    premiumAmount: [0, [Validators.required, Validators.min(1)]],
    startDate: ['', [Validators.required]],
    endDate: ['', [Validators.required]],
  });

  onSearch(value: string): void {
    this.searchText.set(value);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.create.emit(this.form.getRawValue());
    this.form.patchValue({
      policyNumber: '',
      customerId: 0,
      policyType: 'Health',
      premiumAmount: 0,
      startDate: '',
      endDate: '',
    });
  }
}