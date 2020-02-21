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
import { RkTableExportComponent } from './rk-table-export/rk-table-export.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        IconsModule,
        NgbPaginationModule,
        RkSelectModule,
        RkBadgeModule,
        RkCheckboxModule,
        NgbModule,
        BsDropdownModule.forRoot()
    ],
    exports: [
        RkTablePaginationComponent,
        RkTableComponent,
        RkTableContainerComponent,
        RkTableExportComponent
    ],
    declarations: [
        RkTablePaginationComponent,
        RkTableComponent,
        RkTableContainerComponent,
        RkTableExportComponent
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
