import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RkSelectComponent } from './rk-select.component';
import { FormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IconsModule
    ],
    exports: [
        RkSelectComponent,
    ],
    declarations: [
        RkSelectComponent,
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
