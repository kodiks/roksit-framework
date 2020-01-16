import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rk-badge',
    templateUrl: 'rk-badge.component.html'
})

export class RkBadgeComponent implements OnInit {

    constructor() { }

    @Input() value: boolean;
    @Output() valueChange = new EventEmitter();

    ngOnInit() { }

    valueChanged() {
        this.value = !this.value;

        this.valueChange.emit(this.value);
    }

}
