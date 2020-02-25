import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RkColorComponent } from './rk-color.component';
import { RkRadioModule } from '../rk-radio/rk-radio.module';

@NgModule({
    imports: [
        CommonModule,
        RkRadioModule
    ],
    exports: [
        RkColorComponent
    ],
    declarations: [
        RkColorComponent
    ],
    providers: [],
})
export class RkColorModule { }
