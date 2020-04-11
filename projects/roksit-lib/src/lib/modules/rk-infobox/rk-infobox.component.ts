import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { RkUtilityService, ThemeColor } from '../../services/rk-utility.service';

@Component({
    selector: 'rk-infobox',
    templateUrl: 'rk-infobox.component.html',
    styleUrls: ['rk-infobox.component.scss'],
})

export class RkInfoBoxComponent implements OnInit {

    constructor(
        private utilityService: RkUtilityService
    ) {
        utilityService.themeColor.subscribe(result => {
            this.themeColor = result;
        });
    }

    themeColor: ThemeColor = 'light';

    // tslint:disable-next-line: no-input-rename
    @Input('active') isActive = false;
    // tslint:disable-next-line: no-input-rename
    @Input('type') type = 1;
    @Input() title = '';
    @Input() color = '';

    private _valueOne = 0;
    private _valueTwo = 0;

    @Input()
    get valueOne() { return this._valueOne; }
    set valueOne(val) {
        if (val) {
            this._valueOne = this.thousndSeperator(val);
        }
    }

    @Input()
    get valueTwo() { return this._valueTwo; }
    set valueTwo(val) {
        if (val) {
            this._valueTwo = this.thousndSeperator(val);
        }
    }

    @Input() description = '';

    @Output() change = new EventEmitter();

    @ViewChild('svgG', { static: true }) svgG: ElementRef;

    guid;

    // tslint:disable-next-line: no-input-rename
    @Input() className;

    ngOnInit() {
        this.guid = this.getGuid(6);

        this.svgG.nativeElement.setAttribute('stroke', `url(#linearGradient-${this.guid})`);
    }

    private thousndSeperator(val) {
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
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
        // this.isActive = !this.isActive;

        this.change.emit({
            active: this.isActive
        });
    }
}
