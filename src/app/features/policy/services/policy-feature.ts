import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PolicyApi } from '../../../core/api/policy-api';
import { CreatePolicyRequest, Policy } from '../models/policy.model';

@Injectable({ providedIn: 'root' })
export class PolicyFeature {
  private policyApi = inject(PolicyApi);

  getPolicies(): Observable<Policy[]> {
    return this.policyApi.getPolicies();
  }

  createPolicy(payload: CreatePolicyRequest): Observable<Policy> {
    return this.policyApi.createPolicy(payload);
  }
}