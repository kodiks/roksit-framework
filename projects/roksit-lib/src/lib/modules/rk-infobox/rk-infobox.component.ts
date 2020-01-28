import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'rk-infobox',
    templateUrl: 'rk-infobox.component.html',
    styleUrls: ['rk-infobox.component.scss'],
})

export class RkInfoBoxComponent implements OnInit {
    constructor() { }

    // tslint:disable-next-line: no-input-rename
    @Input('active') isActive = false;
    // tslint:disable-next-line: no-input-rename
    @Input('type') type = 1;
    @Input() title = '';
    @Input() color = '';
    @Input() valueOne = 0;
    @Input() valueTwo = 0;
    @Input() description = '';

    @ViewChild('svgG', { static: true }) svgG: ElementRef;

    guid;



    // tslint:disable-next-line: no-input-rename
    @Input() className;

    ngOnInit() {
        this.guid = this.getGuid(6);

        this.svgG.nativeElement.setAttribute('stroke', `url(#linearGradient-${this.guid})`);
    }

    getGuid(len) {
        const buf = [];
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charlen = chars.length;
        const length = len || 32;

        for (let i = 0; i < length; i++) {
            buf[i] = chars.charAt(Math.floor(Math.random() * charlen));
        }

        return buf.join('');
    }

    toggleActive() {
        this.isActive = !this.isActive;
    }
}