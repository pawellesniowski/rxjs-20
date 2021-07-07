import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaSeatsComponent } from './cinema-seats.component';

@NgModule({
  declarations: [CinemaSeatsComponent],
  imports: [CommonModule],
  exports: [CinemaSeatsComponent],
})
export class CinemaSeatsModule {}
