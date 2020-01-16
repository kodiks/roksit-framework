import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { RkTableConfigModel } from '../rk-table/rk-table.component';

@Component({
    selector: 'rk-table-container',
    templateUrl: 'rk-table-container.component.html'
})

export class RkTableContainerComponent implements OnInit {
    @Input() config: RkTableConfigModel;

    constructor(
        private el: ElementRef
    ) { }

    ngOnInit() {
        console.log(this.el);
    }

}
