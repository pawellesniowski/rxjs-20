import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastNotificationComponent } from './toast-notification.component';
import { NotificationModule } from './notification/notification.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToastNotificationComponent],
  imports: [CommonModule, NotificationModule, FormsModule],
  exports: [ToastNotificationComponent],
})
export class ToastNotificationModule {}
