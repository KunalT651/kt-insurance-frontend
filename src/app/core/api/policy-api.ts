import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Api } from './api';
import { CreatePolicyRequest, Policy } from '../../features/policy/models/policy.model';

@Injectable({ providedIn: 'root' })
export class PolicyApi {
  private api = inject(Api);

  getPolicies(): Observable<Policy[]> {
    return this.api.get<unknown>('policies').pipe(
      map((response) => this.toArray(response).map((item) => this.toPolicy(item)))
    );
  }

  createPolicy(payload: CreatePolicyRequest): Observable<Policy> {
    return this.api.post<unknown, CreatePolicyRequest>('policies', payload).pipe(
      map((response) => this.toPolicy(response))
    );
  }

  private toArray(value: unknown): unknown[] {
    if (Array.isArray(value)) return value;
    if (value && typeof value === 'object') return [value];
    return [];
  }

  private toPolicy(value: unknown): Policy {
    const data = (value ?? {}) as Record<string, unknown>;
    return {
      id: Number(data['id'] ?? data['Id'] ?? 0),
      policyNumber: String(data['policyNumber'] ?? data['PolicyNumber'] ?? ''),
      customerId: Number(data['customerId'] ?? data['CustomerId'] ?? 0),
      customerName: String(data['customerName'] ?? data['CustomerName'] ?? ''),
      policyType: String(data['policyType'] ?? data['PolicyType'] ?? 'Health') as Policy['policyType'],
      premiumAmount: Number(data['premiumAmount'] ?? data['PremiumAmount'] ?? 0),
      startDate: String(data['startDate'] ?? data['StartDate'] ?? ''),
      endDate: String(data['endDate'] ?? data['EndDate'] ?? ''),
      createdAt: String(data['createdAt'] ?? data['CreatedAt'] ?? ''),
    };
  }
}