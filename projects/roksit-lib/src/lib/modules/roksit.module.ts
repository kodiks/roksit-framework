import { NgModule } from '@angular/core';
import { IconsModule } from './icons/icons.module';
import { RkMenuModule } from './rk-menu/rk-menu.module';

@NgModule({
    imports: [
        IconsModule,
        RkMenuModule,
    ],
    exports: [
        IconsModule,
        RkMenuModule,
    ],
    declarations: [],
    bootstrap: [],
})
export class RoksitModule { }
