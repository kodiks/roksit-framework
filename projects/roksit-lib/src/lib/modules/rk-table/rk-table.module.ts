import { NgModule, ModuleWithProviders } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { CommonModule } from '@angular/common';
import { RkTableService } from './rk-table.service';
import { RkTablePaginationComponent } from './rk-table-pagination/rk-table-pagination.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { RkTableComponent } from './rk-table/rk-table.component';
import { RkSelectModule } from '../rk-select/rk-select.module';
import { RkTableContainerComponent } from './rk-table-container/rk-table-container.component';
import { RkBadgeModule } from '../rk-badge/rk-badge.module';
import { RkCheckboxModule } from '../rk-checkbox/rk-checkbox.module';

@NgModule({
    imports: [
        CommonModule,
        IconsModule,
        NgbPaginationModule,
        RkSelectModule,
        RkBadgeModule,
        RkCheckboxModule
    ],
    exports: [
        RkTablePaginationComponent,
        RkTableComponent,
        RkTableContainerComponent
    ],
    declarations: [
        RkTablePaginationComponent,
        RkTableComponent,
        RkTableContainerComponent
    ],
    providers: [
        RkTableService
    ]
})
export class RkTableModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: RkTableModule, providers: [] };
    }
}
