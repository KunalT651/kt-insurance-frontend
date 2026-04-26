import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerApi } from '../../../core/api/customer-api';
import { CreateCustomerRequest, Customer } from '../models/customer.model';

@Injectable({ providedIn: 'root' })
export class CustomerFeature {
  private customerApi = inject(CustomerApi);

  getCustomers(): Observable<Customer[]> {
    return this.customerApi.getCustomers();
  }

  createCustomer(payload: CreateCustomerRequest): Observable<Customer> {
    return this.customerApi.createCustomer(payload);
  }
}