import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'rk-modal-header-title',
    template: `
        <div class="rk-modal-header-title">
            <ng-content></ng-content>
        </div>
    `
})

export class RkModalHeaderTitleComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
