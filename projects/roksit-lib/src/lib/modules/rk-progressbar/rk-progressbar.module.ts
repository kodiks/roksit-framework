import { NgModule } from '@angular/core';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import { RkProgressbarComponent } from './rk-progressbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        NgbProgressbarModule
    ],
    exports: [
        RkProgressbarComponent
    ],
    declarations: [
        RkProgressbarComponent
    ],
    providers: [],
})
export class RkProgressBarModule { }
