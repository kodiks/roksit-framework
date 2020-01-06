import { NgModule, ModuleWithProviders } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { CommonModule } from '@angular/common';
import { RkTableService } from './rk-table.service';
import { RkTablePaginationComponent } from './rk-table-pagination/rk-table-pagination.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { RkSelectModule } from '../rk-select/rk-select.module';

@NgModule({
    imports: [
        CommonModule,
        IconsModule,
        NgbPaginationModule,
        RkSelectModule
    ],
    exports: [
        RkTablePaginationComponent
    ],
    declarations: [
        RkTablePaginationComponent
    ],
    providers: [
        RkTableService
    ],
})
export class RkTableModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: RkTableModule, providers: [] };
    }
}
