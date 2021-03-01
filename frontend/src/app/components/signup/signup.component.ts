import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  display: boolean;

  constructor() {
  }

  showDialog() {
    this.display = true;
  }

  ngOnInit(): void {
  }

}
