import { NgModule, AfterViewInit, APP_INITIALIZER, ModuleWithProviders } from '@angular/core';
import { IconsModule } from './icons/icons.module';
import { RkMenuModule } from './rk-menu/rk-menu.module';
import { RkFilterBadgeModule } from './rk-filter-badge/rk-filter-badge.module';
import { RkTableModule } from './rk-table/rk-table.module';
import { SharedModule } from './shared/shared.module';
import { RkLayoutModule } from './rk-layout/rk-layout.module';
import { RkProgressBarModule } from './rk-progressbar/rk-progressbar.module';
import { RkAvatarModule } from './rk-avatar/rk-avatar.module';
import { RkSelectModule } from './rk-select/rk-select.module';
import { RkAutoCompleteModule } from './rk-autocomplete/rk-autocomplete.module';
import { RkDateModule } from './rk-date/rk-date.module';
import { FormsModule } from '@angular/forms';
import { RkSwitchModule } from './rk-switch/rk-switch.module';
import { RkRadioModule } from './rk-radio/rk-radio.module';
import { RkBadgeModule } from './rk-badge/rk-badge.module';
import { RkCheckboxModule } from './rk-checkbox/rk-checkbox.module';
import { RkInfoBoxModule } from './rk-infobox/rk-infobox.module';
import { RkSidebarModule } from './rk-sidebar/rk-sidebar.module';
import { ServicesModule } from '../services/services.module';
import { RkModalModule } from './rk-modal/rk-modal.module';

@NgModule({
    imports: [
        SharedModule,
        IconsModule,
        RkMenuModule,
        RkFilterBadgeModule,
        RkTableModule,
        RkLayoutModule,
        RkProgressBarModule,
        RkAvatarModule,
        RkSelectModule,
        RkAutoCompleteModule,
        FormsModule,
        RkDateModule,
        RkSwitchModule,
        RkRadioModule,
        RkBadgeModule,
        RkCheckboxModule,
        RkInfoBoxModule,
        RkSidebarModule,
        ServicesModule,
        RkModalModule,
        RkFilterBadgeModule
    ],
    exports: [
        IconsModule,
        RkMenuModule,
        RkFilterBadgeModule,
        RkTableModule,
        RkLayoutModule,
        RkProgressBarModule,
        RkAvatarModule,
        RkSelectModule,
        RkAutoCompleteModule,
        RkDateModule,
        RkSwitchModule,
        RkRadioModule,
        RkBadgeModule,
        RkCheckboxModule,
        RkInfoBoxModule,
        RkSidebarModule,
        ServicesModule,
        RkModalModule,
        RkFilterBadgeModule

    ],
    declarations: [],
    entryComponents: [],
    bootstrap: [],
    providers: []
})
export class RoksitModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: RoksitModule,
            providers: []
        };
    }
}
