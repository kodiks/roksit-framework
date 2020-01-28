import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'rk-modal-footer',
    template: `
        <div class="rk-modal-footer">
            <ng-content></ng-content>
        </div>
    `
})

export class RkModalFooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
