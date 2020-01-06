import { NgModule } from '@angular/core';
import { IconsModule } from './icons/icons.module';
import { RkMenuModule } from './rk-menu/rk-menu.module';
import { RkFilterBadgeModule } from './rk-filter-badge/rk-filter-badge.module';
import { RkSelectModule } from './rk-select/rk-select.module';
import { RkTableModule } from './rk-table/rk-table.module';

@NgModule({
    imports: [
        IconsModule,
        RkMenuModule,
        RkFilterBadgeModule,
        RkSelectModule,
        RkTableModule
    ],
    exports: [
        IconsModule,
        RkMenuModule,
        RkFilterBadgeModule,
        RkSelectModule,
        RkTableModule
    ],
    declarations: [],
    bootstrap: [],
})
export class RoksitModule { }
