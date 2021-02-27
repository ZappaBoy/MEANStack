import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../services/customer.service";
import {Customer} from "../models/customer.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  customers1: Customer[];

  customers2: Customer[];

  selectedCustomer1: Customer;

  selectedCustomer2: Customer;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.getCustomersMedium().then(data => this.customers1 = data);
    this.customerService.getCustomersMedium().then(data => this.customers2 = data);
  }

}
