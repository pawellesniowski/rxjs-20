import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLoginComponent } from './simple-login.component';

@NgModule({
  declarations: [SimpleLoginComponent],
  imports: [CommonModule],
  exports: [SimpleLoginComponent],
})
export class SimpleLoginModule {}
