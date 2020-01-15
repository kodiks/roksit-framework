import { NgModule, ModuleWithProviders, Directive, Input, TemplateRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { CommonModule } from '@angular/common';
import { RkLayoutService } from './rk-layout.service';
import { RkListComponent } from './rk-list/rk-list.component';
import { RkCardComponent } from './rk-card/rk-card.component';
import { RkAccordionComponent } from './rk-accordion/rk-accordion.component';
import { RkAccordionPanelComponent } from './rk-accordion/rk-accordion-panel.component';


@NgModule({
    imports: [
        CommonModule,
        IconsModule
    ],
    exports: [
        RkListComponent,
        RkCardComponent,
        RkAccordionComponent,
        RkAccordionPanelComponent
    ],
    declarations: [
        RkListComponent,
        RkCardComponent,
        RkAccordionComponent,
        RkAccordionPanelComponent
    ],
    providers: [
        RkLayoutService
    ]
})
export class RkLayoutModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: RkLayoutModule, providers: [] };
    }
}
