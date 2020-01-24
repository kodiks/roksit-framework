import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RkSelectModel } from '../../rk-select/rk-select.component';

@Component({
    selector: 'rk-table-pagination',
    templateUrl: 'rk-table-pagination.component.html'
})

export class RkTablePaginationComponent implements OnInit {

    constructor() { }

    @Input() totalCount = 0;

    @Input() pageViewCount = 0;

    @Input() currentPage = 1;

    @Input() maxSize = 8;

    @Output() pageChange: EventEmitter<number> = new EventEmitter();

    @Output() pageViewCountChange: EventEmitter<number> = new EventEmitter();

    options: RkSelectModel[] = [
        { displayText: '10', value: 10, selected : true },
        { displayText: '25', value: 25 },
        { displayText: '50', value: 50 },
        { displayText: '100', value: 100 },
    ];

    ngOnInit() { }

    onPageChange(pageNumber) {
        this.pageChange.emit(pageNumber);
    }

    onPageViewCountChange() {
        this.pageViewCountChange.emit(this.pageViewCount);
    }

}
