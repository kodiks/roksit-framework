import { NgModule, ModuleWithProviders } from '@angular/core';
import { RkMenuService } from './rk-menu.service';
import { RkMenuContainerComponent } from './rk-menu-container/rk-menu-container.component';
import { RkMenuItemComponent } from './rk-menu-item/rk-menu-item.component';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';

@NgModule({
    imports: [
        CommonModule,
        IconsModule
    ],
    exports: [
        RkMenuContainerComponent,
        RkMenuItemComponent
    ],
    declarations: [
        RkMenuContainerComponent,
        RkMenuItemComponent
    ],
    providers: [
        RkMenuService
    ],
})
export class RkMenuModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: RkMenuModule, providers: [RkMenuService] };
    }
}
