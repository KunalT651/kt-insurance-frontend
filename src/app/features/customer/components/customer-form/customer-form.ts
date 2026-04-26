import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateCustomerRequest } from '../../models/customer.model';

@Component({
  selector: 'app-customer-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-form.html',
  styleUrl: './customer-form.scss',
})
export class CustomerForm {
  private fb = inject(FormBuilder);

  @Output() create = new EventEmitter<CreateCustomerRequest>();

  form = this.fb.nonNullable.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.create.emit(this.form.getRawValue());
    this.form.reset({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
    });
  }
}