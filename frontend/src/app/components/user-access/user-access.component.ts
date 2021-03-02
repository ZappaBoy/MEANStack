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

  showDialog(status: boolean = true) {
    this.display = status;
  }

  constructor(public dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

}
