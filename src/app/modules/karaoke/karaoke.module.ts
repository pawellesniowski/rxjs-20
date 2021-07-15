import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KaraokeComponent } from './karaoke.component';

@NgModule({
  declarations: [KaraokeComponent],
  imports: [CommonModule],
  exports: [KaraokeComponent],
})
export class KaraokeModule {}
