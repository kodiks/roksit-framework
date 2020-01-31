import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'rk-toggle-button',
    templateUrl: 'rk-toggle-button.component.html'
})

export class RkToggleButtonComponent implements OnInit {

    constructor() { }

    /**
     * @description Button Right Icon
     */
    @Input() icon: string;

    /**
     * @param {pos} string Positive Value
     * @param {neg} string Negative Value
     * @description Default Values => { pos: 'ON', nge: 'OFF' }
     */
    @Input() toggleTexts: { pos: string, neg: string } = {
        pos: 'ON',
        neg: 'OFF'
    };

    /**
     * @description Button change event: Modal => { active: booelan }
     */
    @Output() changed = new EventEmitter();

    /**
     * @description Default Active Value
     */
    @Input() active = false;

    ngOnInit() { }

    toggle() {
        this.active = !this.active;

        this.changed.emit({
            active: this.active
        });
    }

}
