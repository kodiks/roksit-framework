import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { RkSelectDirective } from './rk-select.directive';
import { RkSelectComponent } from './rk-select.component';

@NgModule({
    imports: [
        CommonModule,
        IconsModule
    ],
    exports: [
        RkSelectDirective,
        RkSelectComponent
    ],
    declarations: [
        RkSelectDirective,
        RkSelectComponent
    ],
    providers: [],
})
export class RkSelectModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: RkSelectModule, providers: [] };
    }
}
