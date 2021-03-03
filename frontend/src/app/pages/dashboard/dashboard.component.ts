import {Component, OnInit} from '@angular/core';
import {Entity} from "../../models/entity.model";
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  entity: Entity = new Entity();
  entities: Entity[];
  selectedEntity: Entity;
  cols: any[];
  dataCol: any[];

  constructor(private backendService: BackendService) {
  }

  ngOnInit() {
    this.backendService.getAllEntites()
      .subscribe((data) => {
        this.entities = data
      });
    this.prepareEntity()
  }

  capitalize(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  private prepareEntity() {
    this.entity.id = ""
    this.entity.data.author = ""
    this.entity.data.content = ""
    this.entity.data.date = new Date()
    this.entity.data.price = 0

    this.cols = [{
      field: 'id',
      header: 'ID'
    }]

    this.dataCol = []

    const keys = Object.keys(this.entity.data)
    const position = this.cols.length
    for (let i = 0; i < keys.length; i++) {
      this.dataCol[i] = keys[i]
      this.cols[position + i] = {
        field: keys[i],
        header: this.capitalize(keys[i])
      }
    }
  }

}
