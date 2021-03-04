import {Component, OnInit} from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {User} from "../../models/user.model";
import {BackendService} from "../../services/backend.service";
import {ToastService} from "../../services/toast.service";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.scss'],
  providers: [DialogService]
})
export class UserAccessComponent implements OnInit {

  display: boolean = false;
  user: User = new User()

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
    this.backendService.login(this.user)
      .subscribe((user) => {
        this.toastService.loginSuccessful()
        this.localStorage.setLoggedStatus()
        this.showDialog(false)
      }, (error) => {
        console.log(error)
        this.toastService.error()
      })
  }
}
