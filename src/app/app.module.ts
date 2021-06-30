import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FocusDirective } from './directives/focus.directive';
import { PageVisibilityModule } from './modules/page-visibility/page-visibility.module';
import { SimpleLoginModule } from './modules/simple-login/simple-login.module';

@NgModule({
  declarations: [AppComponent, FocusDirective],
  imports: [BrowserModule, PageVisibilityModule, SimpleLoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
