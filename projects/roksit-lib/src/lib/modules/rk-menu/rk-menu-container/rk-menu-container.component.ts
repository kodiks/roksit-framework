import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'rk-menu-container',
    template: `
        <div class="menu">
            <ng-content></ng-content>
        </div>
    `
})

export class RkMenuContainerComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
