import {Component, OnInit} from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.scss'],
  providers: [DialogService]
})
export class UserAccessComponent implements OnInit {

  constructor(public dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

}
