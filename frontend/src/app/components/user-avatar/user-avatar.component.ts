import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {

  items: MenuItem[];

  display: boolean;

  constructor(private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Profile',
        icon: 'pi pi-user',
        routerLink: ''
      },
      {
        separator: true
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => {
          this.showDialog();
        }
      }
    ];
  }

  showDialog(status: boolean = true) {
    this.display = status;
  }

  quit() {
    this.localStorage.setLoggedOutStatus();
  }

  abort() {
    this.showDialog(false);
  }
}
