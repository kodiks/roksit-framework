import { NgModule } from '@angular/core';
import { IconsModule } from './icons/icons.module';
import { RkMenuModule } from './rk-menu/rk-menu.module';
import { RkFilterBadgeModule } from './rk-filter-badge/rk-filter-badge.module';
import { RkSelectModule } from './rk-select/rk-select.module';

@NgModule({
    imports: [
        IconsModule,
        RkMenuModule,
        RkFilterBadgeModule,
        RkSelectModule
    ],
    exports: [
        IconsModule,
        RkMenuModule,
        RkFilterBadgeModule,
        RkSelectModule
    ],
    declarations: [],
    bootstrap: [],
})
export class RoksitModule { }
