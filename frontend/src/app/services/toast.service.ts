import {Injectable} from '@angular/core';
import {Message} from 'primeng/api';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  registrationSuccessfulMessage: Message = {
    severity: "success",
    summary: "Success",
    detail: "Registration successful"
  }

  loginSuccessfulMessage: Message = {
    severity: "success",
    summary: "Success",
    detail: "Login successful"
  }

  submissionSuccessfulMessage: Message = {
    severity: "success",
    summary: "Success",
    detail: "Submission successful"
  }

  errorMessage: Message = {
    severity: "error",
    summary: "Error",
    detail: "Something went wrong, try again later"
  }
  invokeEvent: Subject<any> = new Subject();

  constructor() {
  }

  private showToast(message: Message) {
    this.invokeEvent.next(message);
  }

  registrationSuccessful() {
    this.showToast(this.registrationSuccessfulMessage)
  }

  loginSuccessful() {
    this.showToast(this.loginSuccessfulMessage)
  }

  submissionSuccessful() {
    this.showToast(this.submissionSuccessfulMessage)
  }

  error() {
    this.showToast(this.errorMessage)
  }

}
