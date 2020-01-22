import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rk-infobox',
    templateUrl: 'rk-infobox.component.html',
    styleUrls: ['rk-infobox.component.scss'],
})

export class RkInfoBoxComponent implements OnInit {
    constructor() { }

    @Input('active') isActive = false;
    @Input('type') type = 1;
    @Input() title = '';
    @Input() color = '';
    @Input() valueOne = 0;
    @Input() valueTwo = 0;

    ngOnInit() {
        this.statusChanged();
    }

    toggleActive() {
        this.isActive = !this.isActive;

        this.statusChanged();
    }


    statusChanged() {

    }


}
