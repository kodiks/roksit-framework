import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'rk-checkbox',
    templateUrl: 'rk-checkbox.component.html'
})

export class RkCheckboxComponent implements OnInit {

    constructor() { }

    @Input() value = false;
    @Output() valueChange = new EventEmitter();

    @Input() size: 'sm' | 'md' | 'lg' = 'md';

    guid;

    ngOnInit() {
        this.guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    valueChanged() {
        this.value = !this.value;
        this.valueChange.emit(this.value);
    }

}
