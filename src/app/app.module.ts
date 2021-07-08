import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FocusDirective } from './directives/focus.directive';
import { PageVisibilityModule } from './modules/page-visibility/page-visibility.module';
import { SimpleLoginModule } from './modules/simple-login/simple-login.module';
import { LoadingModule } from './modules/loading/loading.module';
import { CountdownModule } from './modules/countdown/countdown.module';
import { CinemaSeatsModule } from './modules/cinema-seats/cinema-seats.module';
import { StickyHeaderModule } from './modules/sticky-header/sticky-header.module';

@NgModule({
  declarations: [AppComponent, FocusDirective],
  imports: [
    BrowserModule,
    PageVisibilityModule,
    SimpleLoginModule,
    LoadingModule,
    CountdownModule,
    CinemaSeatsModule,
    StickyHeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
