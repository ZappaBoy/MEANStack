import {Component, OnInit} from '@angular/core';
import {UserAccessService} from "../../services/user-access.service";
import {ToastService} from "../../services/toast.service";
import {User} from "../../models/user.model";

const MINIMUM_PASSWORD_LENGTH = 10

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  display: boolean
  passwordConfirmation: string
  user: User = new User()
  usernameNotInserted: boolean
  usernameNotAvailable: boolean
  passwordNotAccepted: boolean
  passwordsDontMatch: boolean
  registrationSuccessful: boolean
  registrationError: boolean

  constructor(private userAccessService: UserAccessService,
              private toastService: ToastService) {
  }

  showDialog(status: boolean = true) {
    this.display = status;
  }

  ngOnInit(): void {
  }

  signup(): void {
    this.resetErrors()
    if (this.inputAccepted()) {
      this.userAccessService.signup(this.user)
        .subscribe((res) => {
          console.log(res)
          this.registrationSuccessful = true
          this.toastService.registrationSuccessful()
          this.showDialog(false)
        }, (error) => {
          console.log(error)
          if (error.status === 409) {
            this.usernameNotAvailable = true
          } else {
            this.registrationError = true
            this.toastService.error()
          }
        })
    }
  }

  inputAccepted(): boolean {
    if (this.user.password.length < 1) {
      this.usernameNotAvailable = true
      return false
    } else if (this.user.password.length < MINIMUM_PASSWORD_LENGTH) {
      this.passwordNotAccepted = true
      return false
    } else {
      if (this.user.password === this.passwordConfirmation) {
        return true
      } else {
        this.passwordsDontMatch = true
        return false
      }
    }
  }

  setInvalidIf(status: boolean) {
    return {'invalid-input': status}
  }

  resetErrors() {
    this.usernameNotAvailable = false
    this.passwordNotAccepted = false
    this.passwordsDontMatch = false
    this.registrationError = false
  }
}
