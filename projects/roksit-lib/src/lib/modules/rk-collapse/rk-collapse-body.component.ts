import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'rk-collapse-body',
    template: `
        <ng-content></ng-content>
    `
})

export class RkCollapseBodyComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
