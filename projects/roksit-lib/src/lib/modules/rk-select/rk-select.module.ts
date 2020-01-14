import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RkSelectDirective } from './rk-select.directive';
import { RkSelectInitializer } from './rk-select-initializer';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        RkSelectDirective
    ],
    declarations: [
        RkSelectDirective
    ],
    providers: [
        // { provide: APP_INITIALIZER, useFactory: RkSelectInitializer, deps: [], multi: false }
    ],
})
export class RkSelectModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: RkSelectModule, providers: [] };
    }
}
