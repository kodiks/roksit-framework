import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'icon-for-menu',
    templateUrl: 'icon-for-menu.component.html'
})

export class IconForMenuComponent implements OnInit {

    constructor() { }

    @Input() type: MenuIcon;

    ngOnInit() { }

}

export type MenuIcon =
    'dashboard' |
    'monitor' |
    'custom-reports' |
    'public-ip' |
    'devices' |
    'roaming-clients' |
    'settings' |
    'user' |
    'saved-reports' |
    'security-profiles' |
    'query-category' |
    'request-category' |
    'theme-mode' |
    'help';
