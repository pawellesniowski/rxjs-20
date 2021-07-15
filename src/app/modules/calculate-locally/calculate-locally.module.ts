import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateLocallyComponent } from './calculate-locally.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [CalculateLocallyComponent, FilterPipe],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CalculateLocallyComponent],
})
export class CalculateLocallyModule {}
