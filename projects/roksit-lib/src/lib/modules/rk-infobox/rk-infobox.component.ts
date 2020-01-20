import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rk-infobox',
    templateUrl: 'rk-infobox.component.html',
    styleUrls: ['rk-infobox.component.scss'],
})

export class RkInfoBoxComponent implements OnInit {
    constructor() { }

    @Input('active') isActive : boolean = false;
    @Input('type') type : number = 1;
    @Input() title : string = "";
    @Input() color : string = "";
    @Input() valueOne : number = 0;
    @Input() valueTwo : number = 0;
    


    ngOnInit() {
        this.statusChanged();
    }

    toggleActive() {
        this.isActive = !this.isActive;

        this.statusChanged();
    }


    statusChanged() {

    }


}
