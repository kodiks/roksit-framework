import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoksitModule } from 'projects/roksit-lib/src/public-api';
import { IconsModule } from 'projects/roksit-lib/src/lib/modules/icons/icons.module';

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
