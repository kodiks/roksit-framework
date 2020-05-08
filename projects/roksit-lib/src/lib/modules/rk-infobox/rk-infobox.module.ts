import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RkInfoBoxComponent } from './rk-infobox.component';
import { Ng2OdometerModule } from 'ng2-odometer';

@NgModule({
    imports: [
        CommonModule,
        Ng2OdometerModule.forRoot()
    ],
    exports: [
        RkInfoBoxComponent
    ],
    declarations: [
        RkInfoBoxComponent
    ],
    providers: [],
})
export class RkInfoBoxModule { }
