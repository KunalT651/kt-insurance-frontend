import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Policy } from '../../models/policy.model';

@Component({
  selector: 'app-policy-list',
  imports: [CommonModule],
  templateUrl: './policy-list.html',
  styleUrl: './policy-list.scss',
})
export class PolicyList {
  @Input() policies: Policy[] = [];
}