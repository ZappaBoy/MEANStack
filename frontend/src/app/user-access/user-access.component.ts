import {Component, OnInit} from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.scss'],
  providers: [DialogService]
})
export class UserAccessComponent implements OnInit {

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  constructor(public dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

}
