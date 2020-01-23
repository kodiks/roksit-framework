import { NgModule, ModuleWithProviders } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import {
    IconEqualComponent, IconNotEqualComponent, IconDashboard,
    IconCustomReports, IconDeployment, IconDevice, IconMonitor,
    IconRoamingClients, IconSettings, IconHelp, IconPublicIp,
    IconRequestCategory, IconThemeColor, IconTools
} from './icons.component';
import { IconForMenuComponent } from './icon-for-menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FeatherModule.pick(allIcons),
    ],
    declarations: [
        IconForMenuComponent,
        IconEqualComponent,
        IconNotEqualComponent,
        IconDashboard,
        IconCustomReports,
        IconDeployment,
        IconDevice,
        IconRoamingClients,
        IconSettings,
        IconMonitor,
        IconHelp,
        IconPublicIp,
        IconRequestCategory,
        IconThemeColor,
        IconTools
    ],
    exports: [
        IconForMenuComponent,
        FeatherModule,
        IconEqualComponent,
        IconNotEqualComponent,
        IconDashboard,
        IconCustomReports,
        IconDeployment,
        IconDevice,
        IconRoamingClients,
        IconSettings,
        IconMonitor,
        IconHelp,
        IconPublicIp,
        IconRequestCategory,
        IconThemeColor,
        IconTools
    ]
})
export class IconsModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: IconsModule, providers: [] };
    }
}
