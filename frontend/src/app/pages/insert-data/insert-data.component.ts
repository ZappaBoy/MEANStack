import {Component, OnInit} from '@angular/core';
import {ToastService} from "../../services/toast.service";
import {BackendService} from "../../services/backend.service";
import {Entity} from "../../models/entity.model";

@Component({
  selector: 'app-insert-data',
  templateUrl: './insert-data.component.html',
  styleUrls: ['./insert-data.component.scss']
})

export class InsertDataComponent implements OnInit {
  dateFormat: string = "dd/mm/yy"
  display: boolean;
  badAuthorValue: boolean;
  badContentValue: boolean;
  badIdValue: boolean;

  entity: Entity = new Entity();

  constructor(private toastService: ToastService,
              private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.entity.id = this.randomIdGeneration()
  }

  submitValues() {
    this.clearErrors()
    if (this.valuesAccepted()) {
      this.askConfirmation()
    }
  }

  confirmSubmission() {
    this.backendService.addEntity(this.entity)
      .subscribe(() => {
        this.showConfirmationDialog(false)
        this.toastService.submissionSuccessful()
      }, () => {
        this.toastService.error()
      })
  }

  abort() {
    this.showConfirmationDialog(false)
  }

  setInvalidIf(status: boolean) {
    return {'invalid-input': status}
  }

  randomIdGeneration() {
    let randomId = Math.random().toString(36).substring(5, 10);
    return randomId.toUpperCase()
  }

  private clearErrors() {
    this.badAuthorValue = false
    this.badContentValue = false
  }

  private valuesAccepted(): boolean {
    if (this.entity.id === undefined || this.entity.id.length <= 0) {
      this.badIdValue = true
    }
    if (this.entity.data.author === undefined || this.entity.data.author.length <= 0) {
      this.badAuthorValue = true
    }
    if (this.entity.data.content === undefined || this.entity.data.content.length <= 0) {
      this.badContentValue = true
    }
    return !(this.badAuthorValue || this.badContentValue);
  }

  private askConfirmation() {
    this.showConfirmationDialog()
  }

  private showConfirmationDialog(status: boolean = true) {
    this.display = status
  }
}
