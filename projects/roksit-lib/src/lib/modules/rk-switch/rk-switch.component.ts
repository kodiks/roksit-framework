import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rk-switch',
    templateUrl: 'rk-switch.component.html'
})

export class RkSwitchComponent implements OnInit {

    constructor() { }

    @Input() value = false;
    @Output() valueChange = new EventEmitter();

    guid;

    ngOnInit() {
        this.guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    changed() {
        this.value = !this.value;
        this.valueChange.emit(this.value);
    }
}
