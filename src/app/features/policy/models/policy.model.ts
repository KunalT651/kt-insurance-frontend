export type PolicyType = 'Health' | 'Life' | 'Auto' | 'Home';

export interface Policy {
  id: number;
  policyNumber: string;
  customerId: number;
  customerName?: string; // convenient for UI tables
  policyType: PolicyType;
  premiumAmount: number;
  startDate: string; // ISO date string
  endDate: string;   // ISO date string
  createdAt?: string;
}

export interface CreatePolicyRequest {
  policyNumber: string;
  customerId: number;
  policyType: PolicyType;
  premiumAmount: number;
  startDate: string;
  endDate: string;
}