import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rk-autocomplete',
    templateUrl: 'rk-autocomplete.component.html'
})

export class RkAutoCompleteComponent implements OnInit {

    constructor() { }

    term = {} as RkAutoCompleteModel;
    showDropdown = false;

    @Input() items: RkAutoCompleteModel[] = [];

    @Input() value;

    @Output() valueChange = new EventEmitter();

    @Output() change = new EventEmitter();

    ngOnInit() { }

    selectOption(item: RkAutoCompleteModel) {
        const obj = Object.assign({}, item);

        this.term = obj;

        this.change.emit(obj);

        this.valueChange.emit(obj.value);
    }

    setShowDropdown(isShow) {
        setTimeout(() => {
            this.showDropdown = isShow;
        }, 100);
    }
}

export interface RkAutoCompleteModel {
    value?: string | number;
    text: string;
}
