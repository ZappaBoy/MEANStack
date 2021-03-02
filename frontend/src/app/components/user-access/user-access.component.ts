import {Component, OnInit} from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {User} from "../../models/user.model";
import {UserAccessService} from "../../services/user-access.service";
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

  constructor(private userAccessService: UserAccessService,
              private toastService: ToastService,
              private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.userAccessService.login(this.user)
      .subscribe((res) => {
        this.toastService.loginSuccessful()
        this.localStorage.setLoggedStatus()
        this.showDialog(false)
      }, (error) => {
        console.log(error)
        this.toastService.error()
      })
  }
}
