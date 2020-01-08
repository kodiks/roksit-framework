import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector: 'rk-progressbar',
    templateUrl: 'rk-progressbar.component.html',
    styleUrls: ['rk-progressbar.component.scss']
})

export class RkProgressbarComponent implements OnInit {
    @Input() value: number = 0;
    @Input() showType: string = "";
    @Input() sizeType:string ="medium";
    @Input() type:string="success";

    constructor() { }

    ngOnInit() { }

}

