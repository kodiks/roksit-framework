import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

export interface RkFilterOutput {
    name: string;
    placeholder?: string;

    values: string[];
    equal: boolean;

    // type?: 'edit' | 'change' | 'delete';
    index?: number;
}

@Component({
    selector: 'rk-filter-badge',
    templateUrl: 'rk-filter-badge.component.html',
    animations: [
        trigger('must', [
            state('true', style({ background: '#4FC3F7', color: '#fff' })),
            state('false', style({ background: '#ffffff', color: '#3397c5' })),
            transition('0 <=> 1', animate('500ms ease'))
        ]),
        trigger('mustnot', [
            state('true', style({ background: '#ef9a9a' })),
            state('false', style({ background: '#ffffff' })),
            transition('0 <=> 1', animate('500ms ease'))
        ]),
    ]
})
export class RkFilterBadgeComponent implements OnInit {

    constructor() { }

    mustState = false;
    mustnotState = false;

    firstNotSet = false;

    // tslint:disable-next-line: no-input-rename
    @Input('name') filterName = '';

    // tslint:disable-next-line: no-input-rename
    @Input('displayText') placeholder?: string;

    // tslint:disable-next-line: variable-name
    private _values = [];

    // tslint:disable-next-line: no-input-rename
    @Input('values')
    get values() { return this._values; }
    set values(values: string[]) {
        this._values = values;

        if (this.firstNotSet) {
            if (this.isEqual) {
                this.mustStateToggle();
            } else {
                this.mustnotStateToggle();
            }
        } else {
            this.firstNotSet = true;
        }
    }

    // tslint:disable-next-line: no-input-rename
    @Input('equal') isEqual = false;

    // tslint:disable-next-line: variable-name & no-input-rename
    @Input('index') _index = -1;

    // tslint:disable-next-line: no-output-rename no-output-on-prefix
    @Output('deleted') onDelete = new EventEmitter();

    // tslint:disable-next-line: no-output-rename no-output-on-prefix
    @Output('edited') onEdit = new EventEmitter();

    // tslint:disable-next-line: no-output-rename no-output-on-prefix
    @Output() onChange = new EventEmitter();


    ngOnInit() { }

    toggleEqual() {
        this.isEqual = !this.isEqual;

        this.onChange.emit({
            name: this.filterName,
            values: this._values,
            equal: this.isEqual,
            index: this._index
        } as RkFilterOutput);
    }

    onEditClick() {
        this.onEdit.emit({
            name: this.filterName,
            values: this._values,
            equal: this.isEqual,
            index: this._index
        } as RkFilterOutput);
    }

    onDeleteClick() {
        this.onDelete.emit({
            name: this.filterName,
            values: this._values,
            equal: this.isEqual,
            index: this._index
        } as RkFilterOutput);
    }

    mustStateToggle() {
        this.mustState = !this.mustState;

        setTimeout(() => {
            this.mustState = !this.mustState;
        }, 300);
    }

    mustnotStateToggle() {
        this.mustnotState = !this.mustnotState;

        setTimeout(() => {
            this.mustnotState = !this.mustnotState;
        }, 300);
    }
}
