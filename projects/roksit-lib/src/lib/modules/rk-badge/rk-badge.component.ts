import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rk-badge',
    templateUrl: 'rk-badge.component.html'
})

export class RkBadgeComponent implements OnInit {

    constructor() { }

    @Input() value: boolean;
    @Output() valueChange = new EventEmitter();

    @Input() name?: string;

    ngOnInit() { }

    valueChanged() {
        this.value = !this.value;

        this.valueChange.emit({
            name: this.name,
            value: this.value
        });
    }

}
