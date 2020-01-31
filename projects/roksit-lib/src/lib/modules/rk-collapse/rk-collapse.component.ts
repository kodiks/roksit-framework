import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'rk-collapse',
    templateUrl: 'rk-collapse.component.html'
})

export class RkCollapseComponent implements OnInit {

    constructor() { }

    @Input() active = true;

    @Input() color = '#d8d8d8';

    ngOnInit() { }

    toggle() {
        this.active = !this.active;
    }

}
