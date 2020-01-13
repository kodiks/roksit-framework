import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';

@Component({
    selector: 'rk-date',
    templateUrl: 'rk-date.component.html'
})
export class RkDateComponent implements OnInit {

    constructor() { }

    selected: { start: Moment, end: Moment };

    selectedDate;

    ngOnInit() { }

    choosedDate(ev) {
        console.log(ev);
    }

}
