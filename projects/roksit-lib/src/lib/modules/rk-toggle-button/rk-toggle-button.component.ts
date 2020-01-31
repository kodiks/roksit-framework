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
     * @param pos type: string => Positive Value
     * @param neg type: string => Negative Value
     * @description Default Values => { pos: 'ON', nge: 'OFF' }
     */
    @Input() toggleTexts: { pos: string, neg: string };

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
