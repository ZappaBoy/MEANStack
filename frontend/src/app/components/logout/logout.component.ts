import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  display: boolean;

  constructor(private localStorage: LocalStorageService) {
  }

  showDialog(status: boolean = true) {
    this.display = status;
  }

  quit() {
    this.localStorage.setLoggedOutStatus()
  }

  abort() {
    this.showDialog(false)
  }

  ngOnInit(): void {
  }
}
