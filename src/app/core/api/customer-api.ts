import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Api } from './api';
import { CreateCustomerRequest, Customer } from '../../features/customer/models/customer.model';

@Injectable({ providedIn: 'root' })
export class CustomerApi {
  private api = inject(Api);

  getCustomers(): Observable<Customer[]> {
    return this.api.get<unknown>('customers').pipe(
      map((response) => this.toArray(response).map((item) => this.toCustomer(item)))
    );
  }

  createCustomer(payload: CreateCustomerRequest): Observable<Customer> {
    return this.api.post<unknown, CreateCustomerRequest>('customers', payload).pipe(
      map((response) => this.toCustomer(response))
    );
  }

  private toArray(value: unknown): unknown[] {
    if (Array.isArray(value)) return value;
    if (value && typeof value === 'object') return [value];
    return [];
  }

  private toCustomer(value: unknown): Customer {
    const data = (value ?? {}) as Record<string, unknown>;
    return {
      id: Number(data['id'] ?? data['Id'] ?? 0),
      firstName: String(data['firstName'] ?? data['FirstName'] ?? ''),
      lastName: String(data['lastName'] ?? data['LastName'] ?? ''),
      email: String(data['email'] ?? data['Email'] ?? ''),
      phone: String(data['phone'] ?? data['Phone'] ?? ''),
      dateOfBirth: String(data['dateOfBirth'] ?? data['DateOfBirth'] ?? ''),
      createdAt: String(data['createdAt'] ?? data['CreatedAt'] ?? ''),
    };
  }
}