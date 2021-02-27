import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Customer} from '../models/customer.model';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {
  }

  getCustomersMedium() {
    return this.http.get<any>('assets/customers-medium.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => {
        return data;
      });
  }
}
