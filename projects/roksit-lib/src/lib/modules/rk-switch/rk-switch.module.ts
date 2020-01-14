import { NgModule } from '@angular/core';
import { RkSwitchComponent } from './rk-switch.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        RkSwitchComponent
    ],
    declarations: [
        RkSwitchComponent
    ],
    providers: [],
})
export class RkSwitchModule { }
