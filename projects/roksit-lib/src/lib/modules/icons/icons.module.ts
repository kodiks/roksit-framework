import { NgModule, ModuleWithProviders } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

@NgModule({
    imports: [
        FeatherModule.pick(allIcons)
    ],
    exports: [
        FeatherModule
    ]
})
export class IconsModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: IconsModule, providers: [] };
    }
}
