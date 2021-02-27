import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-insert-data',
  templateUrl: './insert-data.component.html',
  styleUrls: ['./insert-data.component.scss']
})
export class InsertDataComponent implements OnInit {
  dateValue: any;
  selectedCity1: any;
  countries: any;
  selectedValues: any;
  cities: any;
  selectedCityCode: any;
  checked: any;
  selectedValue: any;
  val: any;
  stateOptions: any;
  paymentOptions: any;
  justifyOptions: any;
  value1: string = "off";
  value2: number;
  value3: any;
  checked1: boolean = false;
  checked2: boolean = true;
  val1: number;
  val2: number = 50;
  val3: number;
  val4: number;
  rangeValues: number[] = [20, 80];
  date2: any;
  selectedCity2: any;

  constructor() {
  }

  ngOnInit(): void {
    this.countries = [
      {
        name: 'Australia',
        code: 'AU',
        states: [
          {
            name: 'New South Wales',
            cities: [
              {cname: 'Sydney', code: 'A-SY'},
              {cname: 'Newcastle', code: 'A-NE'},
              {cname: 'Wollongong', code: 'A-WO'}
            ]
          },
          {
            name: 'Queensland',
            cities: [
              {cname: 'Brisbane', code: 'A-BR'},
              {cname: 'Townsville', code: 'A-TO'}
            ]
          },

        ]
      },
      {
        name: 'Canada',
        code: 'CA',
        states: [
          {
            name: 'Quebec',
            cities: [
              {cname: 'Montreal', code: 'C-MO'},
              {cname: 'Quebec City', code: 'C-QU'}
            ]
          },
          {
            name: 'Ontario',
            cities: [
              {cname: 'Ottawa', code: 'C-OT'},
              {cname: 'Toronto', code: 'C-TO'}
            ]
          },

        ]
      },
      {
        name: 'United States',
        code: 'US',
        states: [
          {
            name: 'California',
            cities: [
              {cname: 'Los Angeles', code: 'US-LA'},
              {cname: 'San Diego', code: 'US-SD'},
              {cname: 'San Francisco', code: 'US-SF'}
            ]
          },
          {
            name: 'Florida',
            cities: [
              {cname: 'Jacksonville', code: 'US-JA'},
              {cname: 'Miami', code: 'US-MI'},
              {cname: 'Tampa', code: 'US-TA'},
              {cname: 'Orlando', code: 'US-OR'}
            ]
          },
          {
            name: 'Texas',
            cities: [
              {cname: 'Austin', code: 'US-AU'},
              {cname: 'Dallas', code: 'US-DA'},
              {cname: 'Houston', code: 'US-HO'}
            ]
          }
        ]
      }
    ];
  }

}
