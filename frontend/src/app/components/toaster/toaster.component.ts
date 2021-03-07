import {Component, OnInit} from '@angular/core';
import {Message, MessageService} from 'primeng/api';
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  providers: [MessageService]
})
export class ToasterComponent implements OnInit {

  constructor(private messageService: MessageService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.toastService.invokeEvent
      .subscribe((message: Message) => {
        this.showToast(message)
      });
  }

  private showToast(message: Message) {
    this.messageService.add(message);
  }
}
