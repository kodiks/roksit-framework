import { NgModule, AfterViewInit, APP_INITIALIZER } from '@angular/core';
import { IconsModule } from './icons/icons.module';
import { RkMenuModule } from './rk-menu/rk-menu.module';
import { RkFilterBadgeModule } from './rk-filter-badge/rk-filter-badge.module';
import { RkTableModule } from './rk-table/rk-table.module';
import { SharedModule } from './shared/shared.module';
import { RkLayoutModule } from './rk-layout/rk-layout.module';
import { RkSelectModule } from './rk-select/rk-select.module';
import { RkAutoCompleteModule } from './rk-autocomplete/rk-autocomplete.module';
import { RkDateModule } from './rk-date/rk-date.module';
import { FormsModule } from '@angular/forms';
import { RkSelectInitializer } from './rk-select/rk-select-initializer';
import { RkUtilityService } from '../services/rk-utility.service';

@NgModule({
    imports: [
        SharedModule,
        IconsModule,
        RkMenuModule,
        RkFilterBadgeModule,
        RkTableModule,
        RkLayoutModule,
        RkSelectModule,
        RkAutoCompleteModule,
        FormsModule,
        RkDateModule
    ],
    exports: [
        IconsModule,
        RkMenuModule,
        RkFilterBadgeModule,
        RkTableModule,
        RkLayoutModule,
        RkSelectModule,
        RkAutoCompleteModule,
        RkDateModule 
        
    ],
    declarations: [],
    entryComponents: [],
    bootstrap: [],
    providers: []
})
export class RoksitModule { }

