import { Routes } from '@angular/router';
import { CustomerPage } from './features/customer/pages/customer-page/customer-page';
import { PolicyPage } from './features/policy/pages/policy-page/policy-page';

export const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomerPage },
  { path: 'policies', component: PolicyPage },
  { path: '**', redirectTo: 'customers' }
];