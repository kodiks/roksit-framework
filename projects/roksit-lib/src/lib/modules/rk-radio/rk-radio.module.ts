import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RkRadioComponent } from './rk-radio.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        RkRadioComponent
    ],
    declarations: [
        RkRadioComponent
    ],
    providers: [],
})
export class RkRadioModule { }
