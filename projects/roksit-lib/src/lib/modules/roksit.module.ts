import { NgModule, Directive, Input, TemplateRef } from '@angular/core';
import { IconsModule } from './icons/icons.module';
import { RkMenuModule } from './rk-menu/rk-menu.module';
import { RkFilterBadgeModule } from './rk-filter-badge/rk-filter-badge.module';
import { RkTableModule } from './rk-table/rk-table.module';
import { NgSelect2Module } from 'ng-select2';
import { SharedModule } from './shared/shared.module';



@NgModule({
    imports: [
        SharedModule,
        IconsModule,
        RkMenuModule,
        RkFilterBadgeModule,
        RkTableModule,
        NgSelect2Module
    ],
    exports: [ 
        IconsModule,
        RkMenuModule,
        RkFilterBadgeModule,
        RkTableModule,
        NgSelect2Module
    ],
    declarations: [],
    bootstrap: [],
})
export class RoksitModule { }
