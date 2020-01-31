import { NgModule } from '@angular/core';
import { RkCollapseComponent } from './rk-collapse.component';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';

@NgModule({
    imports: [
        CommonModule,
        IconsModule
    ],
    exports: [
        RkCollapseComponent
    ],
    declarations: [
        RkCollapseComponent
    ],
    providers: [],
})
export class RkCollapseModule { }
