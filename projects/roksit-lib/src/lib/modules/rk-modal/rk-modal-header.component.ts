import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'rk-modal-header',
    template: `
        <div class="rk-modal-header">
            <div class="rk-modal-header-icon" *ngIf="icon.length > 0">
                <i-feather [name]="icon"></i-feather>
            </div>

            <ng-content select="rk-modal-header-title"></ng-content>

            <ng-content select="rk-modal-header-close"></ng-content>
        </div>
    `
})

export class RkModalHeaderComponent implements OnInit {

    constructor() { }

    /**
     * @description Icon Name | Feather Icons
     */
    @Input() icon = 'filter';

    /**
     * @description Close Button | Button Id
     */
    @Input() closeButton: string;

    ngOnInit() { }

}
