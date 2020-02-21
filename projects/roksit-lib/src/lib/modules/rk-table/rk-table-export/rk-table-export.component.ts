import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export type ExportTypes = 'excel' | 'pdf';

@Component({
    selector: 'rk-table-export',
    templateUrl: 'rk-table-export.component.html'
})
export class RkTableExportComponent implements OnInit {

    constructor() { }

    @Output() event: EventEmitter<ExportTypes> = new EventEmitter<ExportTypes>();

    ngOnInit() { }

    clicked(type: ExportTypes) {
        this.event.emit(type);
    }
}
