import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rk-radio',
    templateUrl: 'rk-radio.component.html'
})

export class RkRadioComponent implements OnInit {

    constructor() { }

    @Input() checked = false;

    @Input() name = '';

    @Input() disabled: boolean;

    @Output() valueChange: EventEmitter<boolean> = new EventEmitter();

    guid;

    ngOnInit() {
        this.setGUID();
    }

    changeRadio(ev) { }

    onChange() {
        this.valueChange.emit();
    }

    setGUID() {
        this.guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);

            return v.toString(16);
        });
    }

}