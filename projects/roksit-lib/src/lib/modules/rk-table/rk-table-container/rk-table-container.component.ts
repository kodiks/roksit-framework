import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'rk-table-container',
    templateUrl: 'rk-table-container.component.html'
})

export class RkTableContainerComponent implements OnInit {

    constructor(
        private el: ElementRef
    ) { }

    ngOnInit() {
        console.log(this.el);
    }

}
