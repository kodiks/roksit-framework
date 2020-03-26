import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

export type ExportTypes = 'excel' | 'pdf';

export interface RkTableExportVisibles {
    excel: boolean;
    pdf: boolean;
}

@Component({
    selector: 'rk-table-export',
    templateUrl: 'rk-table-export.component.html'
})
export class RkTableExportComponent implements OnInit {

    constructor() { }

    @Input() showTypes: RkTableExportVisibles = {
        excel: true,
        pdf: true
    };

    @Output() event: EventEmitter<ExportTypes> = new EventEmitter<ExportTypes>();

    ngOnInit() { }

    clicked(type: ExportTypes) {
        this.event.emit(type);
    }
}
