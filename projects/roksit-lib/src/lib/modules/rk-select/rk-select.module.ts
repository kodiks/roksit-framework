import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RkSelectDirective } from './rk-select.directive';

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
    providers: [],
})
export class RkSelectModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: RkSelectModule, providers: [] };
    }
}
