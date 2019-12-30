import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'rk-filter-badge',
    templateUrl: 'rk-filter-badge.component.html'
})
export class RkFilterBadgeComponent implements OnInit {

    constructor() { }

    @Input() filterName = '';

    ngOnInit() { }

}
