import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  items: MenuItem[];

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  constructor(private localStorageService: LocalStorageService) {
  }

  isAuthenticated(): boolean {
    return this.localStorageService.getAuthStatus()
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Homepage',
        routerLink: '/'
      },
      {
        label: 'Dashboard',
        routerLink: '/dashboard'
      },
      {
        label: 'Insert data',
        routerLink: '/insert-data',
      }
    ];
  }
}

