import { NgModule, ModuleWithProviders } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { IconEqualComponent, IconNotEqualComponent } from './icons.component';

@NgModule({
    imports: [
        FeatherModule.pick(allIcons)
    ],
    declarations: [
        IconEqualComponent,
        IconNotEqualComponent
    ],
    exports: [
        FeatherModule,
        IconEqualComponent,
        IconNotEqualComponent
    ]
})
export class IconsModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: IconsModule, providers: [] };
    }
}
