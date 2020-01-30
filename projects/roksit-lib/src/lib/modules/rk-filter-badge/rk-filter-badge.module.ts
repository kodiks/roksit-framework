import { NgModule } from '@angular/core';
import { RkFilterBadgeComponent } from './rk-filter-badge.component';
import { IconsModule } from '../icons/icons.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [IconsModule,CommonModule],
    exports: [
        RkFilterBadgeComponent
    ],
    declarations: [
        RkFilterBadgeComponent
    ],
    providers: [],
})
export class RkFilterBadgeModule { }
