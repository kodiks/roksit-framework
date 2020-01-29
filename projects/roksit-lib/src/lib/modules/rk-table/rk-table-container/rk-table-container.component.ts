import { Component, OnInit, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { RkTableConfigModel, RkTableColumnModel } from '../rk-table/rk-table.component';

declare const $: any;


@Component({
    selector: 'rk-table-container',
    templateUrl: 'rk-table-container.component.html'
})

export class RkTableContainerComponent implements OnInit, AfterViewInit {

    constructor(
        private el: ElementRef
    ) { }

    @Input() config: RkTableConfigModel;

    columns = [] as RkTableColumnModel[];

    @ViewChild('badges', { static: false }) badges;

    leftButton = true;
    rightButton = true;

    ngOnInit() {
        this.columns = Object.assign([], this.config.columns);
    }

    ngAfterViewInit() {
        if ($(".badges").length > 0) {
            let $el = $(".badges")[0];
            let isOverflowed = $el.offsetWidth < $el.scrollWidth;

            this.leftButton = isOverflowed;
            this.rightButton = isOverflowed;
        }
    }

    changeBadge(ev) {
        const { name, value } = ev;

        let col = this.config.columns.find(item => item.name == name);

        if (col)
            col.selected = value;
    }

    hasChecked(col: RkTableColumnModel) {
        return this.config.columns.some(x => x.name === col.name);
    }

    scroll(rotation: 'left' | 'right') {
        if (rotation === 'left') {
            this.badges.nativeElement.scrollLeft -= 100;
        } else {
            this.badges.nativeElement.scrollLeft += 100;
        }
    }

}
