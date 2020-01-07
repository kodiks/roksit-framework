import { NgModule, ModuleWithProviders, Directive, Input, TemplateRef } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { CommonModule } from '@angular/common';
import { RkTableService } from './rk-table.service';
import { RkTablePaginationComponent } from './rk-table-pagination/rk-table-pagination.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { RkTableComponent } from './rk-table/rk-table.component';
 

@NgModule({
    imports: [
        CommonModule,
        IconsModule,
        NgbPaginationModule,
    ],
    exports: [
        RkTablePaginationComponent,
        RkTableComponent 
    ],
    declarations: [
        RkTablePaginationComponent,
        RkTableComponent 
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
