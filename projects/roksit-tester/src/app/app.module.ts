import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoksitModule } from 'projects/roksit-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoksitModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
