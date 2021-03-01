import {Component, OnInit} from '@angular/core';
import {UserAccessService} from "../../services/user-access.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  display: boolean
  username: string
  password: string
  password_confirmation: string

  constructor(private userAccessService: UserAccessService) {
  }

  showDialog() {
    this.display = true;
  }

  ngOnInit(): void {
  }

  signup() {
    if (this.password === this.password_confirmation) {
      console.log(this.password, this.username)
      this.userAccessService.signup(this.username, this.password)
    } else {
      this.passwordsDontMatch()
    }
  }

  passwordsDontMatch() {
    alert('passwords not matching')
  }
}
