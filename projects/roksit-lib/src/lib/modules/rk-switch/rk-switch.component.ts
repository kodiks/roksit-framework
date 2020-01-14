import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rk-switch',
    templateUrl: 'rk-switch.component.html'
})

export class RkSwitchComponent implements OnInit {

    constructor() { }

    @Input() value = false;
    @Output() valueChange = new EventEmitter();

    switch = this.value;


    ngOnInit() { }

    changed() {
        this.valueChange.emit(this.switch);
    }

}
