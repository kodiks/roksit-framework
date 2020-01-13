import { NgModule } from '@angular/core';
import { IconsModule } from './icons/icons.module';
import { RkMenuModule } from './rk-menu/rk-menu.module';
import { RkFilterBadgeModule } from './rk-filter-badge/rk-filter-badge.module';
import { RkTableModule } from './rk-table/rk-table.module';
import { SharedModule } from './shared/shared.module';
import { RkLayoutModule } from './rk-layout/rk-layout.module';
import { RkSelectModule } from './rk-select/rk-select.module';
import { RkAutoCompleteModule } from './rk-autocomplete/rk-autocomplete.module';

@NgModule({
    imports: [
        SharedModule,
        IconsModule,
        RkMenuModule,
        RkFilterBadgeModule,
        RkTableModule,
        RkLayoutModule,
        RkSelectModule,
        RkAutoCompleteModule
    ],
    exports: [
        IconsModule,
        RkMenuModule,
        RkFilterBadgeModule,
        RkTableModule,
        RkLayoutModule,
        RkSelectModule,
        RkAutoCompleteModule
    ],
    declarations: [],
    entryComponents: [],
    bootstrap: [],
})
export class RoksitModule { }
