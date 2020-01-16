import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
// import { RoksitModule } from 'projects/roksit-lib/src/public-api';
import { RoksitModule  } from 'roksit-lib';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RkProgressBarModule } from 'roksit-lib/lib/modules/rk-progressbar/rk-progressbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoksitModule.forRoot(),
    RkProgressBarModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [NO_ERRORS_SCHEMA]
})
export class AppModule { }
