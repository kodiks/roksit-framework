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
        let $el = $(".badges")[0];
        let isOverflowed = $el.offsetWidth < $el.scrollWidth;
        
        this.leftButton = isOverflowed;
        this.rightButton = isOverflowed;
    }

    changeBadge(ev) {
        const { name, value } = ev;

        if (value) {
            const findedColumn = this.columns.find(x => x.name === name);

            this.config.columns.push(findedColumn);
        } else {
            const index = this.config.columns.findIndex(x => x.name === name);

            this.config.columns.splice(index, 1);
        }

        this.config.columns.sort((a, b) => a.id > b.id ? 1 : -1);
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
