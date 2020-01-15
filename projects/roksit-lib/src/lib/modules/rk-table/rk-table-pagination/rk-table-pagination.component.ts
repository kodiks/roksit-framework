import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RkSelectModel } from '../../rk-select/rk-select.component';

@Component({
    selector: 'rk-table-pagination',
    templateUrl: 'rk-table-pagination.component.html'
})

export class RkTablePaginationComponent implements OnInit {

    constructor() { }

    @Input() totalCount = 100;
    @Input() pageViewCount = 10;
    @Input() currentPage = 1;

    @Output() pageChange: EventEmitter<number> = new EventEmitter();
    @Output() pageViewCountChange: EventEmitter<number> = new EventEmitter();

    options: RkSelectModel[] = [
        { displayText: '10', value: 10, selected: true },
        { displayText: '25', value: 25 },
        { displayText: '50', value: 50 },
        { displayText: '100', value: 100 },
    ];

    ngOnInit() { }

    onPageChange(pageNumber) {
        this.pageChange.emit(pageNumber);
    }

    onPageViewCountChange(pageViewcount) {
        this.pageViewCountChange.emit(pageViewcount.value as number);
    }

}
