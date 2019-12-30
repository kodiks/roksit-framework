import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'rk-menu-item',
    templateUrl: 'rk-menu-item.component.html'
})

export class RkMenuItemComponent implements OnInit {

    constructor() { }

    @Input() isActive = false;

    @Input() icon = '';

    @Input() text = '';

    ngOnInit() { }

}
