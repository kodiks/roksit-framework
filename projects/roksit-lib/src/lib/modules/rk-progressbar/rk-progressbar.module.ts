import { NgModule } from '@angular/core';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import { RkProgressbarComponent } from './rk-progressbar.component';
import { CommonModule } from '@angular/common';
import { RkProgressbarNewComponent } from './new/rk-progressbar-n.component';

@NgModule({
    imports: [
        CommonModule,
        NgbProgressbarModule
    ],
    exports: [
        RkProgressbarComponent,
        RkProgressbarNewComponent
    ],
    declarations: [
        RkProgressbarComponent,
        RkProgressbarNewComponent
    ],
    entryComponents : [
        RkProgressbarComponent,
        RkProgressbarNewComponent
    ]
})
export class RkProgressBarModule { }
