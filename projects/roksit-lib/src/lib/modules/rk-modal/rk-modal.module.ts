import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RkModalComponent } from './rk-modal.component';
import { RkModalHeaderComponent } from './rk-modal-header.component';
import { RkModalHeaderTitleComponent } from './rk-modal-header-title.component';
import { RkModalBodyComponent } from './rk-modal-body.component';
import { RkModalFooterComponent } from './rk-modal-footer.component';
import { IconsModule } from '../icons/icons.module';
import { RkModalHeaderCloseComponent } from './rk-modal-header-close.component';

@NgModule({
    imports: [
        CommonModule,
        IconsModule
    ],
    exports: [
        RkModalComponent,
        RkModalHeaderComponent,
        RkModalHeaderTitleComponent,
        RkModalHeaderCloseComponent,
        RkModalBodyComponent,
        RkModalFooterComponent
    ],
    declarations: [
        RkModalComponent,
        RkModalHeaderComponent,
        RkModalHeaderTitleComponent,
        RkModalHeaderCloseComponent,
        RkModalBodyComponent,
        RkModalFooterComponent
    ],
    providers: [],
})
export class RkModalModule { }
