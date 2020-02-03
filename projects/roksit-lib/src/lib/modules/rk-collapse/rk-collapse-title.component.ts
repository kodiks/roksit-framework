import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'rk-collapse-title',
    template: `
        <ng-content></ng-content>
    `
})

export class RkCollapseTitleComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
