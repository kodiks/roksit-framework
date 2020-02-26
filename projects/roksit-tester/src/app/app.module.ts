import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
// import { RoksitModule } from 'projects/roksit-lib/src/public-api';
// import { RoksitModule  } from 'roksit-lib';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoksitModule, ServicesModule } from 'projects/roksit-lib/src/public-api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoksitModule.forRoot(),
    CommonModule,
    FormsModule,
    ServicesModule.forRoot(),
    NgbModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [NO_ERRORS_SCHEMA]
})
export class AppModule { }
 