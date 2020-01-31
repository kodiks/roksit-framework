import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { RkToggleButtonComponent } from './rk-toggle-button.component';

@NgModule({
    imports: [
        CommonModule,
        IconsModule
    ],
    exports: [
        RkToggleButtonComponent
    ],
    declarations: [
        RkToggleButtonComponent
    ],
    providers: [],
})
export class RkToggleButtonModule { }
