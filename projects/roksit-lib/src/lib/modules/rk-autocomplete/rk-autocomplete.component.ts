import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface RkAutoCompleteOutput {
    value: string | number;
}

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

    @Output() onSelect = new EventEmitter();

    // tslint:disable-next-line: no-output-rename no-output-on-prefix
    @Output('enterPress') onEnter = new EventEmitter();

    ngOnInit() { }

    selectOption(item: RkAutoCompleteModel) {
        const obj = Object.assign({}, item);

        this.term = obj;

        this.onSelect.emit(obj);

        this.valueChange.emit(obj.value);
    }

    setShowDropdown(isShow) {
        setTimeout(() => {
            this.showDropdown = isShow;
        }, 100);
    }

    onEnterPress($event: KeyboardEvent) {
        this.onEnter.emit({
            // tslint:disable-next-line: no-string-literal
            value: $event.target['value']
        } as RkAutoCompleteOutput);
    }
}

export interface RkAutoCompleteModel {
    value?: string | number;
    text: string;
}
