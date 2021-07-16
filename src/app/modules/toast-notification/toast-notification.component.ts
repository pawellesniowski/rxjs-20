import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification/notification.service';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.scss'],
})
export class ToastNotificationComponent implements OnInit {
  text = '';

  constructor(readonly service: NotificationService) {}

  show(): void {
    this.service.show(this.text).subscribe();
  }

  ngOnInit(): void {}
}
