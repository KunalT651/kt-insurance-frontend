import { Component, inject } from '@angular/core';
import { CustomerForm } from '../../components/customer-form/customer-form';
import { CustomerList } from '../../components/customer-list/customer-list';
import { CreateCustomerRequest, Customer } from '../../models/customer.model';
import { CustomerFeature } from '../../services/customer-feature';

@Component({
  selector: 'app-customer-page',
  imports: [CustomerForm, CustomerList],
  templateUrl: './customer-page.html',
  styleUrl: './customer-page.scss',
})
export class CustomerPage {
  private customerFeature = inject(CustomerFeature);

  customers: Customer[] = [];

  constructor() {
    this.loadCustomers();
  }

  onCreateCustomer(payload: CreateCustomerRequest): void {
    this.customerFeature.createCustomer(payload).subscribe((createdCustomer) => {
      this.customers = [...this.customers, createdCustomer];
    });
  }

  private loadCustomers(): void {
    this.customerFeature.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }
}