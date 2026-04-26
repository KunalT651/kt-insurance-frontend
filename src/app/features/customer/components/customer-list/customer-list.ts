import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer-list',
  imports: [CommonModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.scss',
})
export class CustomerList {
  @Input() customers: Customer[] = [];
}