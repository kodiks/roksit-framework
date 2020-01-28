import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'rk-modal-body',
    template: `
        <div class="rk-modal-body">
            <ng-content></ng-content>
        </div>
    `
})

export class RkModalBodyComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
