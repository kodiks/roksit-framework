import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface RkFilterOutput {
    name: string;
    values: string[];
    equal: boolean;

    // type?: 'edit' | 'change' | 'delete';
    index?: number;
}

@Component({
    selector: 'rk-filter-badge',
    templateUrl: 'rk-filter-badge.component.html'
})
export class RkFilterBadgeComponent implements OnInit {

    constructor() { }

    @Input('name') filterName = '';
    @Input('values') filterValues = [];
    @Input('equal') isEqual = false;

    @Input('index') _index = -1;

    @Output('deleted') onDelete = new EventEmitter();
    @Output('edited') onEdit = new EventEmitter();
    @Output() onChange = new EventEmitter();


    ngOnInit() { }

    toggleEqual() {
        this.isEqual = !this.isEqual;

        this.onChange.emit({
            name: this.filterName,
            values: this.filterValues,
            equal: this.isEqual,
            index: this._index
        } as RkFilterOutput);
    }

    onEditClick() {
        this.onEdit.emit({
            name: this.filterName,
            values: this.filterValues,
            equal: this.isEqual,
            index: this._index
        } as RkFilterOutput);
    }

    onDeleteClick() {
        this.onDelete.emit({
            name: this.filterName,
            values: this.filterValues,
            equal: this.isEqual,
            index: this._index
        } as RkFilterOutput);
    }
}
