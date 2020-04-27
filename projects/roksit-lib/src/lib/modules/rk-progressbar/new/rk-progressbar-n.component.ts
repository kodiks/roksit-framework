import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'rk-progressbar-n',
    template: `
        <div class="rk-progressbar-n">
            <div class="rk-progressbar-n-value" [ngStyle]="{'width': value + '%'}"></div>
        </div>
    `
})

export class RkProgressbarNewComponent implements OnInit {

    constructor() { }

    @Input() value: number;

    ngOnInit() { }

}
