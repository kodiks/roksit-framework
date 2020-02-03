import { NgModule } from '@angular/core';
import { RkCollapseComponent } from './rk-collapse.component';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { RkCollapseTitleComponent } from './rk-collapse-title.component';
import { RkCollapseDescriptionComponent } from './rk-collapse-description.component';
import { RkCollapseBodyComponent } from './rk-collapse-body.component';

@NgModule({
    imports: [
        CommonModule,
        IconsModule
    ],
    exports: [
        RkCollapseComponent,
        RkCollapseTitleComponent,
        RkCollapseDescriptionComponent,
        RkCollapseBodyComponent
    ],
    declarations: [
        RkCollapseComponent,
        RkCollapseTitleComponent,
        RkCollapseDescriptionComponent,
        RkCollapseBodyComponent
    ],
    providers: [],
})
export class RkCollapseModule { }
