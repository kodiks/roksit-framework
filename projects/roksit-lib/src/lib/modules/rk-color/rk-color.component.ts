import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'rk-color',
    templateUrl: 'rk-color.component.html'
})

export class RkColorComponent implements OnInit {

    constructor() { }

    @Input() color: 'white' | 'dark' = 'white';

    @Input() name: string;

    @Input() checked: boolean;

    @Output() colorChanged = new EventEmitter();

    ngOnInit() { }

    colorClick() {
        this.colorChanged.emit({
            color: this.color
        });
    }
}
