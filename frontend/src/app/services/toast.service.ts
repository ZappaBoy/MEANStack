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

  errorMessage: Message = {
    severity: "error",
    summary: "Error",
    detail: "Something went wrong"
  }
  invokeEvent: Subject<any> = new Subject();

  constructor() {
  }

  showToast(message: Message) {
    this.invokeEvent.next(message)
  }

  registrationSuccessful() {
    this.showToast(this.registrationSuccessfulMessage)
  }

  error() {
    this.showToast(this.errorMessage)
  }

}
