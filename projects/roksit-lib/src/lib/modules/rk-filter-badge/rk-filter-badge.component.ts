import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rk-filter-badge',
    templateUrl: 'rk-filter-badge.component.html'
})
export class RkFilterBadgeComponent implements OnInit {

    constructor() { }

    @Input('name') filterName = '';
    @Input('values') filterValues = '';
    @Input('equal') isEqual: boolean = false;

    @Output('deleted') onDelete = new EventEmitter();
    @Output('edited') onEdit = new EventEmitter();


    ngOnInit() { }

    toggleEqual() {
        this.isEqual = !this.isEqual;
    }

    onEditClick() {
        this.onEdit.emit();
    }

    onDeleteClick() {
        this.onDelete.emit();
    }

}
