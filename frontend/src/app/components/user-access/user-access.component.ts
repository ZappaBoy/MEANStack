import {Component, OnInit} from '@angular/core';
import {DialogService} from 'primeng/dynamicdialog';
import {User} from '../../models/user.model';
import {BackendService} from '../../services/backend.service';
import {ToastService} from '../../services/toast.service';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.scss'],
  providers: [DialogService]
})
export class UserAccessComponent implements OnInit {

  display: boolean = false;
  user: User = new User();

  usernameNotInserted: boolean;
  passwordNotInserted: boolean;
  accessSuccessful: boolean;
  accessError: boolean;

  showDialog(status: boolean = true) {
    this.display = status;
  }

  constructor(private backendService: BackendService,
              private toastService: ToastService,
              private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.resetErrors();

    if (this.inputAccepted()) {
      this.backendService.login(this.user)
        .subscribe(() => {
          this.accessSuccessful = true;

          this.toastService.loginSuccessful();
          this.localStorage.setLoggedStatus();
          this.showDialog(false);
        }, (error) => {
          if (error && (error.status === 401 || error.status === 406)) {
            this.toastService.loginFailed();
          } else {
            this.toastService.error();
          }

          this.accessError = true;
          console.log(error);
        });
    }
  }

  private inputAccepted(): boolean {
    if (this.user.username == undefined) {
      this.usernameNotInserted = true;

      return false;
    }

    if (this.user.password == undefined) {
      this.passwordNotInserted = true;

      return false;
    }

    return true;
  }

  setInvalidIf(status: boolean) {
    return {'invalid-input': status};
  }

  private resetErrors() {
    this.usernameNotInserted = false;
    this.passwordNotInserted = false;
    this.accessError = false;
  }
}
