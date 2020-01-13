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

    // tslint:disable-next-line: no-output-native
    @Output() change = new EventEmitter();

    ngOnInit() { }

    selectOption(item: RkAutoCompleteModel) {
        const obj = Object.assign({}, item);

        this.term = obj;
        this.change.emit(obj);
    }

    setShowDropdown(isShow) {
        setTimeout(() => {
            this.showDropdown = isShow;
        }, 200);
    }
}

export interface RkAutoCompleteModel {
    value?: string | number;
    text: string;
}
