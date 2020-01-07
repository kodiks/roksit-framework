import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RkSelectModel } from '../../rk-select/rk-select.component';

@Component({
    selector: 'rk-table-pagination',
    templateUrl: 'rk-table-pagination.component.html',
    styleUrls: ['rk-table-pagination.component.scss']
})

export class RkTablePaginationComponent implements OnInit {
    @Input() totalCount: number = 100;
    @Input() pageViewCount: number = 20;
    @Input() currentPage: number = 1;

    @Output() pageChange: EventEmitter<number> = new EventEmitter();
    @Output() pageViewCountChange: EventEmitter<number> = new EventEmitter();


    pageViewCounts: RkSelectModel[] = [
        { displayText: '20', value: 20 },
        { displayText: '50', value: 50 },
        { displayText: '100', value: 100 }
    ];

    constructor() { }

    onPageChange = (pageNumber) => {
        this.pageChange.emit(pageNumber);
    }

    onPageViewCountChange(pageViewcount: RkSelectModel) {
        this.pageViewCountChange.emit(pageViewcount.value as number);
    }

    ngOnInit() { }
}
