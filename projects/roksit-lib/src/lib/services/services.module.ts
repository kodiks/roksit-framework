import { NgModule, ModuleWithProviders } from '@angular/core';
import { RkUtilityService } from './rk-utility.service';
import { RkLayoutService } from './rk-layout.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        RkUtilityService,
        RkLayoutService
    ],
})
export class ServicesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ServicesModule,
            providers: [
                RkUtilityService,
                RkLayoutService
            ]
        };
    }
}
