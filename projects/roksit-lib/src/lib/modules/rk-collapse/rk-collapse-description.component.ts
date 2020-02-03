import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'rk-collapse-description',
    template: `
        <ng-content></ng-content>
    `
})

export class RkCollapseDescriptionComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
