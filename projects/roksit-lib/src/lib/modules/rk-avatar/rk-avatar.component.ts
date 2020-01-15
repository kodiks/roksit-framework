import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'rk-avatar',
    templateUrl: 'rk-avatar.component.html',
    styleUrls: ['rk-avatar.component.scss'],
    providers: [NgbDropdownConfig]
})

export class RkAvatarComponent implements OnInit {



    constructor() { }



    ngOnInit() {
    }
}
