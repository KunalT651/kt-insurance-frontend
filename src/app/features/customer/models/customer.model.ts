export interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string; // ISO date string (yyyy-MM-dd or full ISO)
    createdAt?: string;
  }
  
  export interface CreateCustomerRequest {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
  }