import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'rk-progressbar',
    templateUrl: 'rk-progressbar.component.html',
    styleUrls: ['rk-progressbar.component.scss']
})

export class RkProgressbarComponent implements OnInit {

    constructor() { }

    @Input() value = 0;
    @Input() showType = '';
    @Input() sizeType = 'medium';
    @Input() type = '';

    ngOnInit() { }

}

