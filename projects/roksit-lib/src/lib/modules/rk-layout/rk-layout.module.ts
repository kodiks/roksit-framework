import { NgModule, ModuleWithProviders, Directive, Input, TemplateRef } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { CommonModule } from '@angular/common';
import { RkLayoutService } from './rk-layout.service';
import { RkListComponent } from './rk-list/rk-list.component';
 

@NgModule({
    imports: [
        CommonModule,
        IconsModule
    ],
    exports: [
        RkListComponent
    ],
    declarations: [
        RkListComponent
    ],
    providers: [
        RkLayoutService 
    ],
})
export class RkLayoutModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: RkLayoutModule, providers: [] };
    }
}
